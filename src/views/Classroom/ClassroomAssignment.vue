<template>
	<div
		v-if="view.currentClassroom.value"
		class="w-full h-full px-4 py-6 xl:px-8"
	>
		<div class="flex flex-row w-full h-full space-x-6">
			<div class="flex-1 w-full h-full">
				<PageHeading
					:title="view.currentClassroom.value.data.assignments[assignment].title"
					with-info
				>
					<div class="flex items-center mt-2 text-sm text-gray-500">
						<Icon
							name="clock"
							class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
						/>
						{{ view.currentClassroom.value.data.assignments[assignment].due.replace("T", " @ ") }}
					</div>
					<div class="flex items-center mt-2 text-sm text-gray-500">
						<Icon
							name="check"
							class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
						/>
						{{ view.currentClassroom.value.data.assignments[assignment].marks }} Marks Available
					</div>
					<div class="flex items-center mt-2 text-sm text-gray-500">
						<Icon
							name="user"
							class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
						/>
						{{ view.currentClassroom.value.data.assignments[assignment].teacher }}
					</div>
				</PageHeading>
				<div class="space-y-8">
					<div>
						<h1 class="mb-2 text-lg font-bold">
							Info from {{ view.currentClassroom.value.data.assignments[assignment].teacher }}:
						</h1>
						<p>{{ view.currentClassroom.value.data.assignments[assignment].description }}</p>
					</div>
					<!-- <div>
						<h1 class="mb-2 text-lg font-bold">
							Starter Code:
						</h1>
						<Button
							text="Open Starter Code"
							icon="folder"
							variant="Primary"
						/>
					</div> -->
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
						<a
							class="block w-full px-4 py-2 text-sm font-medium text-center text-white transition-all bg-pink-500 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-pink-600"
							@click="view.openAssignmentCode(view.currentClassroom.value.data.assignments[assignment].xmlCode, view.currentClassroom.value.data.assignments[assignment].fileTitle)"
						>
							Open Your Code
						</a>
						<a
							class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 transition-all bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
						>
							Submit Assignment
						</a>
						<div>
							<h1 class="font-medium">
								Results:
							</h1>
							<span class="text-sm">0/{{ view.currentClassroom.value.data.assignments[assignment].marks }} Marks</span>
						</div>
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