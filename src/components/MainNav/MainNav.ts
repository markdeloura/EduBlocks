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
 * Main navbar class
 */
export class MainNav {
	/**
	 * Define options for the navbar
	 */
	public navOptions: Array<NavOptions> = [
		{id: 1, text: "Dashboard", icon: "home", path: "/"},
		{id: 2, text: "Showcase", icon: "film", path: "/showcase"},
		{id: 3, text: "Classroom", icon: "users", path: "/classroom"},
	]
}