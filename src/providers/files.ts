import * as firebase from "firebase/app";
import "firebase/storage";
import { authentication } from "./auth";
import { ref, Ref, toRaw } from "vue";

interface FirebaseFiles {
	label: string;
	ref: firebase.default.storage.Reference;
	downloadURL: string;
	metadata: firebase.default.storage.FullMetadata;
}

class Files {    
	public isLoading: Ref<boolean> = ref(false);

	public fileList: Ref<Array<FirebaseFiles>> = ref([]);

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

	public deleteFirebaseFile(ref: firebase.default.storage.Reference): void {
		ref.delete().then(() => {
			this.getAllFilesFromFirebase();
		});
	}
}

export const files: Files = new Files();