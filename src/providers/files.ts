import * as firebase from "firebase/app";
import "firebase/storage";
import { authentication } from "./auth";
import { ref, Ref, toRaw } from "vue";
import { Platform } from "@/platforms/platforms";
import { state } from "@/state";
import { modalState } from "@/components/Modals/ModalState";
import { xmlCode } from "@/views/Editor/Editor";
import { projects } from "@/views/Projects/Projects";
import { editor } from "@/views/Editor/Editor";
import { saveAs } from "file-saver";

interface FirebaseFile {
	label: string;
	ref: firebase.default.storage.Reference;
	downloadURL: string;
	metadata: firebase.default.storage.FullMetadata;
}

export interface FirebaseFileDropdownValue {
	title: string;
	url: string;
}

export interface FirebaseFileDropdown {
	title: string;
	value: FirebaseFileDropdownValue;
}

class Files {    
	public isLoading: Ref<boolean> = ref(false);

	public hasSaved: Ref<boolean> = ref(false);

	public isFirebaseFile: Ref<boolean> = ref(false);

	public fileList: Ref<Array<FirebaseFile>> = ref([]);

	public firebaseBlocksRef: firebase.default.storage.Reference = firebase.default.storage().ref(`blocks/${authentication.currentUser.value?.uid}`);
    
	public async getAllFilesFromFirebase(): Promise<void> {
		this.fileList.value = [];
		this.isLoading.value = true;
		if (authentication.currentUser.value) {
			const ref: firebase.default.storage.Reference = firebase.default.storage().ref(`blocks/${authentication.currentUser.value.uid}`);
			await ref.listAll().then((res: firebase.default.storage.ListResult) => {
				if (res.items.length === 0) {
					this.isLoading.value = false;
				}
				res.items.forEach((itemRef: firebase.default.storage.Reference) => {
					itemRef.getDownloadURL().then((url: string) => {
						itemRef.getMetadata().then((metadata: firebase.default.storage.FullMetadata) => {
							this.fileList.value.push({ label: itemRef.name, ref: toRaw(itemRef), downloadURL: url, metadata });
							this.isLoading.value = false;
						});
					});
				});
			});
		}
	}

	public async getAllFilesFromFirebaseForDropdown(): Promise<Array<FirebaseFileDropdown>> {
		const files: Array<FirebaseFileDropdown> = [];
		if (authentication.currentUser.value) {
			const ref: firebase.default.storage.Reference = firebase.default.storage().ref(`blocks/${authentication.currentUser.value.uid}`);
			await ref.listAll().then((res: firebase.default.storage.ListResult) => {
				res.items.forEach((itemRef: firebase.default.storage.Reference) => {
					itemRef.getDownloadURL().then((url: string) => {
						files.push({ title: itemRef.name, value: {title: itemRef.name, url} });
					});
				});
			});
		}
		return files;
	}

	public deleteFirebaseFile(ref: firebase.default.storage.Reference): void {
		ref.delete().then(() => {
			this.getAllFilesFromFirebase();
		});
	}

	public openFile(): Promise<string> {
		return new Promise<string>((resolve: any, reject: any) => {
			function readSingleFile(e: Event): void {
			  const file: Blob = (e.target as any).files[0];
			  const name: string = (e.target as any).files[0].name;
			  if (!file) {
					return;
				}
		
			  const reader: FileReader = new FileReader();
		
			  reader.onload = (e: ProgressEvent<FileReader>): void => {
					const contents: string = (e.target as any).result;
					resolve(contents);
					state.filename = name.replace(".xml", "");
			  };
		
			  reader.onerror = (): void => {
					reject(new Error("Reader error"));
			  };
		
			  reader.readAsText(file);
			}
		
			const fileInput: HTMLInputElement = document.createElement("input");
			fileInput.type = "file";
			fileInput.accept = ".xml";
			fileInput.addEventListener("change", readSingleFile, false);
			fileInput.click();
		  });
	}

	public async importFile(): Promise<void> {
		xmlCode.value = await this.openFile();
		modalState.importProjectModal = true;
	}

	public saveFirebaseFile(): void {
		let platformTitle: string = "";
		if (authentication.currentUser.value) {
			switch (state.mode) {
				case Platform.Python:
					platformTitle = "Python";
					break;
				case Platform.MicroBit:
					platformTitle = "microbit";
					break;
				case Platform.RaspberryPi:
					platformTitle = "RPi";
					break;
				case Platform.CircuitPython:
					platformTitle = "CircuitPython";
					break;
			}
			const ref: firebase.default.storage.Reference = firebase.default.storage().ref(`blocks/${authentication.currentUser.value.uid}/${state.filename}(${platformTitle})`);
			ref.putString(xmlCode.value).then(() => {
				this.hasSaved.value = true;
				this.isFirebaseFile.value = true;
				setTimeout(() => {
					this.hasSaved.value = false;
				}, 2000);
			});
		}
	}

	public saveLocalFile(): void {
		const blob: Blob = new Blob([xmlCode.value], {type: "text/plain;charset=utf-8"});
		let file: string = "untitled.xml";
		if (state.filename) {
			file = `${state.filename}.xml`;
		}
		saveAs(blob, file);
	}

	public openFirebaseFile(file: FirebaseFile): void {
		fetch(file.downloadURL).then((response: Response) => {
			return response.blob();
		}).then((blob: Blob) => {
			blob.text().then((xml: string) => {
				xmlCode.value = xml;
				state.filename = projects.removePlatformFromFileName(file.label);
				state.mode = projects.getPlatformFromFileName(file.label);
				editor.load();
				this.isFirebaseFile.value = true;
			});
		});
	}
}

export const files: Files = new Files();