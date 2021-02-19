import { ref, Ref } from "vue";
import { Data } from "@/types";

export enum Variants {
	Primary = "Primary",
	Blue = "Blue",
	Green = "Green",
	Red = "Red",
	Purple = "Purple",
}

export const isDropdownOpen: Ref<boolean> = ref(false);

/**
 * Main ListItem class
 */
export class ListItem {
	/**
	 * ListItem class setup
	 */
	private variant: Variants;

	constructor(props: Data) {
		this.variant = props.variant as Variants;
	}

	public closeDropdown(): void {
		isDropdownOpen.value = false;
	}
	
	/**
	 * Get the classes for the specified ListItem variant
	 * @returns string
	 */
	public getVariant(): string {
		const currentVariant: Array<string> = [];

		switch (this.variant) {
			case Variants.Primary:
				currentVariant.push("bg-navy-100", "text-navy-500");
				break;
			case Variants.Blue:
				currentVariant.push("bg-blue-100", "text-blue-400");
				break;
			case Variants.Red:
				currentVariant.push("bg-pink-100", "text-pink-700");
				break;
			case Variants.Purple:
				currentVariant.push("bg-purple-100", "text-purple-500");
				break;
			case Variants.Green:
				currentVariant.push("bg-green-100", "text-green-500");
				break;
		}

		return currentVariant.join(" ");
	} 
}