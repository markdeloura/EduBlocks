<template>
	<div class="w-full h-full px-4 py-6 xl:px-8">
		<PageHeading
			title="Showcase"
			sticky
		>
			<Button
				text="Add Project"
				icon="plus"
				variant="Primary"
				class="h-11"
			/>
		</PageHeading>
	</div>
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