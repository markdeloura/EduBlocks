<template>
	<div
		v-if="authentication.currentUser.value"
		class="flex flex-col w-full h-full px-4 py-6 xl:px-8"
	>
		<PageHeading
			title="My Projects"
			sticky
		>
			<Button
				text="Import"
				icon="document_add"
				variant="Light"
				@click="files.importFile()"
			/>
			<Button
				text="New Project"
				icon="plus"
				variant="Primary"
				@click="modalState.createProjectModal = true"
			/>
		</PageHeading>
		<div class="pb-6">
			<ul
				v-if="!files.isLoading.value && files.fileList.value.length > 0"
				class="bg-white border divide-y rounded-md"
			>
				<ListItem
					v-for="file in files.fileList.value.slice(0, 8)"
					:key="file"
					:item1="view.removePlatformFromFileName(file.label)"
					:item2="view.getPlatformFromFileName(file.label)"
					:item3="`${file.metadata.size.toString()} Bytes`"
					:item4="file.metadata.contentType"
					:icon="view.getPlatformIconFromFileName(file.label)"
					:variant="view.getPlatformVariantFromFileName(file.label)"
					:dropdown-options="view.getDropdownOptions(file)"
					@rowClick="files.openFirebaseFile(file)"
				/>
			</ul>
			<ul
				v-if="files.isLoading.value"
				class="bg-white border divide-y rounded-md"
			>
				<ListItemSkeleton
					v-for="n in 5"
					:key="n"
				/>
			</ul>
		</div>
		<div
			v-if="!files.isLoading.value && files.fileList.value.length < 1 && authentication.currentUser.value"
			class="flex flex-wrap content-center justify-center w-full h-full"
		>
			<div class="flex flex-wrap justify-center space-y-8">
				<img
					src="/images/illustrations/no-files.svg"
					class="h-48"
				>
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
						variant="Light"
						@click="files.importFile()"
					/>
					<Button
						text="New Project"
						icon="plus"
						variant="Primary"
						@click="modalState.createProjectModal = true"
					/>
				</div>
			</div>
		</div>
	</div>
	<div
		v-if="!authentication.currentUser.value"
		class="flex flex-wrap content-center justify-center w-full h-full"
	>
		<div class="flex flex-wrap justify-center space-y-8">
			<img
				src="/images/illustrations/login.svg"
				class="h-48"
			>
			<div class="w-full space-y-2 text-center">
				<h1 class="block text-2xl font-semibold">
					Sorry! You need an account
				</h1>
				<p class="text-lg text-gray-400">
					Create a free EduBlocks Cloud Account to easily save <br> and share projects
				</p>
			</div>
			<div class="flex justify-center w-full space-x-4">
				<Button
					text="Open Local File"
					icon="document_add"
					variant="Light"
					@click="files.importFile()"
				/>
				<Button
					text="Login/Register"
					icon="login"
					variant="Primary"
					@click="view.goToLoginPage()"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watchEffect } from "vue";
import Projects from "./Projects";
import { authentication } from "@/providers/auth";
import { modalState } from "@/components/Modals/ModalState";
import { files } from "@/providers/files";

export default defineComponent({
	name: "Projects",
	setup() {
		const view: Projects = new Projects();

		onMounted(() => {
			view.getFirebaseFiles();
		});

		watchEffect(() => {
			if (!authentication.currentUser.value) {
				files.fileList.value = [];
			}
		});

		return { view, authentication, files, modalState };
	}
});
</script>