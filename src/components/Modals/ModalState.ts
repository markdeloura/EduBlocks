import { reactive } from "vue";

/**
 * Modal State. Stores information/config
 */
class ModalState {
	public createProjectModal: boolean = false
}

/**
 * Export Modal State class to use in other files
 */
export const modalState: ModalState = reactive(new ModalState());