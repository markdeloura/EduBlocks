import { modalState } from "@/components/Modals/ModalState";
import { reactive } from "vue";
import { classroom } from "@/views/Classroom/Classroom";

class CreateClassModalState {
	public name: string = "";
	public type: string = "";
	public icon: string = "python";
	public color: string = "Blue";
}

interface Option {
	title: string;
}

export class CreateClassModal {
	public state: CreateClassModalState = reactive(new CreateClassModalState())

	public iconOptions: Array<Option> = [
		{ title: "raspberrypi"},
		{ title: "python"},
		{ title: "microbit"},
		{ title: "circuitpython"},

	]

	public colourOptions: Array<Option> = [
		{ title: "Blue"},
		{ title: "Green"},
		{ title: "Red"},
		{ title: "Purple"},
	] 

	public create(): void {
		classroom.createNewClass(this.state.name, this.state.type, this.state.color, this.state.icon).finally(() => {
			modalState.createClassModal = false;
			location.reload();
		});
        
	}
}