<template>
	<Modal :state="modalState.shareModal">
		<template #content>
			<div>
				<h1 class="mb-4 text-xl font-semibold">
					Share
				</h1>
			</div>
			<div class="mb-6 border-b border-gray-200">
				<nav
					class="flex -mb-px"
					aria-label="Tabs"
				>
					<a
						class="flex-1 w-full px-1 py-4 text-sm font-medium text-center transition-all border-b-2 cursor-pointer"
						:class="[component.currentTab.value === 1 ? 'border-pink-500 text-pink-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']"
						@click="component.currentTab.value = 1"
					>
						Link
					</a>
					<a
						class="flex-1 w-full px-1 py-4 text-sm font-medium text-center transition-all border-b-2 cursor-pointer"
						:class="[component.currentTab.value === 2 ? 'border-pink-500 text-pink-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']"
						@click="component.currentTab.value = 2"
					>
						Showcase
					</a>
					<a
						v-if="state.mode === Platform.HTML"
						class="flex-1 w-full px-1 py-4 text-sm font-medium text-center transition-all border-b-2 cursor-pointer"
						:class="[component.currentTab.value === 3 ? 'border-pink-500 text-pink-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']"
						@click="component.currentTab.value = 3"
					>
						Website
					</a>
				</nav>
			</div>
			<div>
				<div
					v-if="component.currentTab.value === 3 && state.mode === Platform.HTML"
					class="flex mt-1 rounded-md shadow-sm"
				>
					<div class="relative flex items-stretch flex-grow focus-within:z-10">
						<input
							v-model="component.websiteURL.value"
							type="text"
							readonly
							class="block w-full border-gray-300 rounded-none focus:ring-pink-500 focus:border-pink-500 rounded-l-md sm:text-sm"
						>
					</div>
					<button
						class="relative inline-flex items-center px-4 py-2 -ml-px space-x-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
						@click="component.copyLink(component.websiteURL.value)"
					>
						<span>Copy</span>
					</button>
				</div>
			</div>
		</template>
		<template #buttons>
			<button
				type="button"
				class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-pink-500 border border-transparent rounded-md shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm"
				@click="modalState.shareModal = false"
			>
				Close
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
import { ShareModal } from "./ShareModal";

export default defineComponent({
	name: "ShareModal",
	setup() {
		const component: ShareModal = new ShareModal();

		watchEffect(() => {
			if (modalState.shareModal === true) {
				component.generateWebsite();
			}
		});

		return { modalState, Platform, state, editor, component };
	}
});
</script>