<template>
	<!-- <Icon
		id="cursorpointer"
		name="cursor_click"
		class="absolute w-10 h-10 z-75"
	/> -->
	<div
		v-show="!isPortrait"
		class="w-full h-full"
	>
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
						v-if="view.state.codeSwitch"
						class="flex flex-wrap content-center justify-center h-full transition-all border-2 rounded-t-lg cursor-pointer w-28"
						:class="[view.state.view === Views.Code ? 'bg-white' : 'bg-gray-100 border-transparent opacity-30']"
						@click="view.switchView(Views.Code)"
					>
						<Icon
							name="code"
							class="w-5 h-5 mt-0.5 mr-2 -ml-1"
						/>
						Code
					</div>
				</div>
			
				<div class="ml-auto h-11 pb-2 -mt-0.5 flex space-x-4">
					<div class="space-x-4">
						<div
							v-if="files.hasSaved.value && !assignmentActive"
							class="flex flex-wrap content-center justify-center h-full px-2 font-semibold text-green-500 rounded"
						>
							<Icon
								name="check"
								class="w-5 h-5 mt-1 mr-2"
							/>					
							Saved!
						</div>
						<div
							v-if="!files.hasSaved.value && view.state.saveButton && !assignmentActive"
							class="flex flex-wrap content-center justify-center h-full px-2 font-semibold text-gray-600 transition-all rounded cursor-pointer hover:text-pink-500"
							@click="view.save()"
						>
							<i class="w-5 h-5 mr-2 -ml-1 text-lg far fa-save -mt-0.5 fa-fw" />
							Save
						</div>
					</div>
					<div
						v-if="assignmentActive"
						class="flex flex-wrap content-center justify-center h-full px-2 font-semibold text-gray-600 transition-all rounded cursor-pointer hover:text-pink-500"
						@click="this.$router.back()"
					>
						<Icon
							name="arrow_left"
							class="w-5 h-5 mt-0.5 mr-2 -ml-1"
						/>
						Back to assignment
					</div>
					<div
						v-if="assignmentActive"
						class="flex flex-wrap content-center justify-center h-full px-2 font-semibold text-gray-600 transition-all rounded cursor-pointer hover:text-pink-500"
						@click="view.createSubmission()"
					>
						<i class="w-5 h-5 mr-2 -ml-1 text-lg far fa-save -mt-0.5 fa-fw" />
						Save assignment
					</div>
					<div
						v-if="view.state.shareButton && authentication.currentUser.value && !assignmentActive"
						class="flex flex-wrap content-center justify-center h-full px-2 font-semibold text-gray-600 transition-all rounded cursor-pointer hover:text-pink-500"
						@click="view.openShare()"
					>
						<Icon
							name="share"
							class="w-5 h-5 mt-0.5 mr-2 -ml-1"
						/>
						Share
					</div>
					<div
						v-if="view.state.resetButton && !assignmentActive"
						class="flex flex-wrap content-center justify-center h-full px-2 font-semibold text-gray-600 transition-all rounded cursor-pointer hover:text-pink-500"
						@click="view.clear()"
					>
						<i class="w-5 h-5 mr-2 -ml-1 text-lg fas fa-sync -mt-0.5 fa-fw" />
						Reset
					</div>
					<div
						v-if="view.state.stopButton"
						class="flex flex-wrap content-center justify-center h-full px-4 font-semibold text-red-500 bg-red-200 border-2 border-red-400 rounded cursor-pointer"
						@click="view.stop()"
					>
						<i class="w-5 h-5 mt-1 mr-2 -ml-1 text-md fas fa-stop fa-fw" />
						Stop
					</div>
					<div
						v-if="view.state.runButton"
						class="flex flex-wrap content-center justify-center h-full px-4 font-semibold text-green-500 bg-green-100 border-2 border-green-300 rounded cursor-pointer"
						@click="view.run()"
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
					v-if="view.state.codeEditor"
					class="w-1/2 h-full overflow-x-auto bg-gray-900 rounded-md"
					:class="[view.state.view === Views.Code ? 'w-full rounded-tl-none relative' : '']"
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
				<div
					v-if="view.state.HTMLPreview"
					class="w-1/2 h-full overflow-x-auto bg-white border-2 rounded-md"
				>
					<iframe
						class="w-full h-full"
						:srcdoc="pythonCode"
					/>
				</div>
				<Trinket v-if="view.state.output" />
			</div>
		</div>
	</div>
	<SlideoverNav />
	<ShareModal />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import { Editor, Views, pythonCode, xmlCode } from "./Editor";
import { state } from "@/state";
import { codemirror } from "vue-codemirror-lite";
import { files } from "@/providers/files";
import { authentication } from "@/providers/auth";
import { isPortrait } from "@/providers/mobile";
import { assignmentActive } from "@/views/Classroom/Classroom";
import "codemirror/mode/python/python";
import "@/assets/edublocks.css";

export default defineComponent({
	name: "Editor",
	components: {
		codemirror
	},
	setup() {
		const view: Editor = new Editor();

		onMounted(() => {
			view.checkForMode();
			// document.addEventListener("mousemove", (e: MouseEvent) => {
			// 	authentication.realtime.ref("users/" + authentication.currentUser.value?.uid).set({
			// 		x: e.x,
			// 		y: e.y
			// 	});
			// });
			// authentication.realtime.ref("users/" + authentication.currentUser.value?.uid).on("value", (snapshot: firebase.default.database.DataSnapshot) => {
			// 	const cursor: HTMLElement | null = document.getElementById("cursorpointer");
			// 	if (cursor) {
			// 		cursor.style.left = snapshot.val().x;
			// 		cursor.style.top = snapshot.val().y;
			// 	}
			// });
		});

		onBeforeUnmount(() => {
			view.reset();
		});

		return { view, state, Views, pythonCode, files, xmlCode, authentication, isPortrait, assignmentActive };
	}
});
</script>