<template>
	<Header />
	<div class="layout bg-gray-50">
		<div class="flex w-full h-full overflow-x-hidden">
			<MainNav />
			<div class="flex-1 w-full h-full overflow-y-auto">
				<slot />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "DefaultLayout"
});
</script>

<style>
.layout {
	height: calc(100vh - 3.5rem);
}
</style>
