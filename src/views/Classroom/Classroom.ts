import { authentication } from "@/providers/auth";
import { ref, Ref } from "vue";
import * as firebase from "firebase/app";
import router from "@/router";
import { modalState } from "@/components/Modals/ModalState";
import { editor, xmlCode } from "../Editor/Editor";
import { projects } from "@/views/Projects/Projects";
import { state } from "@/state";

export const assignmentActive: Ref<boolean> = ref(false);

export default class Classroom {
	public classrooms: Ref<Array<firebase.default.firestore.DocumentData>> = ref([]);
	public currentClassroom: Ref<firebase.default.firestore.DocumentData | undefined> = ref();
	public currentClassroomStudents: Ref<Array<firebase.default.firestore.DocumentData | undefined>> = ref([]);
	public currentClassroomAdmins: Ref<Array<firebase.default.firestore.DocumentData | undefined>> = ref([]);
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

	public async getClassroom(id: string): Promise<void> {
		this.currentClassroomStudents.value = [];
		this.currentClassroomAdmins.value = [];
		await authentication.db.collection("classrooms").doc(id).get().then((doc: firebase.default.firestore.DocumentSnapshot) => {
			this.currentClassroom.value = { id: doc.id, data: doc.data() };
			this.currentClassroom.value?.data.students.forEach((student: string) => {
				this.getUserDetails(student).then((data: firebase.default.firestore.DocumentData | undefined) => {
					this.currentClassroomStudents.value.push(data);
				});
			});
			this.currentClassroom.value?.data.admins.forEach((admin: string) => {
				this.getUserDetails(admin).then((data: firebase.default.firestore.DocumentData | undefined) => {
					this.currentClassroomAdmins.value.push({title: data?.name, value: data?.name});
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

	public async removeStudentFromClass(userID: string | undefined): Promise<void> {
		await authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).update({
			students: firebase.default.firestore.FieldValue.arrayRemove(userID)
		}).then(() => {
			this.getClassroom(this.currentClassroom.value?.id);
		});
	}

	public leaveClassroom(): void {
		this.removeStudentFromClass(authentication.currentUser.value?.uid).then(() => {
			router.push({path: "/classroom"});
		});
	}

	public deleteClassroom(): void {
		authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).delete().then(() => {
			router.push({path: "/classroom"});
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

	public async createNewAssignment(title: string, description: string, due: Date, teacher: string, marks: number, xml: string, fileTitle: string | undefined): Promise<void> {
		await authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).update({
			assignments: firebase.default.firestore.FieldValue.arrayUnion({title, description, due, teacher, marks, xmlCode: xml, fileTitle, submissions: []})
		});
	}

	public goToAssignment(id: number): void {
		router.push({path: `/classroom/${this.currentClassroom.value?.id}/assignment/${id}`});
	}

	public openAssignmentCode(xml: string | undefined, title: string | undefined, assignmentID: number): void {
		if (xml && title) {
			xmlCode.value = xml;
			state.mode = projects.getPlatformFromFileName(title);
			state.filename = "Assignment Task";
			assignmentActive.value = true;
			router.push({path: "/editor", query: { assignmentID }});
		}
	}
}

export const classroom: Classroom = new Classroom();