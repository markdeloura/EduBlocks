import { modalState } from "@/components/Modals/ModalState";
import { editor } from "@/views/Editor/Editor";
import { files } from "@/providers/files";
import { authentication } from "@/providers/auth";

/**
 * Main class for Import Project Modal
 */
export class ImportProjectModal {
	public importAndOpen(): void {
		modalState.importProjectModal = false;
		editor.load();
		if (authentication.currentUser.value) {
			files.saveFirebaseFile();
		}
	}
}