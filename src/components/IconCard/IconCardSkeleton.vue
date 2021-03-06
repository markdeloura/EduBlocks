<template>
	<div class="flex flex-col overflow-hidden transition-all bg-white border-2 rounded-lg w-60 animate-pulse">
		<div class="flex-grow px-3 py-5">
			<div class="flex items-center">
				<div class="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-md" />
				<div class="flex-1 w-0 ml-5 space-y-2">
					<dd class="flex items-baseline">
						<div class="text-lg font-semibold text-gray-900 truncate">
							<div class="w-56 h-4 bg-gray-300" />
						</div>
					</dd>
					<dt class="text-sm font-medium text-gray-500 truncate">
						<div class="w-1/2 h-4 bg-gray-200" />
					</dt>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "IconCardSkeleton",
});
</script>