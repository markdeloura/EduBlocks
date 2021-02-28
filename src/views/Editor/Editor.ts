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
import { assignmentActive, classroom } from "@/views/Classroom/Classroom";
import { HTMLGenerator } from "@/platforms/html/html-generator";
import pretty from "pretty";

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
	Code = "Code",
}

/**
 * Editor State. Stores information/config
 */
class EditorState {
	public mode: Platform | undefined;
	public view: Views = Views.Split;
	public blockly: boolean = true;
	public codeEditor: boolean = true;
	public nav: boolean = true;
	public toolbar: boolean = true;
	public output: boolean = false;
	public HTMLPreview: boolean = false;
	public readOnly: boolean = false;
	public splitSwitch: boolean = true;
	public blocksSwitch: boolean = true;
	public codeSwitch: boolean = true;
	public runButton: boolean = true;
	public resetButton: boolean = true;
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
		if (state.mode === Platform.HTML) {
			this.state.HTMLPreview = true;
			this.state.codeEditor = false;
			this.state.runButton = false;
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
		if (state.mode === Platform.HTML) {
			this.state.HTMLPreview = true;
			this.state.codeEditor = false;
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
		this.state.resetButton = true;
		this.state.saveButton = true;
		this.state.splitSwitch = true;
		this.state.blocksSwitch = true;
		this.state.codeSwitch = true;	
		assignmentActive.value = false;
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

	public createSubmission(): void {
		classroom.saveToAssignment().then(() => {
			router.back();
		});
	}

	public run(): void {
		this.state.output = true;
		this.state.codeEditor = false;
		this.state.blocksSwitch = false;
		this.state.codeSwitch = false;
		this.state.runButton = false;
		this.state.stopButton = true;
	}

	public stop(): void {
		this.state.output = false;
		this.state.codeEditor = true;
		this.state.blocksSwitch = true;
		this.state.codeSwitch = true;
		this.state.runButton = true;
		this.state.stopButton = false;
	}

	public save(): void {
		if (authentication.currentUser.value) {
			files.saveFirebaseFile();
		}
		else { 
			files.saveLocalFile(xmlCode.value, state.filename);
		 }
	}

	public clear(): void {
		this.reset(true);
		this.loadBlockly();
	}

	public encodeURL(text: string): string {
		return encodeURI(text);
	}

	public async switchView(view: Views): Promise<void> {
		switch (view) {
			case Views.Split:
				if (state.mode === Platform.HTML) {
					this.state.blockly = true;
					this.state.HTMLPreview = true;
					this.state.codeEditor = false;
				}
				else {
					this.state.blockly = true;
					this.state.codeEditor = true;
				}
				this.state.view = Views.Split;
				await window.dispatchEvent(new Event("resize"));
				await this.resizeWindow();
				break;
			case Views.Blocks:
				if (state.mode === Platform.HTML) {
					this.state.blockly = true;
					this.state.HTMLPreview = false;
					this.state.codeEditor = false;
				}
				else {
					this.state.blockly = true;
					this.state.codeEditor = false;
				}
				this.state.view = Views.Blocks;
				await window.dispatchEvent(new Event("resize"));
				await this.resizeWindow();
				break;
			case Views.Code:
				if (state.mode === Platform.HTML) {
					this.state.blockly = false;
					this.state.HTMLPreview = false;
					this.state.codeEditor = true;
				}
				else {
					this.state.blockly = false; 
					this.state.codeEditor = true;
				}
				this.state.view = Views.Code;
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
		if (state.mode !== Platform.HTML) {
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
		else {
			if (typeof xml === "string") {
				const textToDom: Element = Blockly.Xml.textToDom(xml);
				Blockly.Xml.domToWorkspace(textToDom, Blockly.mainWorkspace);
			}
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
		
		if (state.mode !== Platform.HTML) {
			blocklyWorkspace.addChangeListener(Blockly.Events.disableOrphans);
		}
		
		blocklyWorkspace.addChangeListener(() => {
			xmlCode.value = Blockly.Xml.domToPrettyText(
				Blockly.Xml.workspaceToDom(blocklyWorkspace)
		  );
		  if (!blocklyWorkspace.isDragging()) {
			  	if (state.mode === Platform.HTML) {
					pythonCode.value = pretty(HTMLGenerator.workspaceToCode(blocklyWorkspace));
				}
				else {
					pythonCode.value = Blockly.Python.workspaceToCode(blocklyWorkspace);
				}
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

