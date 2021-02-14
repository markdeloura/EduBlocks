<template>
	<Modal :state="modalState.joinClassModal">
		<template #content>
			<div>
				<h1 class="mb-2 text-xl font-semibold">
					Join Classroom
				</h1>
				<p class="mb-6 text-gray-400">
					Ask your teacher for a code to join your class.
				</p>
			</div>
			<Input
				v-model="component.state.code"
				label="Enter code here"
				placeholder="Code"
			/>
		</template>
		<template #buttons>
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-pink-500 border border-transparent rounded-md shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm"
				@click="component.goToJoinLink()"
			>
				Join Class
			</button>
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				@click="modalState.joinClassModal = false"
			>
				Cancel
			</button>
		</template>
	</Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { JoinClassModal } from "./JoinClassModal";
import { modalState } from "@/components/Modals/ModalState";

export default defineComponent({
	name: "CreateClassModal",
	setup() {
		const component: JoinClassModal = new JoinClassModal();

		return { modalState, component };
	}
});
</script>