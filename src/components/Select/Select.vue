<template>
	<div>
		<label
			for="email"
			class="block text-sm font-medium text-gray-700"
		>
			{{ label }}
		</label>
		<div class="relative mt-1 rounded-md shadow-sm">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<img
					v-if="image"
					:src="image"
					class="w-5 bg-center bg-no-repeat bg-contain"
				>
				<Icon
					v-if="icon"
					:name="icon"
					class="w-5 h-5 text-gray-400"
				/>
			</div>
			<select
				class="block w-full border-gray-300 appearance-none sm:text-sm rounded-md focus:border-pink-500 focus:outline-none focus:ring-pink-500"
				:class="[icon || image ? 'pl-10' : '']"
				@change="$emit('update:modelValue', $event.target.value)"
			>
				<option
					v-for="option in options"
					:key="option"
				>
					{{ option.title }}
				</option>
			</select>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Select",
	props: {
		icon: String,
		image: String,
		label: String,
		options: Object,
		modelValue: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue"]
});
</script>