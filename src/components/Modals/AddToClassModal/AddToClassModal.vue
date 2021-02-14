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
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-pink-500 border border-transparent rounded-md shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm"
				@click="modalState.addToClassModal = false"
			>
				Close
			</button>
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
			>
				Copy Link
			</button>
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