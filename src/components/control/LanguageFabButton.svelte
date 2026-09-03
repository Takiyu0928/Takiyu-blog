<script lang="ts">
import { onDestroy, onMount } from "svelte";

import { siteConfig } from "@/config";
import { en } from "@/i18n/languages/en";
import { zh_CN } from "@/i18n/languages/zh_CN";

type UiLanguage = "en" | "zh_CN";

const STORAGE_KEY = "mizuki-ui-language";
const EXCLUDED_SELECTOR =
	"article, pre, code, script, style, textarea, [data-no-ui-translate]";
const TRANSLATABLE_ATTRIBUTES = ["aria-label", "placeholder", "title"];
const translations = { en, zh_CN };
const translationKeys = new Map<string, keyof typeof en>();

for (const dictionary of Object.values(translations)) {
	for (const [key, value] of Object.entries(dictionary)) {
		if (value.trim()) {
			translationKeys.set(value.trim(), key as keyof typeof en);
		}
	}
}

const defaultLanguage: UiLanguage = siteConfig.lang
	.toLowerCase()
	.startsWith("zh")
	? "zh_CN"
	: "en";

let language = $state<UiLanguage>(defaultLanguage);
let observer: MutationObserver | undefined;
let scheduledFrame: number | undefined;

const targetLanguage = $derived(language === "en" ? "zh_CN" : "en");
const buttonText = $derived(language === "en" ? "中" : "EN");
const buttonLabel = $derived(
	language === "en" ? "Switch to Chinese" : "切换为英文",
);

function translateValue(value: string, target: UiLanguage): string {
	const trimmed = value.trim();
	if (!trimmed) return value;

	const key = translationKeys.get(trimmed);
	if (!key) return value;

	const translated = translations[target][key];
	if (!translated || translated === trimmed) return value;

	const start = value.indexOf(trimmed);
	return `${value.slice(0, start)}${translated}${value.slice(start + trimmed.length)}`;
}

function translateNode(node: Node, target: UiLanguage) {
	if (node.nodeType === Node.TEXT_NODE) {
		const textNode = node as Text;
		const nextValue = translateValue(textNode.data, target);
		if (nextValue !== textNode.data) textNode.data = nextValue;
		return;
	}

	if (!(node instanceof Element) || node.matches(EXCLUDED_SELECTOR)) return;

	for (const attribute of TRANSLATABLE_ATTRIBUTES) {
		const value = node.getAttribute(attribute);
		if (!value) continue;

		const nextValue = translateValue(value, target);
		if (nextValue !== value) node.setAttribute(attribute, nextValue);
	}

	for (const child of node.childNodes) translateNode(child, target);
}

function applyLanguage(target: UiLanguage) {
	language = target;
	document.documentElement.lang = target === "zh_CN" ? "zh-CN" : "en";
	document.documentElement.dataset.uiLanguage = target;
	translateNode(document.body, target);
}

function scheduleTranslation() {
	if (scheduledFrame !== undefined) return;
	scheduledFrame = requestAnimationFrame(() => {
		scheduledFrame = undefined;
		translateNode(document.body, language);
	});
}

function toggleLanguage() {
	const nextLanguage = targetLanguage;
	applyLanguage(nextLanguage);
	localStorage.setItem(STORAGE_KEY, nextLanguage);
	window.dispatchEvent(
		new CustomEvent("mizuki:language-change", {
			detail: { language: nextLanguage },
		}),
	);
}

function restoreLanguage() {
	const stored = localStorage.getItem(STORAGE_KEY);
	applyLanguage(stored === "en" || stored === "zh_CN" ? stored : defaultLanguage);
}

onMount(() => {
	restoreLanguage();

	observer = new MutationObserver(scheduleTranslation);
	observer.observe(document.body, {
		childList: true,
		characterData: true,
		subtree: true,
	});

	document.addEventListener("astro:page-load", restoreLanguage);
	document.addEventListener("swup:contentReplaced", restoreLanguage);
});

onDestroy(() => {
	observer?.disconnect();
	if (scheduledFrame !== undefined) cancelAnimationFrame(scheduledFrame);
	if (typeof document === "undefined") return;
	document.removeEventListener("astro:page-load", restoreLanguage);
	document.removeEventListener("swup:contentReplaced", restoreLanguage);
});
</script>

<button
	id="language-fab-btn"
	type="button"
	class="language-fab btn-card"
	class:active={language !== defaultLanguage}
	aria-label={buttonLabel}
	title={buttonLabel}
	data-no-ui-translate
	onclick={toggleLanguage}
>
	<span aria-hidden="true">{buttonText}</span>
</button>

<style>
	.language-fab {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: var(--fab-button-size, 3rem);
		height: var(--fab-button-size, 3rem);
		min-width: 0;
		min-height: 0;
		padding: 0.25rem;
		border: 1px solid rgba(148, 163, 184, 0.45);
		border-radius: 1rem;
		cursor: pointer;
		color: var(--primary);
		font-size: 1rem;
		font-weight: 700;
		line-height: 1;
		pointer-events: auto;
		transition:
			transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
			box-shadow 0.3s ease,
			background 0.3s ease;
	}

	.language-fab:hover {
		box-shadow: var(--shadow-button);
	}

	.language-fab:active {
		transform: scale(0.94);
	}

	.language-fab.active {
		background: var(--btn-card-bg-active);
	}

	:global(.dark) .language-fab {
		border-color: rgba(255, 255, 255, 0.15);
	}

	:global(.dark) .language-fab:hover {
		box-shadow: var(--shadow-button-dark);
	}

	@media (width < 768px) {
		.language-fab {
			border-radius: 0.75rem;
			font-size: 0.9rem;
		}
	}

	@media (width < 480px) {
		.language-fab {
			border-radius: 0.5rem;
			font-size: 0.82rem;
		}
	}
</style>
