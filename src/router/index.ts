import { createRouter, createWebHistory, RouteRecordRaw, Router } from "vue-router";
import Home from "../views/Home/Home.vue";
import Showcase from "../views/Showcase/Showcase.vue";
import Editor from "../views/Editor/Editor.vue";
import Login from "../views/Login/Login.vue";
import Projects from "../views/Projects/Projects.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/showcase",
		name: "Showcase",
		component: Showcase,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/projects",
		name: "My Projects",
		component: Projects,
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
