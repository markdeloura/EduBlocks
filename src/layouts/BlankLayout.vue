<template>
	<div class="w-screen layout">
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BlankLayout",
});
</script>
