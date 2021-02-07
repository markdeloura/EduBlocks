<template>
	<EditorNav v-if="view.state.nav" />
	<div class="w-full h-full px-4 py-2.5 bg-gray-100">
		<div
			v-if="view.state.toolbar"
			class="flex w-full h-10"
		>
			<div class="fixed flex space-x-2 h-11">
				<div
					v-if="view.state.splitSwitch"
					class="flex flex-wrap content-center justify-center h-full transition-all border-2 rounded-t-lg cursor-pointer w-28"
					:class="[view.state.view === Views.Split ? 'bg-white' : 'bg-gray-100 border-transparent opacity-30']"
					@click="view.switchView(Views.Split)"
				>
					<Icon
						name="template"
						class="w-5 h-5 mt-0.5 mr-2 -ml-1"
					/>
					Split
				</div>
				<div
					v-if="view.state.blocksSwitch"
					class="flex flex-wrap content-center justify-center h-full transition-all border-2 rounded-t-lg cursor-pointer w-28"
					:class="[view.state.view === Views.Blocks ? 'bg-white' : 'bg-gray-100 border-transparent opacity-30']"
					@click="view.switchView(Views.Blocks)"
				>
					<Icon
						name="puzzle"
						class="w-5 h-5 mt-0.5 mr-2 -ml-1"
					/>
					Blocks
				</div>
				<div
					v-if="view.state.pythonSwitch"
					class="flex flex-wrap content-center justify-center h-full transition-all border-2 rounded-t-lg cursor-pointer w-28"
					:class="[view.state.view === Views.Python ? 'bg-white' : 'bg-gray-100 border-transparent opacity-30']"
					@click="view.switchView(Views.Python)"
				>
					<Icon
						name="code"
						class="w-5 h-5 mt-0.5 mr-2 -ml-1"
					/>
					Python
				</div>
			</div>
			
			<div class="ml-auto h-11 pb-2 -mt-0.5 flex space-x-4">
				<div
					v-if="view.state.saveButton"
					class="flex flex-wrap content-center justify-center h-full px-2 font-semibold text-pink-500 rounded cursor-pointer"
				>
					<i class="w-5 h-5 mr-2 -ml-1 text-lg far fa-save -mt-0.5 fa-fw" />
					Save
				</div>
				<div
					v-if="view.state.shareButton"
					class="flex flex-wrap content-center justify-center h-full px-2 font-semibold text-pink-500 rounded cursor-pointer"
				>
					<Icon
						name="share"
						
						class="w-5 h-5 mr-2 -ml-1 pt-0.5"
					/>
					Share
				</div>
				<div
					v-if="view.state.runButton"
					class="flex flex-wrap content-center justify-center h-full px-4 font-semibold text-green-500 bg-green-100 border-2 border-green-300 rounded cursor-pointer"
				>
					<i class="w-5 h-5 mt-1 mr-2 -ml-1 text-md fas fa-play fa-fw" />
					Run
				</div>
			</div>
		</div>
		<div
			class="flex w-full space-x-4"
			style="height: calc(100% - 2.5rem)"
		>
			<div
				v-show="view.state.blockly"
				class="w-full h-full bg-white border-2 rounded-md rounded-tl-none"
			>
				<Blockly />
			</div>
			<div
				v-if="view.state.pythonEditor"
				class="w-3/6 h-full bg-gray-900 rounded-md"
				:class="[view.state.view === Views.Python ? 'w-full rounded-tl-none relative' : 'w-3/6 ']"
			>
				<codemirror
					:value="pythonCode"
					:options="{
						mode: 'python',
						lineNumbers: true,
						theme: 'edublocks',
					}"
					class="w-full h-full rounded"
				/>
			</div>
		</div>
	</div>
	<SlideoverNav />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Editor, Views, pythonCode } from "./Editor";
import { state } from "@/state";
import { codemirror } from "vue-codemirror-lite";
import "codemirror/mode/python/python";
import "@/assets/edublocks.css";

export default defineComponent({
	name: "Editor",
	components: {
		codemirror
	},
	setup() {
		const view: Editor = new Editor();

		return { view, state, Views, pythonCode };
	}
});
</script>