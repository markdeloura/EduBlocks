<template>
	<div
		v-if="view.currentClassroomAssignments.value.length > 0"
		class="w-full h-full px-4 py-6 xl:px-8"
	>
		<div class="flex flex-row w-full h-full space-x-6">
			<div class="flex-1 w-full h-full">
				<PageHeading
					:title="view.currentClassroomAssignments.value[assignment].data.title"
					with-info
				>
					<div class="flex items-center mt-2 text-sm text-gray-500">
						<Icon
							name="clock"
							class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
						/>
						Due: {{ view.currentClassroomAssignments.value[assignment].data.due.replace('T', ' @ ') }}
					</div>
					<div class="flex items-center mt-2 text-sm text-gray-500">
						<Icon
							name="check"
							class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
						/>
						{{ view.currentClassroomAssignments.value[assignment].data.marks }} Marks Available
					</div>
					<div class="flex items-center mt-2 text-sm text-gray-500">
						<Icon
							name="user"
							class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
						/>
						{{ view.currentClassroomAssignments.value[assignment].data.teacher }}
					</div>
				</PageHeading>
				<div
					v-if="view.currentSubmission.value.data"
					class="space-y-8"
				>
					<div
						v-if="view.currentSubmission.value.data.submitted"
						class="w-full py-6 bg-white rounded-lg shadow"
					>
						<h1 class="mx-4 mb-8 text-lg font-bold">
							Your Results:
						</h1>
						<div
							v-if="!view.currentSubmission.value.data.markedByTeacher"
							class="flex flex-wrap content-center justify-center w-full"
						>
							<div class="flex flex-wrap justify-center space-y-6">
								<img
									src="/images/illustrations/no-assignments.svg"
									class="h-32"
								>
								<div class="w-full space-y-2 text-center">
									<h1 class="block text-xl font-semibold">
										Marking in progress
									</h1>
									<p class="text-gray-400">
										Your teacher has recieved your work and is in the process of marking it.<br>
										Check back later.
									</p>
								</div>
							</div>
						</div>
						<div
							v-else
							class="flex mx-4 space-x-8"
						>
							<IconCard
								:title="view.currentSubmission.value.data.marks"
								subtitle="/22 Marks"
								variant="Green"
								icon="clipboard_check"
								class="flex-none"
							/>
							<p v-if="view.currentSubmission.value.data.teacherComments.length === 0">
								No Comments from your teacher.
							</p>
							<p v-else>
								{{ view.currentSubmission.value.data.teacherComments }}
							</p>
						</div>
					</div>
					<div v-if="!view.isUserAdmin()">
						<h1 class="mb-2 text-lg font-bold">
							Info from your teacher:
						</h1>
						<p>{{ view.currentClassroomAssignments.value[assignment].data.description }}</p>
					</div>
					<div v-if="!view.isUserAdmin()">
						<h1 class="mb-2 text-lg font-bold">
							Your Comments:
						</h1>
						<Textarea
							v-if="!view.currentSubmission.value.data.submitted"
							v-model="view.studentComments.value"
							rows="5"
						/>
						<p v-if="view.currentSubmission.value.data.submitted">
							{{ view.studentComments.value }}
						</p>
						<div
							v-if="!view.currentSubmission.value.data.submitted"
							class="flex w-full mt-4"
						>
							<Button
								variant="Primary"
								text="Save"
								class="ml-auto"
								@click="view.saveStudentComment()"
							/>
						</div>
					</div>
				</div>
				<div
					v-else
					class="space-y-8"
				>
					<div v-if="!view.isUserAdmin()">
						<h1 class="mb-2 text-lg font-bold">
							Info from your teacher:
						</h1>
						<p>{{ view.currentClassroomAssignments.value[assignment].data.description }}</p>
					</div>
					<div v-if="!view.isUserAdmin()">
						<h1 class="mb-2 text-lg font-bold">
							Your Comments:
						</h1>
						<Textarea
							v-model="view.studentComments.value"
							rows="5"
						/>
						<div
							class="flex w-full mt-4"
						>
							<Button
								variant="Primary"
								text="Save"
								class="ml-auto"
								@click="view.saveStudentComment()"
							/>
						</div>
					</div>
					<div
						v-if="view.isUserAdmin()"
						class="w-full py-6 bg-white rounded-lg shadow"
					>
						<h1 class="mx-4 mb-6 text-lg font-bold">
							Student Work:
						</h1>
						<div
							v-if="view.submittedAssignments.value.length > 0"
							class="mb-6"
						>
							<h1 class="mx-4 mb-3">
								Submitted:
							</h1>
							<ListItem
								v-for="submission in view.submittedAssignments.value"
								:key="submission"
								:item1="view.findStudent(submission.data.IDs.uid).name"
								item2="Submitted"
								:item3="submission.data.markedByTeacher ? 'Marked' : 'Not Marked'"
								:item4="`${submission.data.marks}/${view.currentClassroomAssignments.value[assignment].data.marks} Marks`"
								:image="view.findStudent(submission.data.IDs.uid).image"
							/>
						</div>
						<div v-if="view.getStudentsWithNoSubmission().length > 0">
							<h1 class="mx-4 mb-3">
								Not Submitted:
							</h1>
							<ListItem
								v-for="student in view.getStudentsWithNoSubmission()"
								:key="student"
								:item1="view.findStudent(student).name"
								item2="Not Submitted"
								item3="Not Marked"
								:item4="`0/${view.currentClassroomAssignments.value[assignment].data.marks} Marks`"
								:image="view.findStudent(student).image"
								class="opacity-50"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				v-if="view.currentSubmission.value.data"
				class="sticky flex flex-col w-64 h-full space-y-6 xl:w-80"
			>
				<div
					v-if="!view.isUserAdmin()"
					class="flex-none w-full p-6 bg-white rounded-lg shadow"
				>
					<h2
						class="text-base font-medium text-gray-900"
					>
						Actions
					</h2>
					<div
						v-if="!view.currentSubmission.value.data.submitted"
						class="mt-4 space-y-4"
					>
						<Button
							variant="Primary"
							text="Open your code"
							class="w-full"
							@click="view.openAssignmentCode(view.currentClassroomAssignments.value[assignment].data.xmlCode, view.currentClassroomAssignments.value[assignment].data.fileTitle, view.currentClassroomAssignments.value[assignment].id)"
						/>
						<a
							class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 transition-all bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
							@click="view.submitAssignment()"
						>
							Submit Assignment
						</a>
					</div>
					<div
						v-else
						class="mt-4 space-y-4"
					>
						<Button
							variant="Primary"
							text="Assignment Submitted"
							class="w-full"
							icon="check"
						/>
						<Button
							variant="Light"
							text="View Submitted Code"
							class="w-full"
							@click="view.openAssignmentCode(view.currentClassroomAssignments.value[assignment].data.xmlCode, view.currentClassroomAssignments.value[assignment].data.fileTitle, view.currentClassroomAssignments.value[assignment].id)"
						/>
					</div>
				</div>
				<div
					v-else
					class="flex-none w-full p-6 bg-white rounded-lg shadow"
				>
					<h2
						class="text-base font-medium text-gray-900"
					>
						Actions
					</h2>
					<div class="mt-4 space-y-4">
						<Button
							variant="Primary"
							text="Open Starter Code"
							class="w-full"
							@click="view.openAssignmentCode(view.currentClassroomAssignments.value[assignment].data.xmlCode, view.currentClassroomAssignments.value[assignment].data.fileTitle, view.currentClassroomAssignments.value[assignment].id)"
						/>
						<a
							v-if="view.isUserAdmin()"
							class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 transition-all bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
							@click="view.deleteAssignment(assignment)"
						>
							Delete Assignment
						</a>
					</div>
				</div>
			</div>
			<div
				v-else
				class="sticky flex flex-col w-64 h-full space-y-6 xl:w-80"
			>
				<div
					v-if="!view.isUserAdmin()"
					class="flex-none w-full p-6 bg-white rounded-lg shadow"
				>
					<h2
						class="text-base font-medium text-gray-900"
					>
						Actions
					</h2>
					<div
						class="mt-4 space-y-4"
					>
						<Button
							variant="Primary"
							text="Open your code"
							class="w-full"
							@click="view.openAssignmentCode(view.currentClassroomAssignments.value[assignment].data.xmlCode, view.currentClassroomAssignments.value[assignment].data.fileTitle, view.currentClassroomAssignments.value[assignment].id)"
						/>
						<a
							class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 transition-all bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
						>
							No code to submit
						</a>
					</div>
				</div>
				<div
					v-else
					class="flex-none w-full p-6 bg-white rounded-lg shadow"
				>
					<h2
						class="text-base font-medium text-gray-900"
					>
						Actions
					</h2>
					<div class="mt-4 space-y-4">
						<Button
							variant="Primary"
							text="Open Starter Code"
							class="w-full"
							@click="view.openAssignmentCode(view.currentClassroomAssignments.value[assignment].data.xmlCode, view.currentClassroomAssignments.value[assignment].data.fileTitle, view.currentClassroomAssignments.value[assignment].id)"
						/>
						<a
							v-if="view.isUserAdmin()"
							class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 transition-all bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
							@click="view.deleteAssignment(assignment)"
						>
							Delete Assignment
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<AddToClassModal :code="view.currentJoinCode.value" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import Classroom from "./Classroom";
import router from "@/router/index";
import { modalState } from "@/components/Modals/ModalState";
 
export default defineComponent({
	name: "ClassroomAssignment",
	setup() {
		const view: Classroom = new Classroom();
		const assignment: number = Number(router.currentRoute.value.params.assignmentID.toString());

		onBeforeMount(() => {
			view.getClassroom(router.currentRoute.value.params.classID.toString()).finally(() => {
				view.getAssignmentSubmission();
				view.getSubmittedAssignments();
			});
		});

		return { view, router, modalState, assignment };
	}
});
</script>