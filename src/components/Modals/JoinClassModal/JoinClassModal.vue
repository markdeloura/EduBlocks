<template>
	<Modal
		:state="modalState.joinClassModal"
		@close="modalState.joinClassModal = false"
	>
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
			<Button
				text="Join Class"
				variant="Primary"
				class="ml-4"
				@click="component.goToJoinLink()"
			/>
			<Button
				text="Cancel"
				variant="Light"
				@click="modalState.joinClassModal = false"
			/>
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