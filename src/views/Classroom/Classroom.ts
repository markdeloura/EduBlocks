import { authentication } from "@/providers/auth";
import { ref, Ref } from "vue";
import * as firebase from "firebase/app";

export default class Classroom {
	public classrooms: Ref<Array<firebase.default.firestore.DocumentData>> = ref([]);
	public currentClassroom: Ref<firebase.default.firestore.DocumentData | undefined> = ref();

	public init(): void {
		this.getClassrooms();
	}

	public getClassrooms(): void {
		this.classrooms.value = [];
		authentication.db.collection("classrooms").where("admins", "array-contains", { uid: authentication.currentUser.value?.uid, name: authentication.currentUser.value?.displayName, email: authentication.currentUser.value?.email }).get().then((querySnapshot: firebase.default.firestore.QuerySnapshot) => {
			querySnapshot.forEach((doc: firebase.default.firestore.DocumentSnapshot) => {
				const data: any = doc.data();
				if (data) {
					this.classrooms.value.push({id: doc.id, data: data});
				}
			});        
		});
		authentication.db.collection("classrooms").where("users", "array-contains", { uid: authentication.currentUser.value?.uid, name: authentication.currentUser.value?.displayName, email: authentication.currentUser.value?.email }).get().then((querySnapshot: firebase.default.firestore.QuerySnapshot) => {
			querySnapshot.forEach((doc: firebase.default.firestore.DocumentSnapshot) => {
				const data: any = doc.data();
				if (data) {
					this.classrooms.value.push({id: doc.id, data: data});
				}
			});        
		});
	}

	public getClassroom(id: string): void {
		authentication.db.collection("classrooms").doc(id).get().then((doc: firebase.default.firestore.DocumentSnapshot) => {
			this.currentClassroom.value = doc.data();
		});
	}

	public async createNewClass(name: string, type: string, color: string, icon: string): Promise<void> {
		await authentication.db.collection("classrooms").add({
			name: name,
			type: type,
			color: color,
			icon: icon,
			admins: [{
				uid: authentication.currentUser.value?.uid,
				name: authentication.currentUser.value?.displayName,
				email: authentication.currentUser.value?.email
			}],
			students: [],
			assignments: []
		});
	}
}

export const classroom: Classroom = new Classroom();