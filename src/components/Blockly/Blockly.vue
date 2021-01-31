<template>
	<div class="fullBlockly">
		<div
			ref="blocklyDiv"
			class="blocklyDiv"
		/>
		<xml
			ref="blocklyToolbox"
			style="display:none"
		>
			<slot />
		</xml>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import { blocklyDiv } from "@/views/Editor/Editor";
import { editor } from "@/views/Editor/Editor.ts";

export default defineComponent({
	name: "BlocklyComponent",
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
.blocklyDiv {
  width: 100%;
  height: calc(100vh - 7rem);
  overflow: hidden;
}

.blocklyFlyoutLabelText {
  fill: white;
}

.blocklyMainBackground {
  stroke-width: 0 !important;
}

.splitBlockly {
  width: 60%;
}

.fullBlockly {
  width: 60%;
}
</style>
