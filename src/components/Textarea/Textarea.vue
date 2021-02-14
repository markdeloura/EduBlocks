<template>
	<div>
		<label
			v-if="label"
			class="block text-sm font-medium text-gray-700"
		>
			{{ label }}
		</label>
		<div class="relative mt-1 rounded-md shadow-sm">
			<textarea
				:value="modelValue"
				class="block w-full border-gray-300 rounded-md appearance-none sm:text-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500"
				:placeholder="placeholder"
				:readonly="readonly"
				:rows="rows"
				@input="$emit('update:modelValue', $event.target.value)"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
 
export default defineComponent({
	name: "Textarea",
	props: {
		label: String,
		placeholder: String,
		readonly: Boolean,
		rows: Number,
		modelValue: {
			type: String,
			default: ""
		}
	},
	emits: ["update:modelValue"]
});
</script>