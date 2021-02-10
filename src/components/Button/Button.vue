<template>
	<button
		type="button"
		class="inline-flex items-center px-4 py-2 text-base font-medium text-center text-white transition-all border border-transparent rounded-md shadow-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
		:class="component.getVariant()"
	>
		<Icon
			v-if="icon"
			:name="icon"
			class="mr-2 -ml-1 w-7 h-7"
		/>
		<span class="w-full">{{ text }}</span>
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "./Button";
import { Data } from "@/types";

export default defineComponent({
	name: "Button",
	props: {
		variant: String,
		icon: String,
		text: String
	},
	setup(props: Data) {
		const component: Button = new Button(props);

		return { component };
	}
});
</script>