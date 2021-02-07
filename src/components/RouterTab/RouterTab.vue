<template>
	<router-link
		class="inline-flex items-center px-4 pt-1 text-sm font-medium text-white border-b-2 border-transparent opacity-75 hover:opacity-90 transition-all"
		:to="path"
	>
		<Icon
			v-if="icon"
			:name="icon"
			class="w-5 h-5 mr-3 -ml-1"
		/>
		{{ text }}
	</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "RouterTab",
	props: {
		text: String,
		path: String,
		icon: String
	}
});
</script>

<style>
.router-link-active {
	border-bottom: #ff0066 solid;
	opacity: 100%;
	cursor: default;
}
</style>