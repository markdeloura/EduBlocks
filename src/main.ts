import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/index";
import modals from "@/components/Modals/index";

createApp(App)
	.use(router)
	.use(components)
	.use(modals)
	.mount("#app");
