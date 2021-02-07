import router from "@/router/index";

export default class Home {
	/**
	 * Navigate to a specified router path
	 * @param {string} path
	 */
	public navigateToRoute(path: string): void {
		router.push({path});
	}
} 