import { App } from "vue";

// Modals
import CreateProjectModal from "@/components/Modals/CreateProjectModal/CreateProjectModal.vue";

// Register all modals globally
export default {
	install(app: App): void {
		app.component("Avatar", CreateProjectModal);
	}
};