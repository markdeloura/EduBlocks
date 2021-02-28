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
	value: string;
}

export class CreateClassModal {
	public state: CreateClassModalState = reactive(new CreateClassModalState())

	public iconOptions: Array<Option> = [
		{ title: "Raspberry Pi", value: "raspberrypi"},
		{ title: "Python", value: "python"},
		{ title: "BBC micro:bit", value: "microbit"},
		{ title: "CircuitPython", value: "circuitpython"},
		{ title: "HTML", value: "html"},

	]

	public colourOptions: Array<Option> = [
		{ title: "Blue", value: "Blue"},
		{ title: "Green", value: "Green"},
		{ title: "Red", value: "Red"},
		{ title: "Purple", value: "Purple"},
	]

	public create(): void {
		classroom.createNewClass(this.state.name, this.state.type, this.state.color, this.state.icon).finally(() => {
			modalState.createClassModal = false;
			location.reload();
		});
        
	}
}