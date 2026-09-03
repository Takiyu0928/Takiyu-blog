import type { SiteConfig } from "../types/config";

// 定义站点语言
const SITE_LANG = "en"; // 语言代码，例如：'en', 'zh_CN', 'ja' 等。

export const siteConfig: SiteConfig = {
	title: "Takiyu's blog",
	subtitle: "my demo website",
	siteURL: "https://takiyu-wiki.ccwu.cc/",
	siteStartDate: "2026-08-04",
	lang: SITE_LANG,
	themeColor: {
		hue: 240,
		fixed: false,
	},
	featurePages: {
		anime: true,
		diary: true,
		friends: false,
		projects: true,
		skills: true,
		timeline: true,
		albums: true,
		devices: true,
		aiTools: true,
	},
	navbarTitle: {
		mode: "text-icon",
		text: "TakiyuUI",
		icon: "assets/home/wiki-icon.webp",
		logo: "assets/home/wiki-icon.webp",
	},
	pageScaling: {
		enable: false,
		targetWidth: 2000,
	},
	font: {
		mode: "custom",
	},
	bangumi: {
		userId: "1041639",
		fetchOnDev: false,
	},
	bilibili: {
		vmid: "1590135171",
		fetchOnDev: false,
		coverMirror: "",
		useWebp: true,
	},
	anime: {
		mode: "bangumi",
	},
	diaryApiUrl: "",
	postListLayout: {
		defaultMode: "list",
		enable: true,
		allowSwitch: true,
		categoryBar: {
			enable: true,
		},
	},
	tagStyle: {
		useNewStyle: false,
	},
	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "both",
	},
	banner: {
		src: {
			desktop: [
				"/assets/desktop-banner/1788419164683-1.jpg",
				"/assets/desktop-banner/1788419175198-2.jpg",
				"/assets/desktop-banner/1788419185208-3.jpg",
				"/assets/desktop-banner/1788419194177-4.jpg",
			],
			mobile: [
				"/assets/mobile-banner/1788418737181-6.png",
				"/assets/mobile-banner/1788418746774-7.jpg",
				"/assets/mobile-banner/1788418756273-8.jpg",
			],
		},
		position: "top",
		carousel: {
			enable: true,
			interval: 3,
			switchable: true,
		},
		waves: {
			enable: true,
			performanceMode: false,
			mobileDisable: false,
			switchable: true,
		},
		imageApi: {
			enable: false,
			url: "http://domain.com/api_v2.php?format=text&count=4",
		},
		homeText: {
			enable: true,
			title: "タキユの部屋",
			switchable: true,
			subtitle: [
				"特別なことはないけど、君がいると十分です",
				"今でもあなたは私の光",
				"君ってさ、知らないうちに私の毎日になってたよ",
				"君と話すと、なんか毎日がちょっと楽しくなるんだ",
				"今日はなんでもない日。でも、ちょっとだけいい日",
			],
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		credit: {
			enable: false,
			text: "Describe",
			url: "",
		},
		navbar: {
			transparentMode: "semifull",
		},
	},
	toc: {
		enable: true,
		mobileTop: true,
		desktopSidebar: false,
		floating: true,
		depth: 2,
		useJapaneseBadge: true,
	},
	showCoverInContent: true,
	generateOgImages: false,
	favicon: [],
	showLastModified: true,
	pageProgressBar: {
		enable: true,
		height: 3,
		duration: 6000,
	},
	thirdPartyAnalytics: {
		enable: false,
		clarityId: "",
	},
	card: {
		border: true,
		followTheme: false,
	},
	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: [
			"*.hdslb.com",
		],
	},
};

export { SITE_LANG };
