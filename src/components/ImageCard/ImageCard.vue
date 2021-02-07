<template>
	<div class="w-60">
		<div class="h-32 mb-4">
			<img
				:src="image"
				class="object-cover w-full h-full"
			>
		</div>
		<h1 class="text-sm font-medium text-pink-500">
			{{ subtitle }}
		</h1>
		<h1 class="mb-2 text-lg font-semibold leading-tight">
			{{ title }}
		</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ImageCard",
	props: {
		image: String,
		subtitle: String,
		title: String
	}
});
</script>