import { modalState } from "@/components/Modals/ModalState";
import { reactive } from "vue";
import { classroom } from "@/views/Classroom/Classroom";
import { FirebaseFileDropdown, FirebaseFileDropdownValue } from "@/providers/files";

class CreateClassModalState {
	public title: string = "";
	public description: string = "";
	public due: Date = new Date;
	public teacher: string = "";
	public marks: number = 0;
	public files: Array<FirebaseFileDropdown> = []
	public fileSelection: FirebaseFileDropdownValue | undefined;
}

interface Option {
	title: string;
	value: string;
}

export class CreateAssignmentModal {
	public state: CreateClassModalState = reactive(new CreateClassModalState())

	public iconOptions: Array<Option> = [
		{ title: "Raspberry Pi", value: "raspberrypi"},
		{ title: "Python", value: "python"},
		{ title: "BBC micro:bit", value: "microbit"},
		{ title: "CircuitPython", value: "circuitpython"},
	]

	public colourOptions: Array<Option> = [
		{ title: "Blue", value: "Blue"},
		{ title: "Green", value: "Green"},
		{ title: "Red", value: "Red"},
		{ title: "Purple", value: "Purple"},
	]

	public create(): void {
		if (this.state.fileSelection) {
			fetch(this.state.fileSelection.url).then((response: Response) => {
				return response.blob();
			}).then((blob: Blob) => {
				blob.text().then((xmlCode: string) => {
					classroom.createNewAssignment(this.state.title, this.state.description, this.state.due, this.state.teacher, this.state.marks, xmlCode, this.state.fileSelection?.title).finally(() => {
						modalState.createAssignmentModal = false;
						location.reload();
					});  
				});
			});
		}
	}
}