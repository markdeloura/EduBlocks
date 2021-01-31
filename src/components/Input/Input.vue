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
				<Icon
					v-if="icon"
					:name="icon"
					class="w-5 h-5 text-gray-400"
				/>
			</div>
			<input
				:type="type"
				class="block w-full border-gray-300 appearance-none sm:text-sm rounded-md focus:border-pink-500 focus:outline-none focus:ring-pink-500"
				:class="[icon ? 'pl-10' : '']"
				:placeholder="placeholder"
				@input="$emit('update:modelValue', $event.target.value)"
			>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Input",
	props: {
		type: {
			type: String,
			default: "text"
		},
		icon: String,
		label: String,
		placeholder: String,
		modelValue: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue"]
});
</script>