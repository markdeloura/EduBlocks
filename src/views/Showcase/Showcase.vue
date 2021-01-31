<template>
	<h1>Hello</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Showcase from "./Showcase";

export default defineComponent({
	name: "Showcase",
	setup() {
		const view: Showcase = new Showcase();

		return { view };
	}
});
</script>