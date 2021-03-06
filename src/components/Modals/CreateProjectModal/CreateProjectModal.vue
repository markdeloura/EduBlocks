<template>
	<Modal
		:state="modalState.createProjectModal"
		@close="modalState.createProjectModal = false"
	>
		<template #content>
			<h1 class="mb-6 text-xl font-semibold">
				Create new project
			</h1>
			<Input
				v-model="state.filename"
				label="Project Name"
				placeholder="Untitled Project"
			/>
			<Select
				v-model="state.mode"
				label="Mode"
				:image="'/images/platforms/' + state.mode + '.png'"
				:options="platforms"
				:selected="state.mode"
			/>
		</template>
		<template #buttons>
			<Button
				text="Create Project"
				variant="Primary"
				class="ml-4"
				@click="editor.load()"
			/>
			<Button
				text="Cancel"
				variant="Light"
				@click="modalState.createProjectModal = false"
			/>
		</template>
	</Modal>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { modalState } from "@/components/Modals/ModalState";
import { platforms, Platform } from "@/platforms/platforms";
import { state } from "@/state";
import { editor } from "@/views/Editor/Editor.ts";

export default defineComponent({
	name: "CreateProjectModal",
	setup() {
		watchEffect(() => {
			if (modalState.createProjectModal && state.mode === Platform.None) {
				state.mode = Platform.Python;
			}
		});

		return { modalState, platforms, state, editor };
	}
});
</script>