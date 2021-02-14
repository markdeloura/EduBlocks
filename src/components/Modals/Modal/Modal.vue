<template>
	<div
		v-show="state"
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
					v-show="state"
					class="fixed inset-0 transition-opacity cursor-pointer"
					aria-hidden="true"
					@click="closeModal()"
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
					v-show="state"
					class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
				>
					<div class="px-4 pt-5 pb-4 space-y-4 bg-white sm:p-6">
						<slot name="content" />
					</div>
					<div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
						<slot name="buttons" />
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Data } from "@/types";

export default defineComponent({
	name: "Modal",
	props: {
		state: Boolean
	},
	setup(props: Data) {
		function closeModal(): void {
			let state: any = props.state;
			state = false;
			state;
		}

		return { closeModal };
	}
});
</script>