import router from "@/router/index";
import { ref, Ref } from "vue";
import { modalState } from "@/components/Modals/ModalState";

/**
 * Define schema for navigation options
 */
interface NavOptions {
	id: number;
	text: string;
	icon: string;
	path: string;
}

/**
 * Stores slideover nav open/close state
 */
export const isSlideOverNavOpen: Ref<boolean> = ref(false);

/**
 * Main navbar class
 */
export class SlideoverNav {
	/**
	 * Define options for the navbar
	 */
	public navOptions: Array<NavOptions> = [
		{id: 1, text: "Home", icon: "home", path: "/"},
		{id: 2, text: "My Projects", icon: "folder", path: "/projects"},
		{id: 3, text: "Showcase", icon: "film", path: "/showcase"},
		{id: 4, text: "Guides", icon: "book_open", path: "/guides"},
		{id: 5, text: "Classroom", icon: "users", path: "/classroom"},
		{id: 6, text: "Settings", icon: "cog", path: "/settings"},
	]
	
	/**
	 * Navigate to a specified router path
	 * @param {string} path
	 */
	public navigateToRoute(path: string): void {
		isSlideOverNavOpen.value = false;
		router.push({path});
	}

	/**
	 * Close the slide over navigation bar
	 */
	public closeSlideOverNav(): void{
		isSlideOverNavOpen.value = false;
	}

	/**
	 * Close the slide over navigation bar, redirect to homepage and open the new project modal
	 */
	public closeAndOpenNewProject(): void{
		router.push({path: "/"});
		this.closeSlideOverNav();
		modalState.createProjectModal = true;
	}
}