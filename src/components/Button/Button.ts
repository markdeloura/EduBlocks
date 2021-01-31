import { Data } from "@/types";
import { Variants } from "@/components/variants";

/**
 * Main button class
 */
export class Button {
	/**
	 * Button class setup
	 */
	private variant: Variants;

	constructor(props: Data) {
		this.variant = props.variant as Variants;
	}
	
	/**
	 * Get the classes for the specified button variant
	 * @returns string
	 */
	public getVariant(): string {
		const currentVariant: Array<string> = [];

		switch (this.variant) {
			case Variants.Primary:
				currentVariant.push("bg-pink-500", "hover:bg-pink-600", "focus:ring-pink-500");
				break;
			case Variants.Secondary:
				currentVariant.push("bg-navy-500", "hover:bg-navy-700", "focus:ring-navy-500");
				break;
			case Variants.Success:
				currentVariant.push("bg-green-500", "hover:bg-green-700", "focus:ring-green-500");
				break;
			case Variants.Error:
				currentVariant.push("bg-red-500", "hover:bg-red-700", "focus:ring-red-500");
				break;
			case Variants.Light:
				currentVariant.push("bg-white", "hover:bg-gray-50", "focus:ring-white");
				break;
		}

		return currentVariant.join(" ");
	} 
}