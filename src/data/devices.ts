// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Xiaomi: [
		{
			name: "Xiaomi 17ProMax",
			image: "/images/device/Xiaomi%2017ProMax.png",
			specs: "White / 16GB + 512GB",
			link: "https://www.mi.com/prod/xiaomi-17-pro-max",
		},
	],
	LapTop: [
		{
			name: "ROG G615",
			image: "/images/device/ROG-StrixG16.png",
			specs: "U9-275hx 5070ti",
			link: "https://rog.asus.com.cn/laptops/rog-strix/rog-strix-g16-2025/",
		},
	],
};
