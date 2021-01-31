<template>
	<nav class="fixed top-0 w-full shadow-lg bg-navy-500">
		<div class="px-4">
			<div class="flex justify-between h-16">
				<div class="flex">
					<div class="flex items-center flex-shrink-0">
						<img
							class="block w-auto h-8 lg:hidden"
							src="/images/brand/edublocks-small.svg"
						>
						<img
							class="hidden w-auto h-8 lg:block"
							src="/images/brand/edublocks.svg"
						>
					</div>
					<div class="flex ml-6 space-x-8">
						<RouterTab
							v-for="option in component.navOptions"
							:key="option.id"
							:path="option.path"
							:icon="option.icon"
							:text="option.text"
						/>
					</div>
				</div>
				<div class="flex items-center ml-6">
					<Icon
						name="sun"
						class="p-1 text-white rounded-full cursor-pointer h-7 w-7 hover:text-opacity-80 focus:outline-none transition-all"
					/>
					<Icon
						name="moon"
						class="p-1 text-white rounded-full cursor-pointer h-7 w-7 hover:text-opacity-80 focus:outline-none transition-all"
					/>
					<Avatar />
				</div>
			</div>
		</div>
	</nav>
	<div class="w-full h-16" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MainNav } from "./MainNav";

export default defineComponent({
	name: "MainNav",
	setup() {
		const component: MainNav = new MainNav();

		return { component };
	}
});
</script>