import clCover from "../../../assets/music/cover/cl.webp?url";
import dazbeeCover from "../../../assets/music/cover/dazbee.webp?url";
import hitoriCover from "../../../assets/music/cover/hitori.webp?url";
import xryxCover from "../../../assets/music/cover/xryx.webp?url";
import elmaCover from "../../../assets/music/cover/ヨルシカ.-.エルマ.jpg?url";
import sousakuCover from "../../../assets/music/cover/創作.jpg?url";
import gentouCover from "../../../assets/music/cover/幻燈.jpg?url";
import tousakuCover from "../../../assets/music/cover/盗作.jpg?url";
import kutsuNoHanabiCover from "../../../assets/music/cover/靴の花火.jpg?url";
import harudorobouSong from "../../../assets/music/song/02. 春泥棒.ogg?url";
import ameToCappuccinoSong from "../../../assets/music/song/04 - 雨とカプチーノ.ogg?url";
import usotsukiSong from "../../../assets/music/song/05. 嘘月.ogg?url";
import kutsuNoHanabiSong from "../../../assets/music/song/06 - 靴の花火.ogg?url";
import roujinToUmiSong from "../../../assets/music/song/07 - 老人と海.ogg?url";
import hanaMojibakeSong from "../../../assets/music/song/07 - 花人局.ogg?url";
import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";
export const DEFAULT_VOLUME = 0.7;
export const DEFAULT_COVER_URL = "/favicon/favicon.ico";

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "春泥棒",
		artist: "ヨルシカ",
		cover: sousakuCover,
		url: harudorobouSong,
		duration: 290,
	},
	{
		id: 2,
		title: "雨とカプチーノ",
		artist: "ヨルシカ",
		cover: elmaCover,
		url: ameToCappuccinoSong,
		duration: 272,
	},
	{
		id: 3,
		title: "嘘月",
		artist: "ヨルシカ",
		cover: sousakuCover,
		url: usotsukiSong,
		duration: 290,
	},
	{
		id: 4,
		title: "靴の花火",
		artist: "ヨルシカ",
		cover: kutsuNoHanabiCover,
		url: kutsuNoHanabiSong,
		duration: 305,
	},
	{
		id: 5,
		title: "老人と海",
		artist: "ヨルシカ",
		cover: gentouCover,
		url: roujinToUmiSong,
		duration: 257,
	},
	{
		id: 6,
		title: "花人局",
		artist: "ヨルシカ",
		cover: tousakuCover,
		url: hanaMojibakeSong,
		duration: 336,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: DEFAULT_COVER_URL,
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
