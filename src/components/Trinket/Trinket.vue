<template>
	<div class="w-3/6 h-full bg-white rounded-md">
		<div class="w-full h-full overflow-hidden">
			<iframe
				class="relative w-full rounded-md h-104 bottom-8"
				:src="component.getTrinketURL()"
				frameborder="0"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Trinket } from "./Trinket";

export default defineComponent({
	name: "Trinket",
	setup() {
		const component: Trinket = new Trinket();

		return { component };
	}
});
</script>

<style>
.h-104{
	height: 104%;
}
</style>