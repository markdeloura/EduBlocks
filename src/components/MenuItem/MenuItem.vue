<template>
	<a
		class="flex items-center px-3 py-2 text-sm font-medium transition-all border-2 border-transparent rounded-md group"
	>
		<Icon
			:name="icon"
			class="flex-shrink-0 w-6 h-6 mr-3 -ml-1"
		/>
		<span class="truncate">
			{{ text }}
		</span>
	</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "MenuItem",
	props: {
		text: String,
		icon: String
	}
});
</script>