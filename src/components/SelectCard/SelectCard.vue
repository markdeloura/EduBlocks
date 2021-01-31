<template>
	<div class="flex flex-col justify-center h-48 border-4 border-gray-300 border-dashed rounded-lg col-span-1 transition-all">
		<img
			v-if="image"
			class="self-center h-28"
			:src="image"
		>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "SelectCard",
	props: {
		image: String
	}
});
</script>