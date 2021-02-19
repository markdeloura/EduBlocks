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
				<div class="space-y-8">
					<div>
						<h1 class="mb-2 text-lg font-bold">
							Info from {{ view.currentClassroomAssignments.value[assignment].data.teacher }}:
						</h1>
						<p>{{ view.currentClassroomAssignments.value[assignment].data.description }}</p>
					</div>
					<div>
						<h1 class="mb-2 text-lg font-bold">
							Your Comments:
						</h1>
						<Textarea rows="5" />
					</div>
				</div>
			</div>
			<div class="sticky flex flex-col w-64 h-full space-y-6 xl:w-80">
				<div class="flex-none w-full p-6 bg-white rounded-lg shadow">
					<h2
						class="text-base font-medium text-gray-900"
					>
						Your Code
					</h2>
					<div class="mt-4 space-y-4">
						<Button
							variant="Primary"
							text="Open your code"
							class="w-full"
							@click="view.openAssignmentCode(view.currentClassroomAssignments.value[assignment].data.xmlCode, view.currentClassroomAssignments.value[assignment].data.fileTitle, view.currentClassroomAssignments.value[assignment].id)"
						/>
						<a
							class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 transition-all bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
						>
							Submit Assignment
						</a>
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
import { defineComponent, onMounted } from "vue";
import Classroom from "./Classroom";
import router from "@/router/index";
import { modalState } from "@/components/Modals/ModalState";
 
export default defineComponent({
	name: "ClassroomAssignment",
	setup() {
		const view: Classroom = new Classroom();
		const assignment: number = Number(router.currentRoute.value.params.assignmentID.toString());

		onMounted(() => {
			view.getClassroom(router.currentRoute.value.params.classID.toString());
		});

		return { view, router, modalState, assignment };
	}
});
</script>