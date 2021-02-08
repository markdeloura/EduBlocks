<template>
	<nav class="fixed top-0 z-50 w-full bg-white border-b-2">
		<div class="px-4">
			<div class="flex justify-between h-14">
				<div class="flex">
					<div class="flex items-center flex-shrink-0">
						<img
							class="block w-auto h-8 lg:hidden"
							src="/images/brand/edublocks-small.svg"
						>
						<img
							class="hidden w-auto h-8 lg:block"
							src="/images/brand/edublocks.svg"
						>
					</div>
				</div>
				<div class="flex flex-wrap content-center h-full">
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

export default defineComponent({
	name: "Header",
	setup() {
		return { router, authentication };
	}
});
</script>