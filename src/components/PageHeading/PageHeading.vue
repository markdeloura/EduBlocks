<template>
	<div
		class="md:flex md:items-center md:justify-between bg-gray-50"
		:class="[sticky ? 'sticky top-0.5 pt-3.5 pb-6' : '']"
	>
		<div class="flex-1 min-w-0">
			<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
				{{ title }}
			</h2>
		</div>
		<div class="flex mt-4 space-x-4 md:mt-0 md:ml-4">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "PageHeading",
	props: {
		title: String,
		sticky: Boolean
	}
});
</script>