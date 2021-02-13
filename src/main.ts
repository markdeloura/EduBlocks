import { createApp, ComponentPublicInstance, Directive, DirectiveBinding } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/index";
import modals from "@/components/Modals/index";
import { authentication } from "@/providers/auth";
import { listenForScreenSizeChange } from "@/providers/mobile";

let app: ComponentPublicInstance | undefined;

const clickOutside: Directive = {
	beforeMount: (el: any, binding: DirectiveBinding) => {
	  el.clickOutsideEvent = (event: Event): void => {
			if (!(el === event.target || el.contains(event.target))) {
				binding.value();
			}
	  };
	  document.addEventListener("click", el.clickOutsideEvent);
	},
	unmounted: (el: any) => {
	  document.removeEventListener("click", el.clickOutsideEvent);
	},
};

authentication.auth.onAuthStateChanged(() => {
	if (!app) {
		listenForScreenSizeChange();
		
		app = createApp(App)
			.use(router)
			.use(components)
			.use(modals)
			.directive("click-outside", clickOutside)
			.mount("#app");
	}
});
