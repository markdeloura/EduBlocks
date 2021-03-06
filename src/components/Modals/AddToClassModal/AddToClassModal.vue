<template>
	<Modal
		:state="modalState.addToClassModal"
		@close="modalState.addToClassModal = false"
	>
		<template #content>
			<h1 class="mb-4 text-xl font-semibold">
				Join Classroom
			</h1>
			<h1 class="w-full font-semibold text-center text-9xl">
				{{ code }}
			</h1>
		</template>
		<template #buttons>
			<Button
				text="Close"
				variant="Primary"
				class="ml-4"
				@click="modalState.addToClassModal = false"
			/>
			<Button
				text="Copy Link"
				variant="Light"
			/>
		</template>
	</Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { modalState } from "@/components/Modals/ModalState";

export default defineComponent({
	name: "AddToClassModal",
	props: {
		code: String
	},
	setup() {
		return { modalState };
	}
});
</script>