<template>
	<div class="flex flex-col overflow-hidden transition-all bg-white border-2 rounded-lg cursor-pointer w-60 hover:border-pink-500">
		<div class="flex-grow px-3 py-5">
			<div class="flex items-center">
				<div
					class="flex-shrink-0 p-3 rounded-md"
					:class="component.getVariant()"
				>
					<Icon
						:name="icon"
						class="w-6 h-6 fill-current"
						is-filled="true"
					/>
				</div>
				<div class="flex-1 w-0 ml-5">
					<dd class="flex items-baseline">
						<div class="text-lg font-semibold text-gray-900 truncate">
							{{ title }}
						</div>
					</dd>
					<dt class="text-sm font-medium text-gray-500 truncate">
						{{ subtitle }}
					</dt>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Data } from "@/types";
import { IconCard } from "./IconCard";

export default defineComponent({
	name: "IconCard",
	props: {
		variant: String,
		title: String,
		subtitle: String,
		icon: String
	},
	setup(props: Data) {
		const component: IconCard = new IconCard(props);

		return { component };
	}
});
</script>