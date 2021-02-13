<template>
	<Header />
	<div class="layout bg-gray-50">
		<div class="flex w-full h-full overflow-x-hidden">
			<MainNav v-if="isDesktopLayout" />
			<div class="flex-1 w-full h-full overflow-y-auto">
				<slot />
			</div>
		</div>
	</div>
	<SlideoverNav />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isDesktopLayout } from "@/providers/mobile";

export default defineComponent({
	name: "DefaultLayout",
	setup() {
		return { isDesktopLayout };
	}
});
</script>

<style>
.layout {
	height: calc(100vh - 3.5rem);
}
</style>
