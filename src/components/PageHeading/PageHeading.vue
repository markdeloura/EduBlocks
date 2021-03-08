<template>
	<div
		v-if="!withInfo"
		class="items-center md:flex md:justify-between bg-gray-50"
		:class="[sticky ? 'sticky top-0.5 pb-6 border-b mb-4' : '']"
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
	<div
		v-else
		class="items-center pt-2 pb-6 mb-6 border-b md:flex md:justify-between bg-gray-50"
	>
		<div class="flex-1 min-w-0">
			<h2 class="mb-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate">
				{{ title }}
			</h2>
			<div class="flex mt-4 space-x-6 md:mt-0">
				<slot />
			</div>
		</div>
		<div class="flex mt-4 space-x-4 h-11" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "PageHeading",
	props: {
		title: String,
		sticky: Boolean,
		withInfo: Boolean
	}
});
</script>