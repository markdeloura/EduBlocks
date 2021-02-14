<template>
	<Modal
		:state="modalState.createAssignmentModal"
		@close="modalState.createAssignmentModal = false"
	>
		<template #content>
			<h1 class="mb-6 text-xl font-semibold">
				Create new assignment
			</h1>
			<Input
				v-model="component.state.title"
				label="Assignment Title"
			/>
			<div>
				<label
					class="block mb-2 text-sm font-medium text-gray-700"
				>
					Assignment Info
				</label>
				<textarea
					v-model="component.state.description"
					rows="3"
					class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
				/>
			</div>
			<Input
				v-model="component.state.due"
				label="Due Date"
				type="datetime-local"
			/>
			<Select
				v-model="component.state.teacher"
				label="Set By"
				:options="classroom.currentClassroomAdmins.value"
			/>
			<Input
				v-model="component.state.marks"
				label="Total Marks"
				type="number"
			/>
			<div>
				<label
					for="email"
					class="block text-sm font-medium text-gray-700"
				>
					Starter Project
				</label>
				<select
					v-model="component.state.fileSelection"
					class="block w-full mt-1 border-gray-300 rounded-md appearance-none sm:text-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500"
				>
					<option
						v-for="file in component.state.files"
						:key="file"
						:value="file.value"
					>
						{{ file.title }}
					</option>
				</select>
			</div>
		</template>
		<template #buttons>
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-pink-500 border border-transparent rounded-md shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm"
				@click="component.create()"
			>
				Create Assignment
			</button>
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				@click="modalState.createAssignmentModal = false"
			>
				Cancel
			</button>
		</template>
	</Modal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { CreateAssignmentModal } from "./CreateAssignmentModal";
import { modalState } from "@/components/Modals/ModalState";
import { classroom } from "@/views/Classroom/Classroom";
import router from "@/router/index";
import { files, FirebaseFileDropdown } from "@/providers/files";
import Select from "@/components/Select/Select.vue";

export default defineComponent({
	name: "CreateAssignmentModal",
	components: { Select },
	setup() {
		const component: CreateAssignmentModal = new CreateAssignmentModal();

		onMounted(() => {
			classroom.getClassroom(router.currentRoute.value.params.classID.toString()).then(() => {
				files.getAllFilesFromFirebaseForDropdown().then((files: Array<FirebaseFileDropdown>) => {
					component.state.files = files;
				});
			});
		});

		return { modalState, component, classroom };
	}
});
</script>