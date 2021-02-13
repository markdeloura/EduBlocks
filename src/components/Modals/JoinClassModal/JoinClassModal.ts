import { reactive } from "vue";

class JoinClassModalState {
	public code: string = "";
}

export class JoinClassModal {
	public state: JoinClassModalState = reactive(new JoinClassModalState())

	public goToJoinLink(): void {
		window.open(`https://join.edublocks.org/${this.state.code}`, "_self");
	}
}