import { state } from "@/state";

/**
 * Main class for navbar
 */
export class EditorNav {
	/**
	 * Sets the global filename within state to the value of the filename input.
	 * @param {EventTarget|any} event
	 * @returns void
	 */
	public onFilenameInput(event: EventTarget | any): void {
		state.filename = event.target.innerText;
	}
}