<template>
	<div class="flex items-center px-4 py-4 animate-pulse">
		<div
			class="flex items-center flex-1 min-w-0"
		>
			<div class="flex-shrink-0">
				<div
					class="flex flex-wrap content-center justify-center w-10 h-10 font-extrabold bg-gray-300 rounded-full"
				/>
			</div>
			<div class="flex-1 min-w-0 px-4 md:grid md:grid-cols-4 md:gap-4">
				<div>
					<div class="w-32 h-4 bg-gray-300" />
				</div>
				<div class="hidden mt-1 md:block">
					<div>
						<div class="w-32 h-4 bg-gray-200" />
					</div>
				</div>
				<div class="hidden mt-1 md:block">
					<div>
						<div class="w-32 h-4 bg-gray-200" />
					</div>
				</div>
				<div class="hidden mt-1 md:block">
					<div>
						<div class="w-32 h-4 bg-gray-200" />
					</div>
				</div>
			</div>
		</div>
		<div>
			<div
				class="relative flex items-center justify-end"
			>
				<div
					class="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full"
				>
					<Icon
						name="dots_vertical"
						class="w-5 h-5"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Data } from "@/types";
import { ListItem, isDropdownOpen } from "./ListItem";
import { isDesktopLayout } from "@/providers/mobile";

export default defineComponent({
	name: "ListItem",
	props: {
		icon: String,
		item1: String,
		item2: String,
		item3: String,
		item4: String,
		variant: String,
		dropdownOptions: Array
	},
	emits: ["rowClick"],
	setup(props: Data) {
		const component: ListItem = new ListItem(props);

		return { component, isDesktopLayout, isDropdownOpen };
	},
	data() {
		return {
			isOn: false
		};
	},
	methods: {
		closeDropdown(): void {
			this.isOn = false;
		}
	}
});
</script>