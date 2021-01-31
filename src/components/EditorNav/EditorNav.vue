<template>
	<nav class="px-4 mx-auto lg:divide-y lg:divide-gray-700 bg-navy-500">
		<div class="relative flex justify-between h-14">
			<div class="relative z-10 flex px-2 lg:px-0">
				<div class="flex items-center flex-shrink-0">
					<img
						class="block w-auto h-8 lg:hidden"
						src="/images/brand/edublocks-small.svg"
					>
					<img
						class="hidden w-auto h-8 lg:block"
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
					class="p-2 py-1 text-white transition-all border border-transparent rounded-md hover:border-white focus:border-white focus:outline-none"
					contenteditable="true"
					@input="component.onFilenameInput"
				>
					{{ state.filename }}
				</h1>
				<Icon
					v-if="state.filename"
					name="link"
					class="ml-2 text-white transition-all cursor-pointer hover:text-gray-400"
				/>
			</div>
			<div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
				<Icon
					name="home"
					class="p-1 mr-4 text-white transition-all rounded-full cursor-pointer h-7 w-7 hover:text-opacity-80 focus:outline-none"
					@click="editor.goHome()"
				/>
				<Icon
					name="sun"
					class="p-1 text-white transition-all rounded-full cursor-pointer h-7 w-7 hover:text-opacity-80 focus:outline-none"
				/>
				<Avatar />
			</div>
		</div>
	</nav>
	<div class="flex w-full px-4 h-14 bg-navy-400">
		<div class="flex items-end h-full ">
			<div class="h-12 bg-navy-500 px-6 rounded-t-md mr-4 text-white flex pt-2.5">
				<span class="flex">
					<i class="mt-1 mr-2 fas fa-columns" />
					Split
				</span>
			</div>
			<div
				class="h-12 px-6 rounded-t-md mr-4 text-white flex pt-2.5 hover:bg-white hover:bg-opacity-20 transition-all"
			>
				<span class="flex">
					<i class="mt-1 mr-2 fas fa-columns" />
					Blocks
				</span>
			</div>
			<div
				class="h-12 px-6 rounded-t-md mr-4 text-white flex pt-2.5 hover:bg-white hover:bg-opacity-20 transition-all"
			>
				<span class="flex">
					<i class="mt-1 mr-2 fab fa-python" />
					Python
				</span>
			</div>
		</div>
		<div class="flex justify-end order-2 w-64 h-full py-2 ml-auto">
			<button
				class="inline-flex items-center h-10 px-4 mr-4 text-white transition-all rounded-md bg-brand hover:bg-white hover:bg-opacity-20"
			>
				<span class="inline-flex items-center">
					<i class="mr-2 far fa-save" />
					Save
				</span>
			</button>
			<button
				class="inline-flex items-center h-10 px-4 mr-4 text-white transition-all rounded-md bg-brand hover:bg-white hover:bg-opacity-20"
			>
				<span class="inline-flex items-center">
					<i class="mr-2 far fa-folder-open" />
					Open
				</span>
			</button>
			<button
				class="inline-flex items-center h-10 px-4 transition-all bg-white rounded-md text-brand-light hover:bg-opacity-75"
			>
				<span class="inline-flex items-center">
					<Icon
						name="flag"
						class="mr-2"
					/>
					Run
				</span>
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EditorNav } from "./EditorNav";
import { state } from "@/state";
import { editor } from "@/views/Editor/Editor";

export default defineComponent({
	name: "EditorNav",
	setup() {
		const component: EditorNav = new EditorNav();

		return { component, state, editor };
	}
});
</script>