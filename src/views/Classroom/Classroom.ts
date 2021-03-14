import { authentication } from "@/providers/auth";
import { ref, Ref } from "vue";
import * as firebase from "firebase/app";
import router from "@/router";
import { modalState } from "@/components/Modals/ModalState";
import { xmlCode } from "../Editor/Editor";
import { projects } from "@/views/Projects/Projects";
import { state } from "@/state";
import { DropdownOptions } from "@/types";
import { Platform } from "@/platforms/platforms";

export const assignmentActive: Ref<boolean> = ref(false);

export default class Classroom {
	public classrooms: Ref<Array<firebase.default.firestore.DocumentData>> = ref([]);
	public currentClassroom: Ref<firebase.default.firestore.DocumentData | undefined> = ref();
	public currentClassroomStudents: Ref<Array<firebase.default.firestore.DocumentData | undefined>> = ref([]);
	public currentClassroomAdmins: Ref<Array<firebase.default.firestore.DocumentData>> = ref([]);
	public currentClassroomAssignments: Ref<Array<firebase.default.firestore.DocumentData>> = ref([]);
	public joinError: Ref<boolean> = ref(false);
	public isLoading: Ref<boolean> = ref(false);
	public currentJoinCode: Ref<string> = ref("");
	public currentJoinLink: Ref<string> = ref("");
	public currentSubmission: Ref<firebase.default.firestore.DocumentData> = ref({});
	public studentComments: Ref<string> = ref("");
	public submittedAssignments: Ref<Array<firebase.default.firestore.DocumentData>> = ref([]);
	public currentIndex: Ref<number> = ref(0);

	public init(): void {
		this.getClassrooms();
	}

	public getClassrooms(): void {
		this.classrooms.value = [];
		this.isLoading.value = true;
		authentication.db.collection("classrooms").where("admins", "array-contains", authentication.currentUser.value?.uid).get().then((querySnapshot: firebase.default.firestore.QuerySnapshot) => {
			querySnapshot.forEach((doc: firebase.default.firestore.DocumentSnapshot) => {
				const data: any = doc.data();
				if (data) {
					this.classrooms.value.push({id: doc.id, data: data});
				}
			});        
		}).finally(() => {
			this.isLoading.value = false;
		});
		authentication.db.collection("classrooms").where("students", "array-contains", authentication.currentUser.value?.uid).get().then((querySnapshot: firebase.default.firestore.QuerySnapshot) => {
			querySnapshot.forEach((doc: firebase.default.firestore.DocumentSnapshot) => {
				const data: any = doc.data();
				if (data) {
					this.classrooms.value.push({id: doc.id, data: data});
				}
			});        
		}).finally(() => {
			this.isLoading.value = false;
		});;
	}

	public async getClassroom(id: string): Promise<void> {
		this.currentClassroomStudents.value = [];
		this.currentClassroomAdmins.value = [];
		this.currentClassroomAssignments.value = [];
		this.isLoading.value = true;
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
					this.currentClassroomAssignments.value.push({id: doc.id, data: doc.data()});
				});
			});
		}).finally(() => {
			this.isLoading.value = false;
		});
	}

	public async getUserDetails(id: string): Promise<firebase.default.firestore.DocumentData | undefined> {
		let user: firebase.default.firestore.DocumentData | undefined;
		await authentication.db.collection("users").doc(id).get().then((doc: firebase.default.firestore.DocumentSnapshot) => {
			user = doc.data();
		});
		return user;
	}

	public findStudent(id: string): firebase.default.firestore.DocumentData {
		let studentInfo: firebase.default.firestore.DocumentData = {};
		this.currentClassroomStudents.value.forEach((student: firebase.default.firestore.DocumentData | undefined) => {
			if (student?.uid === id) {
				studentInfo = student;
			}
		});
		return studentInfo;
	}

	public getStudentsWithNoSubmission(): Array<string> {
		const studentIDs: Array<string> = [];
		const assignmentIDs: Array<string> = [];
		const studentsWithNoSubmissions: Array<string> = [];
		
		this.currentClassroomStudents.value.forEach((student: firebase.default.firestore.DocumentData | undefined) => {
			studentIDs.push(student?.uid);
		});

		this.submittedAssignments.value.forEach((assignment: firebase.default.firestore.DocumentData | undefined) => {
			assignmentIDs.push(assignment?.data.IDs.uid);
		});

		studentIDs.forEach((id: string) => {
			if (!assignmentIDs.includes(id)) {
				studentsWithNoSubmissions.push(id);
			}
		});

		return studentsWithNoSubmissions;
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

	public async deleteAssignment(id: number): Promise<void> {
		await authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).update({
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
		}).finally(() => {
			location.reload();
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

	public async saveStudentComment(): Promise<void> {
		await authentication.db.collection("classrooms").doc(router.currentRoute.value.params.classID?.toString()).collection("assignments").doc(this.currentClassroom.value?.data.assignments[Number(router.currentRoute.value.params.assignmentID.toString())]).collection("submissions").where("IDs", "==", {assignmentID: this.currentClassroom.value?.data.assignments[Number(router.currentRoute.value.params.assignmentID.toString())], uid: authentication.currentUser.value?.uid}).get().then((snapshot: firebase.default.firestore.QuerySnapshot) => {
			if (snapshot.docs.length > 0) {
				snapshot.forEach((doc: firebase.default.firestore.QueryDocumentSnapshot) => {
					if (doc.data()) {
						doc.ref.update({
							studentComments: this.studentComments.value
						});
					}
				});
			}
		});
	}

	public async createAssignmentSubmission(): Promise<void> {
		await authentication.db.collection("classrooms").doc(router.currentRoute.value.query.classroomID?.toString()).collection("assignments").doc(router.currentRoute.value.query.assignmentID?.toString()).collection("submissions").add({
			IDs: { uid: authentication.currentUser.value?.uid, assignmentID: router.currentRoute.value.query.assignmentID?.toString() },
			xmlCode: xmlCode.value,
			submitted: false,
			markedByTeacher: false,
			marks: 0,
			studentComments: "",
			teacherComments: "",
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

	public openSubmittedCode(xml: string, filename: string): void {
		xmlCode.value = xml;
		state.mode = projects.getPlatformFromFileName(filename);
		router.push({path: "/editor"});
	}

	public getAssignmentSubmission(): void {
		this.currentSubmission.value = {};
		this.studentComments.value = "";
		authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).collection("assignments").doc(this.currentClassroom.value?.data.assignments[Number(router.currentRoute.value.params.assignmentID.toString())]).collection("submissions").where("IDs", "==", {assignmentID: this.currentClassroom.value?.data.assignments[Number(router.currentRoute.value.params.assignmentID.toString())], uid: authentication.currentUser.value?.uid}).get().then((snapshot: firebase.default.firestore.QuerySnapshot) => {
			if (snapshot.docs.length > 0) {
				snapshot.forEach((doc: firebase.default.firestore.QueryDocumentSnapshot) => {
					if (doc.data()) {
						this.currentSubmission.value = {id: doc.id, data: doc.data()};
						this.studentComments.value = this.currentSubmission.value.data.studentComments;
					}
				});
			}
		});
	}

	public getSubmittedAssignments(): void {
		authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).collection("assignments").doc(this.currentClassroom.value?.data.assignments[Number(router.currentRoute.value.params.assignmentID.toString())]).collection("submissions").where("submitted", "==", true).get().then((snapshot: firebase.default.firestore.QuerySnapshot) => {
			if (snapshot.docs.length > 0) {
				snapshot.forEach((doc: firebase.default.firestore.QueryDocumentSnapshot) => {
					if (doc.data()) {
						this.submittedAssignments.value.push({id: doc.id, data: doc.data()});
					}
				});
			}
		});
	}

	public getDropdownOptions(classroom: firebase.default.firestore.DocumentData): Array<DropdownOptions> {
		return [
			{ icon: "arrow_circle_right", title: "Open", action: (): void => { 
				router.push({path: `/classroom/${classroom.id}`}); 
			}}
		];
	}

	public getAssignmentDropdownOptions(id: number): Array<DropdownOptions> {
		return [
			{ icon: "folder", title: "Open", action: (): void => { 
				this.goToAssignment(id);
			}},
			{ icon: "trash", title: "Delete", action: (): void => { 
				this.deleteAssignment(id).finally(() => {
					location.reload();
				});
			}}
		];
	}

	public editSubmission(): void {
		if (this.submittedAssignments.value[this.currentIndex.value].data) {
			console.log(this.submittedAssignments.value[this.currentIndex.value].data);
		}
	}

	public submitAssignment(): void {
		this.saveStudentComment();
		authentication.db.collection("classrooms").doc(this.currentClassroom.value?.id).collection("assignments").doc(this.currentClassroom.value?.data.assignments[Number(router.currentRoute.value.params.assignmentID.toString())]).collection("submissions").doc(this.currentSubmission.value.id).update({
			submitted: true
		}).then(() => {
			this.getClassroom(router.currentRoute.value.params.classID.toString()).finally(() => {
				this.getAssignmentSubmission();
				this.getSubmittedAssignments();
			});
		});
	}

	public openSubmission(index: number): void {
		this.currentIndex.value = index;
		modalState.classroomSubmissionModal = true;
	}
}

export const classroom: Classroom = new Classroom();

export let currentAssignment: Ref;
