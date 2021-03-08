<template>
	<div class="flex items-center px-4 py-4 transition-all cursor-pointer hover:bg-gray-100 hover:bg-opacity-30">
		<div
			class="flex items-center flex-1 min-w-0"
			@click="this.$emit('rowClick')"
		>
			<div class="flex-shrink-0">
				<div
					v-if="icon"
					class="flex flex-wrap content-center justify-center w-10 h-10 font-extrabold rounded-full"
					:class="component.getVariant()"
				>
					<Icon
						:name="icon"
						class="w-5 h-5 fill-current"
						is-filled
					/>
				</div>
				<div
					v-if="image"
					class="w-10 h-10 rounded-full"
				>
					<img
						class="object-cover w-full h-full rounded-full"
						:src="image"
					>
				</div>
			</div>
			<div class="flex-1 min-w-0 px-4 md:grid md:grid-cols-4 md:gap-4">
				<div>
					<p class="font-medium truncate text-md">
						{{ item1 }}
					</p>
				</div>
				<div class="hidden mt-1 md:block">
					<div>
						<p class="text-sm text-gray-500">
							{{ item2 }}
						</p>
					</div>
				</div>
				<div class="hidden mt-1 md:block">
					<div>
						<p class="text-sm text-gray-500">
							{{ item3 }}
						</p>
					</div>
				</div>
				<div class="hidden mt-1 md:block">
					<div>
						<p class="text-sm text-gray-500">
							{{ item4 }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div v-click-outside="closeDropdown">
			<div
				class="relative flex items-center justify-end"
			>
				<button
					class="inline-flex items-center justify-center w-8 h-8 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
					@click="isOn = !isOn"
				>
					<Icon
						name="dots_vertical"
						class="w-5 h-5"
					/>
				</button>
				<transition
					enter-active-class="transition duration-100 ease-out"
					enter-from-class="transform scale-95 opacity-0"
					enter-to-class="transform scale-100 opacity-100"
					leave-active-class="transition duration-75 ease-in"
					leave-from-class="transform scale-100 opacity-100"
					leave-to-class="transform scale-95 opacity-0"
				>
					<div
						v-if="isOn"
						class="absolute top-0 z-10 w-48 mx-3 mt-1 origin-top-right bg-white border divide-y divide-gray-200 rounded-md shadow-lg right-7 ring-1 ring-black ring-opacity-5"
					>
						<div
							v-for="option in dropdownOptions"
							:key="option"
							class="py-1"
						>
							<a
								class="flex items-center px-4 py-2 text-sm text-gray-500 cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
								@click="option.action"
							>
								<Icon
									class="w-5 h-5 mr-3 text-gray-600 group-hover:text-gray-500"
									:name="option.icon"
								/>
								{{ option.title }}
							</a>
						</div>
					</div>
				</transition>
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
		image: String,
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