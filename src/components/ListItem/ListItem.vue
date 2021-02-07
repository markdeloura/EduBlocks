<template>
	<div class="grid w-full h-16 grid-cols-4 grid-rows-1 px-2 transition-all hover:bg-gray-100">
		<div class="w-full h-full">
			<div class="flex flex-wrap items-center h-full space-x-4">
				<div class="flex-shrink-0">
					<div class="flex flex-wrap content-center justify-center w-10 h-10 font-extrabold text-blue-500 bg-blue-200 rounded-full">
						PY
					</div>
				</div>
				<div class="flex-1 min-w-0">
					<p class="pr-4 text-lg font-medium text-gray-700 truncate">
						{{ item1 }}
					</p>
				</div>
			</div>
		</div>
		<div class="flex flex-wrap content-center w-full h-full pl-10 text-gray-400">
			{{ item2 }}
		</div>
		<div class="flex flex-wrap content-center justify-center w-full h-full text-gray-400">
			{{ item3 }}
		</div>
		<div class="flex flex-wrap content-center justify-end w-full h-full space-x-8 text-gray-400">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Data } from "@/types";
import { ListItem } from "./ListItem";

export default defineComponent({
	name: "ListItem",
	props: {
		image: String,
		item1: String,
		item2: String,
		item3: String,
		variant: String
	},
	setup(props: Data) {
		const component: ListItem = new ListItem(props);

		return { component };
	}
});
</script>