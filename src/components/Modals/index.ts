import { App } from "vue";

// Modals
import Modal from "@/components/Modals/Modal/Modal.vue";
import CreateProjectModal from "@/components/Modals/CreateProjectModal/CreateProjectModal.vue";
import ImportProjectModal from "@/components/Modals/ImportProjectModal/ImportProjectModal.vue";
import CreateClassModal from "@/components/Modals/CreateClassModal/CreateClassModal.vue";
import CreateAssignmentModal from "@/components/Modals/CreateAssignmentModal/CreateAssignmentModal.vue";
import AddToClassModal from "@/components/Modals/AddToClassModal/AddToClassModal.vue";
import JoinClassModal from "@/components/Modals/JoinClassModal/JoinClassModal.vue";
import ShareModal from "@/components/Modals/ShareModal/ShareModal.vue";
import ClassroomSubmissionModal from "@/components/Modals/ClassroomSubmissionModal/ClassroomSubmissionModal.vue";

// Register all modals globally
export default {
	install(app: App): void {
		app.component("Modal", Modal);
		app.component("CreateProjectModal", CreateProjectModal);
		app.component("ImportProjectModal", ImportProjectModal);
		app.component("CreateClassModal", CreateClassModal);
		app.component("CreateAssignmentModal", CreateAssignmentModal);
		app.component("AddToClassModal", AddToClassModal);
		app.component("JoinClassModal", JoinClassModal);
		app.component("ShareModal", ShareModal);
		app.component("ClassroomSubmissionModal", ClassroomSubmissionModal);
	}
};