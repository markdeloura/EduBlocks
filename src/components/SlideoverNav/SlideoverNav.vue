<template>
	<div
		v-show="isSlideOverNavOpen"
		class="fixed inset-0 overflow-y-auto z-75"
	>
		<div
			v-show="isSlideOverNavOpen"
			class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
		>
			<div
				class="fixed inset-0 z-50" 
			>
				<div class="absolute inset-0 w-60 bg-gray-50">
					<div class="flex flex-wrap content-center w-full bg-white border-b-2 h-14">
						<div class="flex items-center flex-shrink-0 w-full px-4 pt-0.5">
							<img
								class="block w-auto h-8 xl:hidden"
								src="/images/brand/edublocks-small.svg"
							>
							<img
								class="hidden w-auto h-8 xl:block"
								src="/images/brand/edublocks.svg"
							>
							<i
								class="z-50 ml-auto text-lg text-gray-400 transition-all cursor-pointer fas fa-times fa-fw hover:text-red-500"
								@click="component.closeSlideOverNav()"
							/>
						</div>
					</div>
					<div class="w-full p-4 border-r-2 nav-height">
						<nav class="flex flex-col h-full">
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
			</div>
		</div>
		<transition
			enter-active-class="duration-200 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="duration-200 ease-out"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-show="isSlideOverNavOpen"
				class="fixed inset-0 z-40 transition-all"
			>
				<div
					class="absolute inset-0 bg-gray-500 opacity-75 cursor-pointer"
					@click="isSlideOverNavOpen = false"
				/>
			</div>
		</transition>
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

<style scoped>
.nav-height {
	height: calc(100% - 3.5rem);
}
</style>