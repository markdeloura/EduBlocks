<template>
	<div
		v-if="isSlideOverNavOpen"
		class="fixed inset-0 z-10 overflow-y-auto"
	>
		<div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
			<div
				class="fixed inset-0 z-50 transition-opacity"
			>
				<div class="absolute inset-0 p-4 border-r-2 w-60 bg-gray-50">
					<nav class="flex flex-col h-full">
						<div class="flex items-center flex-shrink-0 mb-6">
							<img
								class="block w-auto h-8 lg:hidden"
								src="/images/brand/edublocks-small.svg"
							>
							<img
								class="hidden w-auto h-8 lg:block"
								src="/images/brand/edublocks.svg"
							>
							<i
								class="z-50 ml-auto text-lg text-gray-400 transition-all cursor-pointer fas fa-times fa-fw hover:text-red-500"
								@click="component.closeSlideOverNav()"
							/>
						</div>
						<Button
							icon="plus"
							text="New Project"
							variant="Primary"
							class="w-full mb-4"
						/>
						<div class="h-full space-y-1">
							<MenuItem
								v-for="option in component.navOptions"
								:key="option"
								:icon="option.icon"
								:text="option.text"
								:class="[router.currentRoute.value.name === option.text ? 'bg-white border-gray-300' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900 cursor-pointer']"
								@click="component.navigateToRoute(option.path)"
							/>
						</div>
						<div class="h-24">
							<div
								class="mt-1 space-y-1"
								aria-labelledby="projects-headline"
							>
								<a
									href="#"
									class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md group hover:text-gray-900 hover:bg-gray-50"
								>
									<span class="truncate">
										Report an issue
									</span>
								</a>

								<a
									href="#"
									class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md group hover:text-gray-900 hover:bg-gray-50"
								>
									<span class="truncate">
										Help & Support
									</span>
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<div
				class="fixed inset-0 z-40 transition-opacity"
			>
				<div
					class="absolute inset-0 bg-gray-500 opacity-75 cursor-pointer"
					@click="isSlideOverNavOpen = false"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SlideoverNav, isSlideOverNavOpen } from "./SlideoverNav";
import router from "@/router/index";

export default defineComponent({
	name: "MainNav",
	setup() {
		const component: SlideoverNav = new SlideoverNav();

		return { component, router, isSlideOverNavOpen };
	}
});
</script>