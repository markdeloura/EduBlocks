<template>
	<div />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import Preview from "./Preview";

export default defineComponent({
	name: "Projects",
	setup() {
		const view: Preview = new Preview();

		onBeforeMount(() => {
			view.setHTML();
		});

		return { view };
	}
});
</script>