<template>
	<Modal :state="modalState.createProjectModal">
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
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-pink-500 border border-transparent rounded-md shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm"
				@click="editor.load()"
			>
				Create Project
			</button>
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				@click="modalState.createProjectModal = false"
			>
				Cancel
			</button>
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