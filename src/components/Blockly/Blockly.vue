<template>
	<div
		ref="blocklyDiv"
		:class="size"
		class="w-full h-full overflow-hidden rounded rounded-tl-none blocklyDiv"
	/>
	<xml
		ref="blocklyToolbox"
		style="display:none"
	>
		<slot />
	</xml>
</template>

<script>
import { defineComponent } from "vue";
import { blocklyDiv } from "@/views/Editor/Editor";
import { editor } from "@/views/Editor/Editor.ts";

export default defineComponent({
	name: "BlocklyComponent",
	props: {
		size: String
	},
	setup() {
		return { blocklyDiv };
	},
	data() {
		return {
			workspace: null
		};
	},
	mounted() {
		// eslint-disable-next-line @typescript-eslint/typedef
		const options = this.$props.options || {};
		if (!options.toolbox) {
			options.toolbox = this.$refs["blocklyToolbox"];
		}
		this.workspace = editor.loadBlockly();
	}
});
</script>

<style lang="postcss">
.blocklyFlyoutLabelText {
  fill: white;
}

.blocklyMainBackground {
  stroke-width: 0 !important;
}
</style>
