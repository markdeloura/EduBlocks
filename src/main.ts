import { createApp, ComponentPublicInstance } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/index";
import modals from "@/components/Modals/index";
import { authentication } from "@/providers/auth";

let app: ComponentPublicInstance | undefined;

authentication.auth.onAuthStateChanged(() => {
	if (!app) {
		app = createApp(App)
			.use(router)
			.use(components)
			.use(modals)
			.mount("#app");
	}
});
