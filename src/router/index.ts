import { createRouter, createWebHistory, RouteRecordRaw, Router } from "vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Showcase from "../views/Showcase/Showcase.vue";
import Editor from "../views/Editor/Editor.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Dashboard",
		component: Dashboard,
	},
	{
		path: "/showcase",
		name: "Showcase",
		component: Showcase,
	},
	{
		path: "/editor",
		name: "Editor",
		component: Editor,
		meta: {
			layout: "BlankLayout"
		}
	},
];

const router: Router = createRouter({
	history: createWebHistory("/"),
	routes
});

export default router;
