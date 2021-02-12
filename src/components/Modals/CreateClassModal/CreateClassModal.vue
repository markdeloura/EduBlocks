<template>
	<div
		v-show="modalState.createClassModal"
		class="fixed inset-0 overflow-y-auto z-75"
	>
		<div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
			<transition
				enter-active-class="duration-300 ease-out"
				enter-from-class="opacity-0"
				enter-to-class="opacity-100"
				leave-active-class="duration-200 ease-in"
				leave-from-class="opacity-100"
				leave-to-class="opacity-0"
			>
				<div
					v-show="modalState.createClassModal"
					class="fixed inset-0 transition-opacity cursor-pointer"
					aria-hidden="true"
					@click="modalState.createClassModal = false"
				>
					<div class="absolute inset-0 bg-gray-400 opacity-70" />
				</div>
			</transition>

			<span
				class="hidden sm:inline-block sm:align-middle sm:h-screen"
				aria-hidden="true"
			>&#8203;</span>

			<transition
				enter-active-class="duration-300 ease-out"
				enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
				enter-to-class="translate-y-0 opacity-100 sm:scale-100"
				leave-active-class="duration-200 ease-in"
				leave-from-class="translate-y-0 opacity-100 sm:scale-100"
				leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
			>
				<div
					v-show="modalState.createClassModal"
					class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
				>
					<div class="px-4 pt-5 pb-4 space-y-4 bg-white sm:p-6">
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
					</div>
					<div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
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
					</div>
				</div>
			</transition>
		</div>
	</div>
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