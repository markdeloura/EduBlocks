/* eslint-disable @typescript-eslint/await-thenable */
import { reactive, ref, Ref } from "vue";
import router from "@/router/index";
import { modalState } from "@/components/Modals/ModalState";
import { state } from "@/state";
import { Platform } from "@/platforms/platforms";
import { getToolboxXml } from "@/platforms/blocks";
import { isSlideOverNavOpen } from "@/components/SlideoverNav/SlideoverNav";
import { authentication } from "@/providers/auth";
import { files } from "@/providers/files";

/**
 * Define template reference for the blockly div component
 */
export const blocklyDiv: Ref = ref();

/**
 * Available views within the editor
 */
export enum Views {
	Split = "Split",
	Blocks = "Blocks",
	Python = "Python",
}

/**
 * Editor State. Stores information/config
 */
class EditorState {
	public mode: Platform | undefined;
	public view: Views = Views.Split;
	public blockly: boolean = true;
	public pythonEditor: boolean = true;
	public nav: boolean = true;
	public toolbar: boolean = true;
	public output: boolean = false;
	public readOnly: boolean = false;
	public splitSwitch: boolean = true;
	public blocksSwitch: boolean = true;
	public pythonSwitch: boolean = true;
	public runButton: boolean = true;
	public stopButton: boolean = false;
	public shareButton: boolean = true;
	public saveButton: boolean = true;
}

export const pythonCode: Ref<string> = ref("");
export const xmlCode: Ref<string> = ref("");

/**
 * Main Editor Class
 */
export class Editor {
	public state: EditorState = reactive(new EditorState());
	/**
	 * Load the editor
	 */
	public load(): void {
		modalState.createProjectModal = false;
		router.push({ path: "/editor" });
	}

	public checkForMode(): void {
		if (state.mode === Platform.None) {
			this.goHome();
		}
	}

	/**
	 * Reset the editor
	 */
	public reset(retainMode?: boolean): void {
		if (retainMode) {
			state.mode = state.mode;
		}
		else {
			state.mode = Platform.None;
		}
		state.filename = "";
		pythonCode.value = "";
		xmlCode.value = "";
		files.isFirebaseFile.value = false;
		this.state.view = Views.Split;
		this.state.blockly = true;
		this.state.nav = true;
		this.state.toolbar = true;
		this.state.output = false;
		this.state.readOnly = false;
		this.state.runButton = true;
		this.state.stopButton = false;
		this.state.runButton = true;
		this.state.shareButton = true;
		this.state.saveButton = true;
		this.state.splitSwitch = true;
		this.state.blocksSwitch = true;
		this.state.pythonSwitch = true;
	}

	/**
	 * Reset the editor and go to the dashboard
	 */
	public goHome(): void {
		this.reset();
		router.push({path: "/"});
	}

	public openSlideOverNav(): void {
		isSlideOverNavOpen.value = true;
	}

	public resizeWindow(): void {
		window.dispatchEvent(new Event("resize"));
	}

	public run(): void {
		this.state.output = true;
		this.state.pythonEditor = false;
		this.state.blocksSwitch = false;
		this.state.pythonSwitch = false;
		this.state.runButton = false;
		this.state.stopButton = true;
	}

	public stop(): void {
		this.state.output = false;
		this.state.pythonEditor = true;
		this.state.blocksSwitch = true;
		this.state.pythonSwitch = true;
		this.state.runButton = true;
		this.state.stopButton = false;
	}

	public save(): void {
		if (authentication.currentUser.value) {
			files.saveFirebaseFile();
		}
		else { 
			files.saveLocalFile();
		 }
	}

	public clear(): void {
		this.reset(true);
		this.loadBlockly();
	}

	public async switchView(view: Views): Promise<void> {
		switch (view) {
			case Views.Split:
				this.state.blockly = true;
				this.state.pythonEditor = true;
				this.state.view = Views.Split;
				await window.dispatchEvent(new Event("resize"));
				await this.resizeWindow();
				break;
			case Views.Blocks:
				this.state.blockly = true;
				this.state.pythonEditor = false;
				this.state.view = Views.Blocks;
				await window.dispatchEvent(new Event("resize"));
				await this.resizeWindow();
				break;
			case Views.Python:
				this.state.blockly = false; 
				this.state.pythonEditor = true;
				this.state.view = Views.Python;
				break;
		}
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
	
	public async loadBlockly(): Promise<void> {
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
		
		blocklyWorkspace.addChangeListener(() => {
			xmlCode.value = Blockly.Xml.domToPrettyText(
				Blockly.Xml.workspaceToDom(blocklyWorkspace)
		  );
		  if (!blocklyWorkspace.isDragging()) {
				pythonCode.value = Blockly.Python.workspaceToCode(blocklyWorkspace);
				if (files.isFirebaseFile.value) {
					files.saveFirebaseFile();
				}
		  }
		});
	
		this.setXml(xmlCode.value);
	  }
}

/**
 * Export Editor State class to use in other files
 */
export const editor: Editor = new Editor;

