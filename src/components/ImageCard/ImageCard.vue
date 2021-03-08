<template>
	<div class="cursor-pointer w-60 group">
		<div class="mb-4 h-36">
			<img
				:src="image"
				class="object-cover w-full h-full transition-all group-hover:opacity-75"
			>
		</div>
		<h1 class="text-lg font-semibold leading-tight">
			{{ title }}
		</h1>
		<div class="flex mb-1 space-x-2">
			<h1 class="text-sm font-medium text-pink-500">
				{{ subtitle }}
			</h1>
			<h1
				v-if="type"
				class="flex items-center px-2 text-xs font-medium text-white bg-gray-400 rounded-md"
			>
				{{ type }}
			</h1>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ImageCard",
	props: {
		image: String,
		subtitle: String,
		title: String,
		type: String,
	}
});
</script>