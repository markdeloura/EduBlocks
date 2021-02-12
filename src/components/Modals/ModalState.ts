import { reactive } from "vue";

/**
 * Modal State. Stores information/config
 */
class ModalState {
	public createProjectModal: boolean = false
	public importProjectModal: boolean = false
	public createClassModal: boolean = false
	public importProjectXML: string = "";
}

/**
 * Export Modal State class to use in other files
 */
export const modalState: ModalState = reactive(new ModalState());