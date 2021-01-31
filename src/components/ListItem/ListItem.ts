import { Data } from "@/types";
import { Platform } from "@/platforms/platforms";

/**
 * Main list item class
 */
export class ListItem {
	/**
	 * List item setup
	 */
	private variant: Platform;

	constructor(props: Data) {
		this.variant = props.variant as Platform;
	}
    
	/**
	 * Get the classes for the specified variant
	 * @returns string
	 */
	public getVariant(): string {
		const currentVariant: Array<string> = [];

		switch (this.variant) {
			case Platform.Python:
				currentVariant.push("bg-gradient-to-r", "from-blue-400", "to-blue-500");
				break;
			case Platform.MicroBit:
				currentVariant.push("bg-gradient-to-r", "from-green-400", "to-green-500");
				break;
			case Platform.RaspberryPi:
				currentVariant.push("bg-gradient-to-r", "from-red-400", "to-red-500");
				break;
			case Platform.CircuitPython:
				currentVariant.push("bg-gradient-to-r", "from-purple-400", "to-purple-500");
				break;
		}

		return currentVariant.join(" ");
	} 
}