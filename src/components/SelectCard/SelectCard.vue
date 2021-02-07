<template>
	<div class="flex col-span-1 rounded-md cursor-pointer w-60 group">
		<div
			class="flex items-center justify-center flex-shrink-0 w-20 text-sm font-medium text-white transition-all border-t-2 border-b-2 border-l-2 rounded-l-md group-hover:border-pink-500"
			:class="tileClass"
		>
			<img
				:src="image"
				class="h-9"
			>
		</div>
		<div class="flex items-center justify-between flex-1 truncate transition-all bg-white border-t-2 border-b-2 border-r-2 border-gray-200 rounded-r-md group-hover:border-pink-500">
			<div class="flex-1 px-4 py-2 text-sm truncate">
				<a
					class="text-lg font-medium text-gray-900 hover:text-gray-600"
				>
					{{ text }}
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "SelectCard",
	props: {
		image: String,
		text: String,
		tileClass: String
	}
});
</script>