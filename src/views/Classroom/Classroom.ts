import { authentication } from "@/providers/auth";
import { ref, Ref } from "vue";
import * as firebase from "firebase/app";
import router from "@/router";
import { modalState } from "@/components/Modals/ModalState";
import { xmlCode } from "../Editor/Editor";
import { projects } from "@/views/Projects/Projects";
import { state } from "@/state";

export const assignmentActive: Ref<boolean> = ref(false);

export default class Classroom {
	public classrooms: Ref<Array<firebase.default.firestore.DocumentData>> = ref([]);
	public currentClassroom: Ref<firebase.default.firestore.DocumentData | undefined> = ref();
	public currentClassroomStudents: Ref<Array<firebase.default.firestore.DocumentData | undefined>> = ref([]);
	public currentClassroomAdmins: Ref<Array<firebase.default.firestore.DocumentData | undefined>> = ref([]);
	public currentClassroomAssignments: Ref<Array<firebase.default.firestore.DocumentData | undefined>> = ref([]);
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
			this.currentClassroom.value?.data.assignments.forEach((assignment: string) => {
				authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).collection("assignments").doc(assignment).get().then((doc: firebase.default.firestore.DocumentSnapshot) => {
					console.log(doc.data());
					this.currentClassroomAssignments.value.push({id: doc.id, data: doc.data()});
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

	public deleteAssignment(id: number): void {
		authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).update({
			assignments: firebase.default.firestore.FieldValue.arrayRemove(this.currentClassroom.value?.data.assignments[id])
		}).then(() => {
			router.push({path: `/classroom/${this.currentClassroom.value?.id}`});
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
		await authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).collection("assignments").add({
			title,
			description,
			due,
			teacher,
			marks,
			xmlCode: xml,
			fileTitle,
			submissions: []
		}).then((doc: firebase.default.firestore.DocumentReference) => {
			authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).update({
				assignments: firebase.default.firestore.FieldValue.arrayUnion(doc.id)
			});
		});
	}

	public goToAssignment(id: number): void {
		router.push({path: `/classroom/${this.currentClassroom.value?.id}/assignment/${id}`});
	}

	public async saveToAssignment(): Promise<void> {
		await authentication.db.collection("classrooms").doc(router.currentRoute.value.query.classroomID?.toString()).collection("assignments").doc(router.currentRoute.value.query.assignmentID?.toString()).collection("submissions").where("IDs", "==", {assignmentID: router.currentRoute.value.query.assignmentID?.toString(), uid: authentication.currentUser.value?.uid}).get().then((snapshot: firebase.default.firestore.QuerySnapshot) => {
			if (snapshot.docs.length > 0) {
				snapshot.forEach((doc: firebase.default.firestore.QueryDocumentSnapshot) => {
					if (doc.data()) {
						doc.ref.update({
							xmlCode: xmlCode.value
						});
					}
				});
			}
			else {
				this.createAssignmentSubmission();
			}
		});
	}

	public async createAssignmentSubmission(): Promise<void> {
		console.log(router.currentRoute.value.query.classroomID?.toString());
		console.log(router.currentRoute.value.query.assignmentID?.toString());
		await authentication.db.collection("classrooms").doc(router.currentRoute.value.query.classroomID?.toString()).collection("assignments").doc(router.currentRoute.value.query.assignmentID?.toString()).collection("submissions").add({
			IDs: { uid: authentication.currentUser.value?.uid, assignmentID: router.currentRoute.value.query.assignmentID?.toString() },
			xmlCode: xmlCode.value,
			submitted: false,
			markedByTeacher: false,
			marks: 0
		}).then((doc: firebase.default.firestore.DocumentReference) => {
			authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).collection("assignments").doc(router.currentRoute.value.query.assignmentID?.toString()).update({
				submissions: firebase.default.firestore.FieldValue.arrayUnion(doc.id)
			});
		});
	}

	public openAssignmentCode(xml: string | undefined, title: string | undefined, assignmentID: number): void {
		authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).collection("assignments").doc(this.currentClassroomAssignments.value[Number(router.currentRoute.value.params.assignmentID)]?.id).collection("submissions").where("IDs", "==", {assignmentID: this.currentClassroomAssignments.value[Number(router.currentRoute.value.params.assignmentID)]?.id, uid: authentication.currentUser.value?.uid}).get().then((snapshot: firebase.default.firestore.QuerySnapshot) => {
			if (snapshot.docs.length > 0) {
				snapshot.forEach((doc: firebase.default.firestore.QueryDocumentSnapshot) => {
					if (doc.data()) {
						xmlCode.value = doc.data().xmlCode;
						if (title) {
							state.mode = projects.getPlatformFromFileName(title);
						}
						assignmentActive.value = true;
						router.push({path: "/editor", query: { assignmentID, classroomID: this.currentClassroom.value?.id }});
					}
				});
			}
			else {
				if (xml && title) {
					xmlCode.value = xml;
					state.mode = projects.getPlatformFromFileName(title);
					assignmentActive.value = true;
					router.push({path: "/editor", query: { assignmentID, classroomID: this.currentClassroom.value?.id }});
				}
			}
		});
	}
}

export const classroom: Classroom = new Classroom();