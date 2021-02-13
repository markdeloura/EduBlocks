import { authentication } from "@/providers/auth";
import { ref, Ref } from "vue";
import * as firebase from "firebase/app";
import router from "@/router";
import { modalState } from "@/components/Modals/ModalState";

export default class Classroom {
	public classrooms: Ref<Array<firebase.default.firestore.DocumentData>> = ref([]);
	public currentClassroom: Ref<firebase.default.firestore.DocumentData | undefined> = ref();
	public currentClassroomStudents: Ref<Array<firebase.default.firestore.DocumentData | undefined>> = ref([]);
	public joinError: Ref<boolean> = ref(false);
	public currentJoinCode: Ref<string> = ref("");
	public currentJoinLink: Ref<string> = ref("");

	public init(): void {
		this.getClassrooms();
	}

	public getClassrooms(): void {
		this.classrooms.value = [];
		authentication.db.collection("classrooms").where("admins", "array-contains", authentication.currentUser.value?.uid).get().then((querySnapshot: firebase.default.firestore.QuerySnapshot) => {
			querySnapshot.forEach((doc: firebase.default.firestore.DocumentSnapshot) => {
				const data: any = doc.data();
				if (data) {
					this.classrooms.value.push({id: doc.id, data: data});
				}
			});        
		});
		authentication.db.collection("classrooms").where("students", "array-contains", authentication.currentUser.value?.uid).get().then((querySnapshot: firebase.default.firestore.QuerySnapshot) => {
			querySnapshot.forEach((doc: firebase.default.firestore.DocumentSnapshot) => {
				const data: any = doc.data();
				if (data) {
					this.classrooms.value.push({id: doc.id, data: data});
				}
			});        
		});
	}

	public getClassroom(id: string): void {
		this.currentClassroomStudents.value = [];
		authentication.db.collection("classrooms").doc(id).get().then((doc: firebase.default.firestore.DocumentSnapshot) => {
			this.currentClassroom.value = { id: doc.id, data: doc.data() };
			this.currentClassroom.value?.data.students.forEach((student: string) => {
				this.getUserDetails(student).then((data: firebase.default.firestore.DocumentData | undefined) => {
					this.currentClassroomStudents.value.push(data);
				});
			});
		});
	}

	public async getUserDetails(id: string): Promise<firebase.default.firestore.DocumentData | undefined> {
		let user: firebase.default.firestore.DocumentData | undefined;
		await authentication.db.collection("users").doc(id).get().then((doc: firebase.default.firestore.DocumentSnapshot) => {
			user = doc.data();
		});
		return user;
	}

	public addStudentToClass(classID: string): void {
		this.joinError.value = false;
		authentication.db.collection("classrooms").doc(classID).update({
			students: firebase.default.firestore.FieldValue.arrayUnion(authentication.currentUser.value?.uid)
		}).then(() => {
			router.push("/classroom");
		}).catch((err: Error) => {
			console.log(err);
			this.joinError.value = true;
		});
	}

	public getClassroomJoinCode(): void {
		const content: object = {
			dynamicLinkInfo: {
				domainUriPrefix: "https://join.edublocks.org",
				link: `http://${location.host}/classroom/join/${this.currentClassroom.value?.id}`
			},
			suffix: {
				option: "SHORT"
			}
		};
		fetch(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.VUE_APP_API_KEY}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(content)
		}).then((response: Response) => {
			response.json().then((json: any) => {
				this.currentJoinLink = json.shortLink;
				this.currentJoinCode.value = json.shortLink.replace(`https://join.edublocks.org/`, "");
				modalState.addToClassModal = true;
			});
		});
	}

	public isUserAdmin(): boolean {
		let isUserAdmin: boolean = false;
		if (this.currentClassroom.value?.data.admins.includes(authentication.currentUser.value?.uid)) {
			isUserAdmin = true;
		}
		if (this.currentClassroom.value?.data.students.includes(authentication.currentUser.value?.uid)) {
			isUserAdmin = false;
		}
		return isUserAdmin;
	}

	public async createNewClass(name: string, type: string, color: string, icon: string): Promise<void> {
		await authentication.db.collection("classrooms").add({
			name: name,
			type: type,
			color: color,
			icon: icon,
			admins: [authentication.currentUser.value?.uid],
			students: [],
			assignments: []
		});
	}
}

export const classroom: Classroom = new Classroom();