<template>
	<div
		class="items-center md:flex md:justify-between bg-gray-50"
		:class="[sticky ? 'sticky top-0.5 pb-6 border-b mb-4' : '']"
	>
		<div class="flex-1 min-w-0">
			<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
				{{ title }}
			</h2>
		</div>
		<div class="flex flex-row-reverse mt-4 space-x-4 xl:mt-0 xl:ml-4 xl:flex-row">
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