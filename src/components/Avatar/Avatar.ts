import { ref, Ref } from "vue";

/**
 * Define schema for profile dropdown options
 */
interface ProfileOptions {
	id: number;
	text: string;
	action: Function;
}

/**
 * Main avatar class
 */
export class Avatar {
	/**
	 * Stores the open/close state of the dropdown menu
	 */
	public isDropdownOpen: Ref<boolean> = ref(false);

	/**
	 * Temporary sign out function
	 */
	private signOut(): void {
		console.log("Hello World");
	}

	/**
	 * Define profile options for the dropdown menu
	 */
	public profileOptions: Array<ProfileOptions> = [
		{id: 1, text: "Profile", action: this.signOut},
		{id: 2, text: "Settings", action: this.signOut},
	]
} 