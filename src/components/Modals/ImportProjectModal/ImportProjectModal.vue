<template>
	<Modal :state="modalState.importProjectModal">
		<template #content>
			<div>
				<h1 class="mb-2 text-xl font-semibold">
					Import Project
				</h1>
				<p class="mb-6 text-gray-400">
					We were unable to detect the mode you used to create this file, please select it below.
				</p>
			</div>
			<Select
				v-model="state.mode"
				:image="`/images/platforms/${state.mode}.png`"
				:options="platforms"
				:selected="state.mode"
			/>
		</template>
		<template #buttons>
			<Button
				text="Import & Open"
				variant="Primary"
				@click="component.importAndOpen()"
			/>
		</template>
	</Modal>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { modalState } from "@/components/Modals/ModalState";
import { platforms, Platform } from "@/platforms/platforms";
import { state } from "@/state";
import { editor } from "@/views/Editor/Editor";
import { ImportProjectModal } from "./ImportProjectModal";

export default defineComponent({
	name: "ImportProjectModal",
	setup() {
		const component: ImportProjectModal = new ImportProjectModal();

		watchEffect(() => {
			if (modalState.importProjectModal && state.mode === Platform.None) {
				state.mode = Platform.Python;
			}
		});

		return { modalState, platforms, state, editor, component };
	}
});
</script>