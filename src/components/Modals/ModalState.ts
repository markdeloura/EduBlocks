import { reactive } from "vue";

/**
 * Modal State. Stores information/config
 */
class ModalState {
	public createProjectModal: boolean = false
	public importProjectModal: boolean = false
	public createClassModal: boolean = false
	public createAssignmentModal: boolean = false
	public addToClassModal: boolean = false
	public joinClassModal: boolean = false
	public shareModal: boolean = false
}

/**
 * Export Modal State class to use in other files
 */
export const modalState: ModalState = reactive(new ModalState());