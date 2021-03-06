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
			<Button
				text="Create Class"
				variant="Primary"
				class="ml-4"
				@click="component.create()"
			/>
			<Button
				text="Cancel"
				variant="Light"
				@click="modalState.createClassModal = false"
			/>
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