<template>
	<button
		type="button"
		class="inline-flex items-center px-4 py-2 text-base font-medium text-white border border-transparent shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
		:class="component.getVariant()"
	>
		<Icon
			:name="icon"
			class="w-5 h-5 mr-3 -ml-1"
		/>
		{{ text }}
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