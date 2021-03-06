<template>
	<button
		type="button"
		class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
		:class="component.getVariant()"
	>
		<Icon
			v-if="icon"
			:name="icon"
			class="w-6 h-6 mr-2 -ml-1"
		/>
		<span>{{ text }}</span>
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