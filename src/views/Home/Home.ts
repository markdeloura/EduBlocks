import router from "@/router/index";
import { modalState } from "@/components/Modals/ModalState";
import { Platform } from "@/platforms/platforms";
import { state } from "@/state";

export default class Home {
	/**
	 * Navigate to a specified router path
	 * @param {string} path
	 */
	public navigateToRoute(path: string): void {
		router.push({path});
	}

	public createNewProjectWithPlatform(platform: Platform): void {
		state.mode = platform;
		modalState.createProjectModal = true;
	}

} 