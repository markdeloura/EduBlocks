<template>
	<Modal :state="modalState.classroomSubmissionModal">
		<template
			v-if="classroom.submittedAssignments.value.length > 0"
			#content
		>
			<h1 class="mb-2 text-xl font-semibold">
				Joshua Lowe's Work
			</h1>
			<div>
				<label
					class="block mb-2 text-sm font-medium text-gray-700"
				>
					Code
				</label>
				<Button
					text="Open Student Code"
					variant="Primary"
					class="w-full"
					@click="classroom.openSubmittedCode(classroom.submittedAssignments.value[currentIndex].data.xmlCode, classroom.currentClassroomAssignments.value[Number(router.currentRoute.value.params.assignmentID)].data.fileTitle)"
				/>
			</div>
			<Textarea
				v-model="classroom.submittedAssignments.value[currentIndex].data.studentComments"
				label="Student Comments"
				rows="3"
				readonly
			/>
			<div>
				<label
					class="block text-sm font-medium text-gray-700"
				>
					Marks
				</label>
				<div class="relative mt-1 rounded-md shadow-sm">
					<input
						v-model="classroom.submittedAssignments.value[currentIndex].data.marks"
						class="block w-full pr-24 border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
						placeholder="0"
						type="number"
					>
					<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
						<span
							class="text-gray-500 sm:text-sm"
						>
							/{{ classroom.currentClassroomAssignments.value[Number(router.currentRoute.value.params.assignmentID)].data.marks }} Marks
						</span>
					</div>
				</div>
			</div>
			<Textarea
				v-model="classroom.submittedAssignments.value[currentIndex].data.teacherComments"
				label="Teacher Comments"
				rows="3"
			/>
			<div class="flex items-center justify-between pt-4">
				<span
					class="flex flex-col flex-grow"
				>
					<span class="text-sm font-medium text-gray-700">Show as marked</span>
					<span class="text-sm text-gray-500">Students will be able to see your comments and grade.</span>
				</span>
				<button
					type="button"
					:class="component.toggled.value ? 'bg-pink-500' : 'bg-gray-200'"
					class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
					@click="component.toggled.value = !component.toggled.value"
				>
					<span
						:class="component.toggled.value ? 'translate-x-5' : 'translate-x-0'"
						class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
					/>
				</button>
			</div>
		</template>
		<template #buttons>
			<Button
				text="Save"
				variant="Primary"
				class="ml-4"
				@click="classroom.editSubmission()"
			/>
			<Button
				text="Close"
				variant="Light"
				@click="modalState.classroomSubmissionModal = false"
			/>
		</template>
	</Modal>
</template>

<script lang="ts">
import { defineComponent, onMounted, watchEffect } from "vue";
import { modalState } from "@/components/Modals/ModalState";
import { ClassroomSubmissionModal } from "./ClassroomSubmissionModal";
import { classroom } from "@/views/Classroom/Classroom";
import router from "@/router/index";

export default defineComponent({
	name: "ClassroomSubmissionModal",
	props: {
		currentIndex: Number
	},
	setup() {
		const component: ClassroomSubmissionModal = new ClassroomSubmissionModal();

		onMounted(() => {
			classroom.getClassroom(router.currentRoute.value.params.classID.toString()).finally(() => {
				classroom.getAssignmentSubmission();
				classroom.getSubmittedAssignments();
			});
		});

		watchEffect(() => {
			if (classroom.submittedAssignments.value.length > 0) {
				if (component.toggled.value) {
					classroom.submittedAssignments.value[0].data.markedByTeacher = true;
				}
				if (!component.toggled.value) {
					if (classroom.submittedAssignments.value[0].data.markedByTeacher) {
						component.toggled.value = true;
					}
					classroom.submittedAssignments.value[0].data.markedByTeacher = false;
				}
			}
		});

		return { modalState, component, classroom, router };
	}
});
</script>