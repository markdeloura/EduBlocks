import { ref, Ref } from "vue";
import { authentication } from "@/providers/auth";

/**
 * Define schema for profile dropdown options
 */
interface ProfileOptions {
	id: number;
	text: string;
	action: Function;
}

export const isDropdownOpen: Ref<boolean> = ref(false);

/**
 * Main avatar class
 */
export class Avatar {
	/**
	 * Temporary sign out function
	 */
	public signOut(): void {
		isDropdownOpen.value = false;
		authentication.signOut();
	}

	public closeDropdown(): void {
		isDropdownOpen.value = false;
	}
} 