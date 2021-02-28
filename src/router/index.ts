import { createRouter, createWebHistory, RouteRecordRaw, Router } from "vue-router";
import Home from "../views/Home/Home.vue";
import Showcase from "../views/Showcase/Showcase.vue";
import Editor from "../views/Editor/Editor.vue";
import Login from "../views/Login/Login.vue";
import Projects from "../views/Projects/Projects.vue";
import Classroom from "../views/Classroom/Classroom.vue";
import ClassroomDetail from "../views/Classroom/ClassroomDetail.vue";
import ClassroomAssignment from "../views/Classroom/ClassroomAssignment.vue";
import JoinClassroom from "../views/Classroom/JoinClassroom.vue";
import Preview from "../views/Preview/Preview.vue";

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
		path: "/classroom",
		name: "Classroom",
		component: Classroom,
	},
	{
		path: "/classroom/:classID",
		name: "ClassroomDetail",
		component: ClassroomDetail,
	},
	{
		path: "/classroom/:classID/assignment/:assignmentID",
		name: "ClassroomAssignment",
		component: ClassroomAssignment,
	},
	{
		path: "/classroom/join/:classID",
		name: "JoinClassroom",
		component: JoinClassroom,
		meta: {
			layout: "BlankLayout"
		}
	},
	{
		path: "/editor",
		name: "Editor",
		component: Editor,
		meta: {
			layout: "BlankLayout"
		}
	},
	{
		path: "/website",
		name: "Preview",
		component: Preview,
		meta: {
			layout: "BlankLayout"
		}
	}
];

const router: Router = createRouter({
	history: createWebHistory("/"),
	routes
});

export default router;
