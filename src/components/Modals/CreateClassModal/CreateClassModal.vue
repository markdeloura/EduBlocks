<template>
	<Modal
		:state="modalState.createClassModal"
		@close="modalState.createClassModal = false"
	>
		<template #content>
			<h1 class="mb-6 text-xl font-semibold">
				Create new class
			</h1>
			<Input
				v-model="component.state.name"
				label="Class Name"
				placeholder="Year 7 A3"
			/>
			<Input
				v-model="component.state.type"
				label="Class Subject"
				placeholder="Computer Science"
			/>
			<Select
				v-model="component.state.icon"
				label="Class Icon"
				:options="component.iconOptions"
				selected="python"
			/>
			<Select
				v-model="component.state.color"
				label="Class Colour"
				:options="component.colourOptions"
				selected="Blue"
			/>
		</template>
		<template #buttons>
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-pink-500 border border-transparent rounded-md shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm"
				@click="component.create()"
			>
				Create Class
			</button>
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				@click="modalState.createClassModal = false"
			>
				Cancel
			</button>
		</template>
	</Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CreateClassModal } from "./CreateClassModal";
import { modalState } from "@/components/Modals/ModalState";

export default defineComponent({
	name: "CreateClassModal",
	setup() {
		const component: CreateClassModal = new CreateClassModal();

		return { modalState, component };
	}
});
</script>