<template>
	<div
		v-if="files.fileList.value.length > 0"
		class="w-full p-4 pt-3 space-y-6"
	>
		<div class="sticky flex flex-wrap content-center mb-4 top-0.5 h-14 bg-gray-50">
			<h1 class="pt-1 text-2xl font-extrabold">
				My Projects
			</h1>
			<div class="flex ml-auto space-x-4">
				<Button
					text="Import"
					icon="document_add"
					class="text-pink-500 shadow-none h-11 hover:opacity-75"
				/>
				<Button
					text="New Project"
					icon="plus"
					variant="Primary"
					class=" h-11"
				/>
			</div>
		</div>
		<div
			class="w-full px-0 xl:px-16"
		>
			<ListItem
				v-for="file in files.fileList.value"
				:key="file"
				:item1="view.removePlatformFromFileName(file.label)"
				:item2="view.getPlatformFromFileName(file.label)"
				:item3="`${file.metadata.size.toString()} B`"
			>
				<Icon
					name="trash"
					class="w-5 h-5 text-gray-400 transition-all cursor-pointer hover:text-red-500"
					@click="view.delete(file.ref)"
				/>
				<Icon
					name="link"
					class="w-5 h-5 text-gray-400 transition-all cursor-pointer hover:text-blue-500"
				/>
				<Icon
					name="chevron-right"
					class="w-5 h-5 text-pink-500 transition-all cursor-pointer hover:text-pink-600"
				/>
			</ListItem>
		</div>
	</div>
	<div
		v-if="files.isLoading.value !== true && files.fileList.value.length < 1"
		class="flex flex-wrap content-center justify-center w-full h-full"
	>
		<div class="space-y-6">
			<div class="space-y-4">
				<div class="flex h-16 p-2 bg-white border-2 rounded-md w-96">
					<div class="mr-4 bg-blue-200 rounded-full w-11 h-11" />
					<div class="h-full py-1 space-y-1">
						<div class="w-64 h-4 bg-gray-300 rounded-full animate-pulse" />
						<div class="w-40 h-4 bg-gray-100 rounded-full animate-pulse" />
					</div>
				</div>
				<div class="flex h-16 p-2 bg-white border-2 rounded-md w-96">
					<div class="mr-4 bg-green-200 rounded-full w-11 h-11" />
					<div class="h-full py-1 space-y-1">
						<div class="w-64 h-4 bg-gray-300 rounded-full animate-pulse" />
						<div class="w-40 h-4 bg-gray-100 rounded-full animate-pulse" />
					</div>
				</div>
				<div class="flex h-16 p-2 bg-white border-2 rounded-md w-96">
					<div class="mr-4 bg-red-200 rounded-full w-11 h-11" />
					<div class="h-full py-1 space-y-1">
						<div class="w-64 h-4 bg-gray-300 rounded-full animate-pulse" />
						<div class="w-40 h-4 bg-gray-100 rounded-full animate-pulse" />
					</div>
				</div>
			</div>
			<div class="w-full space-y-2 text-center">
				<h1 class="block text-2xl font-semibold">
					No Projects Found :(
				</h1>
				<p class="text-lg text-gray-400">
					Using your EduBlocks Cloud Account, you can <br> easily save and share projects
				</p>
			</div>
			<div class="flex justify-center w-full space-x-4">
				<Button
					text="Import"
					icon="document_add"
					class="text-pink-500 shadow-none h-11 hover:opacity-75"
				/>
				<Button
					text="New Project"
					icon="plus"
					variant="Primary"
					class=" h-11"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Projects from "./Projects";
import { authentication } from "@/providers/auth";
import { files } from "@/providers/files";

export default defineComponent({
	name: "Projects",
	setup() {
		const view: Projects = new Projects();

		onMounted(() => {
			view.getFirebaseFiles();
		});

		return { view, authentication, files };
	}
});
</script>