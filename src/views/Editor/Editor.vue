<template>
	<EditorNav />
	<Blockly />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { editor } from "./Editor";
import { state } from "@/state";
import EditorNav from "@/components/EditorNav/EditorNav.vue";
import Blockly from "@/components/Blockly/Blockly.vue";

export default defineComponent({
	name: "Editor",
	components: {
		EditorNav,
		Blockly
	},
	setup() {
		return { editor, state };
	}
});
</script>