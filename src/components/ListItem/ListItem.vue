<template>
	<li class="py-5 pt-0">
		<div class="flex items-center space-x-4">
			<div class="flex-shrink-0">
				<div
					class="w-8 h-8 p-2 rounded-full"
					:class="component.getVariant()"
				>
					<img
						v-if="image"
						class="w-full h-full"
						:src="image"
						alt=""
					>
				</div>
			</div>
			<div class="flex-1 min-w-0">
				<p class="text-sm font-medium text-gray-900 truncate">
					{{ title }}
				</p>
				<p class="text-sm text-gray-500 truncate">
					{{ subtitle }}
				</p>
			</div>
			<div>
				<a
					class="inline-flex items-center mr-2"
				>
					<Icon
						name="trash"
						class="w-5 h-5 mr-4 text-gray-400 cursor-pointer transition-all hover:text-red-500"
					/>
					<Icon
						name="link"
						class="w-5 h-5 mr-4 text-gray-400 cursor-pointer transition-all hover:text-blue-500"
					/>
					<Icon
						name="chevron-right"
						class="w-5 h-5 text-pink-500 cursor-pointer transition-all hover:text-pink-600"
					/>
				</a>
			</div>
		</div>
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Data } from "@/types";
import { ListItem } from "./ListItem";

export default defineComponent({
	name: "ListItem",
	props: {
		image: String,
		title: String,
		subtitle: String,
		variant: String
	},
	setup(props: Data) {
		const component: ListItem = new ListItem(props);

		return { component };
	}
});
</script>