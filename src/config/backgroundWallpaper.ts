import type { FullscreenWallpaperConfig } from "../types/config";

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true,
	src: {
		desktop: [
			"assets/desktop-banner/p5.png",
			"assets/desktop-banner/p6.jpg",
			"assets/desktop-banner/p7.png",
			"assets/desktop-banner/p8.png",
		],
		mobile: [
			"/assets/mobile-banner/p12.jpg",
			"assets/mobile-banner/p10.jpg",
			"/assets/mobile-banner/p11.png",
			"/assets/mobile-banner/senjogahala.png",
		],
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 5,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
	switchable: true,
	overlay: {
		opacity: 0.8, // 壁纸不透明度，0-1
		blur: 1.5, // 背景模糊半径（px）
		cardOpacity: 0.8, // 卡片不透明度，0-1
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
	},
	fullscreen: {
		switchable: {
			opacity: true,
			blur: true,
		},
	},
};
