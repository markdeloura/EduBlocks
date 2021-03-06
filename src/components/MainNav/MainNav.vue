<template>
	<div class="flex-none w-56 h-full p-4 py-6 border-r-2 xl:w-60">
		<nav class="flex flex-col h-full">
			<div class="h-full space-y-1">
				<MenuItem
					v-for="option in component.navOptions"
					:key="option"
					:icon="option.icon"
					:text="option.text"
					:class="[router.currentRoute.value.meta.title === option.text ? 'bg-white border-gray-300' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600 cursor-pointer text-opacity-75']"
					@click="router.push({path: option.path})"
				/>
			</div>
			<div>
				<div
					class="mt-1 space-y-1"
				>
					<a
						class="flex items-center px-3 py-2 text-sm font-medium text-gray-400 text-opacity-75 transition-all rounded-md cursor-pointer group hover:text-gray-600 hover:bg-gray-50"
					>
						<span class="truncate">
							Report an issue
						</span>
					</a>

					<a
						class="flex items-center px-3 py-2 text-sm font-medium text-gray-400 text-opacity-75 transition-all rounded-md cursor-pointer group hover:text-gray-600 hover:bg-gray-50"
					>
						<span class="truncate">
							Help & Support
						</span>
					</a>
				</div>
			</div>
		</nav>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MainNav } from "./MainNav";
import router from "@/router/index";

export default defineComponent({
	name: "MainNav",
	setup() {
		const component: MainNav = new MainNav();

		return { component, router };
	}
});
</script>