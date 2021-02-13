<template>
	<nav class="fixed top-0 z-50 w-full bg-white border-b-2">
		<div class="px-4">
			<div class="flex justify-between h-14">
				<div class="flex">
					<div class="flex items-center flex-shrink-0">
						<i
							v-if="!isDesktopLayout"
							class="z-50 mr-3 text-lg cursor-pointer fas fa-bars fa-fw"
							@click="isSlideOverNavOpen = true"
						/>
						<img
							class="block w-auto h-8 xl:hidden"
							src="/images/brand/edublocks-small.svg"
						>
						<img
							class="hidden w-auto h-8 xl:block"
							src="/images/brand/edublocks.svg"
						>
					</div>
				</div>
				<div
					v-if="isDesktopLayout"
					class="flex flex-wrap content-center h-full"
				>
					<div class="bg-gray-100 border rounded-md h-9 w-96" />
				</div>
				<div class="flex items-center ml-6">
					<Avatar />
				</div>
			</div>
		</div>
	</nav>
	<div class="w-full h-14" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router/index";
import { authentication } from "@/providers/auth";
import { isDesktopLayout } from "@/providers/mobile";
import { isSlideOverNavOpen } from "@/components/SlideoverNav/SlideoverNav";

export default defineComponent({
	name: "Header",
	setup() {
		return { router, authentication, isDesktopLayout, isSlideOverNavOpen };
	}
});
</script>