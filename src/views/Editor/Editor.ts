import { reactive, ref, Ref } from "vue";
import router from "@/router/index";
import { modalState } from "@/components/Modals/ModalState";
import { state } from "@/state";
import { Platform } from "@/platforms/platforms";
import { getToolboxXml } from "@/platforms/blocks";

/**
 * Define template reference for the blockly div component
 */
export const blocklyDiv: Ref = ref();

/**
 * Available views within the editor
 */
enum Views {
	Split = "Split",
	Blocks = "Blocks",
	Python = "Python",
}

/**
 * Editor State. Stores information/config
 */
class EditorState {
	public view: Views = Views.Split;
	public xml: string = "";
	public python: string = "";
	public blockly: boolean = true;
	public nav: boolean = true;
	public toolbar: boolean = true;
	public output: boolean = false;
	public readOnly: boolean = false;
	public splitSwitch: boolean = true;
	public blocksSwitch: boolean = true;
	public pythonSwitch: boolean = true;
}

/**
 * Export Editor State class for use in other files
 */
export const editorState: EditorState = reactive(new EditorState());

/**
 * Main Editor Class
 */
class Editor {
	/**
	 * Load the editor
	 */
	public load(): void {
		modalState.createProjectModal = false;
		router.push({ path: "/editor" });
	}

	/**
	 * Reset the editor
	 */
	public reset(): void {
		state.filename = "";
		state.mode = Platform.Python;
		editorState.view = Views.Split;
		editorState.xml = "";
		editorState.python = "";
		editorState.blockly = true;
		editorState.nav = true;
		editorState.toolbar = true;
		editorState.output = false;
		editorState.readOnly = false;
		editorState.splitSwitch = true;
		editorState.blocksSwitch = true;
		editorState.pythonSwitch = true;
	}

	/**
	 * Reset the editor and go to the dashboard
	 */
	public goHome(): void {
		this.reset();
		router.push({path: "/"});
	}

	public setXml(xml?: string | null): void {
		if (!Blockly.mainWorkspace) {
		  throw new Error("No Workspace");
		}
	
		Blockly.mainWorkspace.clear();
	
		let start: number | undefined = 0;
		let newXml: string =
		  "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"events_start_here\" id=\"DI_start_here\" x=\"" +
		  25 +
		  "\" y=\"33\" deletable=\"false\" movable=\"false\"></block></xml>";
	
		if (typeof xml === "string") {
		  start = xml.search("DI_start_here");
	
		  if (start < 0) {
				const firstBlockPosition: number = xml.search("<block");
				const startBlockXml: string =
			  "<block type=\"events_start_here\" id=\"DI_start_here\" x=\"" +
			  25 +
			  "\" y=\"33\" deletable=\"false\" movable=\"false\">";
	
				if (firstBlockPosition < 0) {
			  // No Blocks
				}
				else {
			  const posFromEndOfString: number = -1 * "</xml>".length;
			  newXml =
				xml.slice(0, firstBlockPosition) +
				startBlockXml +
				"<next>" +
				xml.slice(firstBlockPosition, posFromEndOfString) +
				"</next></block>" +
				xml.slice(posFromEndOfString);
				}
				const textToDom: Element = Blockly.Xml.textToDom(newXml);
				Blockly.Xml.domToWorkspace(textToDom, Blockly.mainWorkspace);
		  }
			else {
				const textToDom: Element = Blockly.Xml.textToDom(xml);
				Blockly.Xml.domToWorkspace(textToDom, Blockly.mainWorkspace);
		  }
		}
		else {
		  const textToDom: Element = Blockly.Xml.textToDom(newXml);
		  Blockly.Xml.domToWorkspace(textToDom, Blockly.mainWorkspace);
		}
	  }
	
	public async loadBlockly(_callback: Function): Promise<void> {
		const toolbox: string = await getToolboxXml();
	
		if (Blockly.mainWorkspace) {
		  Blockly.mainWorkspace.dispose();
		}
	
		const options: object = {
		  media: "blockly/media/",
		  renderer: "pxt",
		  trashcan: false,
		  zoom: {
				controls: true,
				wheel: true,
				startScale: 1.0,
				maxScale: 3,
				minScale: 0.3,
				scaleSpeed: 1.2
		  },
		  pinch: true,
		  grid: {
				spacing: 25,
				length: 3,
				colour: "#ccc",
				snap: true
		  },
		  toolbox
		};
	
		const blocklyWorkspace: Blockly.WorkspaceSvg = Blockly.inject(
		  blocklyDiv.value,
		  options
		);
	
		blocklyWorkspace.addChangeListener(Blockly.Events.disableOrphans);
	
		editorState.python = Blockly.Python.workspaceToCode(blocklyWorkspace);
	
		blocklyWorkspace.addChangeListener(() => {
		  editorState.xml = Blockly.Xml.domToPrettyText(
				Blockly.Xml.workspaceToDom(blocklyWorkspace)
		  );
		  if (!blocklyWorkspace.isDragging()) {
				editorState.python = Blockly.Python.workspaceToCode(blocklyWorkspace);
		  }
		});
	
		this.setXml();
	
		if (_callback) {
		  _callback();
		}
	  }
}

/**
 * Export Editor State class to use in other files
 */
export const editor: Editor = new Editor;

