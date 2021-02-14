<template>
	<nav class="fixed top-0 z-50 w-full bg-white border-b-2">
		<div class="px-4">
			<div class="flex justify-between h-14">
				<div class="flex">
					<div class="flex items-center flex-shrink-0">
						<i
							class="z-50 mr-3 text-lg cursor-pointer fas fa-bars fa-fw"
							@click="editor.openSlideOverNav()"
						/>
						<img
							class="block w-auto h-8 xl:hidden"
							src="/images/brand/edublocks-small.svg"
						>
						<img
							class="hidden w-auto h-8 xl:block"
							src="/images/brand/edublocks.svg"
						>
					</div>
				</div>
				<div
					class="relative z-0 flex items-center justify-center flex-1 px-2 text-gray-400 sm:absolute sm:inset-0"
				>
					<span>{{ state.mode }}</span>
					<span class="mx-3">/</span>
					<h1
						class="p-2 py-1 font-semibold text-black transition-all border border-transparent rounded-md hover:border-gray-500 focus:border-gray-500 focus:outline-none"
						contenteditable="true"
						@input="component.onFilenameInput"
					>
						{{ state.filename }}
					</h1>
				</div>
				<div class="flex items-center">
					<Avatar />
				</div>
			</div>
		</div>
	</nav>
	<div class="w-full h-14" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EditorNav } from "./EditorNav";
import { state } from "@/state";
import { editor } from "@/views/Editor/Editor";
import { classroom } from "@/views/Classroom/Classroom";

export default defineComponent({
	name: "EditorNav",
	setup() {
		const component: EditorNav = new EditorNav();

		return { component, state, editor, classroom };
	}
});
</script>