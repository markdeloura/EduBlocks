export enum Platform {
	Python = "Python 3",
	MicroBit = "micro:bit",
	RaspberryPi = "Raspberry Pi",
	CircuitPython = "CircuitPython",
} 

interface PlatformOptions {
	id: number;
	title: Platform;
	image: string;
}

export const python: PlatformOptions = { id: 1, title: Platform.Python, image:"/images/platforms/Python 3.png" };
export const microbit: PlatformOptions = { id: 2, title: Platform.MicroBit, image:"/images/platforms/micro:bit.png" };
export const raspberrypi: PlatformOptions = { id: 3, title: Platform.RaspberryPi, image:"/images/platforms/Raspberry Pi.png" };
export const circuitpython: PlatformOptions = { id: 4, title: Platform.CircuitPython, image:"/images/platforms/CircuitPython.png" };

export const platforms: Array<PlatformOptions> = [ python, microbit, raspberrypi, circuitpython];