import { reactive } from "vue";

export enum Platform {
	Python = "Python 3",
	MicroBit = "BBC micro:bit",
	RaspberryPi = "Raspberry Pi",
	CircuitPython = "CircuitPython",
} 

const Python: PlatformOptions = reactive({
	id: 1,
	title: Platform.Python,
	image: "/images/platforms/Python 3.png",
	color: "bg-navy-500"
})

const MicroBit: PlatformOptions = reactive({
	id: 2,
	title: Platform.MicroBit,
	image: "/images/platforms/microbit.png",
	color: "bg-green-400"
})

const RaspberryPi: PlatformOptions = reactive({
	id: 3,
	title: Platform.RaspberryPi,
	image: "/images/platforms/Raspberry Pi.png",
	color: "bg-raspberrypi"
})

const CircuitPython: PlatformOptions = reactive({
	id: 4,
	title: Platform.CircuitPython,
	image: "/images/platforms/CircuitPython.png",
	color: "bg-purple-500"
})

interface PlatformOptions {
	id: number;
	title: Platform;
	image: string;
	color: string;
}

export const platforms: Array<PlatformOptions> = [ Python, MicroBit, RaspberryPi, CircuitPython];