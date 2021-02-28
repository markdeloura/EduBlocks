import { reactive } from "vue";

export enum Platform {
	None = "None",
	Python = "Python 3",
	MicroBit = "BBC micro:bit",
	RaspberryPi = "Raspberry Pi",
	CircuitPython = "CircuitPython",
	HTML = "HTML",
} 

const Python: PlatformOptions = reactive({
	id: 1,
	title: Platform.Python,
	value: Platform.Python,
	image: "/images/platforms/Python 3.png",
	color: "bg-navy-500"
})

const HTML: PlatformOptions = reactive({
	id: 2,
	title: Platform.HTML,
	value: Platform.HTML,
	image: "/images/platforms/HTML.png",
	color: "bg-blue-500"
})

const MicroBit: PlatformOptions = reactive({
	id: 3,
	title: Platform.MicroBit,
	value: Platform.MicroBit,
	image: "/images/platforms/BBC micro:bit.png",
	color: "bg-green-400"
})


const CircuitPython: PlatformOptions = reactive({
	id: 4,
	title: Platform.CircuitPython,
	value: Platform.CircuitPython,
	image: "/images/platforms/CircuitPython.png",
	color: "bg-purple-500"
})

const RaspberryPi: PlatformOptions = reactive({
	id: 5,
	title: Platform.RaspberryPi,
	value: Platform.RaspberryPi,
	image: "/images/platforms/Raspberry Pi.png",
	color: "bg-pink-600"
})

interface PlatformOptions {
	id: number;
	title: Platform;
	image: string;
	color: string;
}

export const platforms: Array<PlatformOptions> = [ Python, HTML, MicroBit, CircuitPython, RaspberryPi];