<template>
	<main-nav />
	<div class="default-layout bg-gray-50">
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "DefaultLayout"
});
</script>

<style>
.default-layout {
	height: calc(100vh - 4rem);
}
</style>
