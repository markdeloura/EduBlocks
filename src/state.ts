import { reactive } from "vue";
import { Platform } from "@/platforms/platforms";

/**
 * General application state. Stores information/config
 */
class State {
	public mode: Platform = Platform.Python;
	public filename: string = "";
}

/**
 * Export general application state for use in other files
 */
export const state: State = reactive(new State());