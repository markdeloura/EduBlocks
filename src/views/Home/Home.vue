<template>
	<div class="w-full h-full px-4 py-6 space-y-6 xl:px-8">
		<div>
			<PageHeading
				title="Create New Project"
				class="mb-4"
			>
				<Button
					text="New Project"
					icon="plus"
					variant="Primary"
					class="h-11"
					@click="modalState.createProjectModal = true"
				/>
			</PageHeading>
			<div class="w-full pb-1 overflow-x-auto">
				<div class="grid w-full h-20 grid-flow-col gap-5 auto-cols-max">
					<SelectCard
						v-for="platform in platforms"
						:key="platform"
						:image="platform.image"
						:tile-class="platform.color"
						:text="platform.title"
						@click="view.createNewProjectWithPlatform(platform.title)"
					/>
				</div>
			</div>
		</div>
		<div v-if="files.fileList.value.length >= 1">
			<PageHeading
				title="Recent Projects"
				class="mb-4"
			/>
			<div class="w-full pb-1 overflow-x-auto">
				<div class="grid w-full grid-flow-col gap-5 auto-cols-max">
					<IconCard
						v-for="file in files.fileList.value.slice(0, 4)"
						:key="file"
						:icon="projects.getPlatformIconFromFileName(file.label)"
						:variant="projects.getPlatformVariantFromFileName(file.label)"
						:title="projects.removePlatformFromFileName(file.label)"
						:subtitle="projects.getPlatformFromFileName(file.label)"
						@click="files.openFirebaseFile(file)"
					/>
				</div>
			</div>
		</div>
		<div>
			<PageHeading
				title="Guides"
				class="mb-4"
			/>
			<div class="w-full pb-1 overflow-x-auto">
				<div class="grid w-full grid-flow-col gap-5 auto-cols-max">
					<ImageCard
						image="https://2.bp.blogspot.com/-aaurWADxbdg/WLMz556Ly5I/AAAAAAAAAUI/H9LJA--YuxA8Fuli2np57UsCtMccaSofwCLcB/w1200-h630-p-k-no-nu/edublocks.jpg"
						subtitle="Raspberry Pi"
						title="Code with Minecraft"
					/>
				</div>
			</div>
		</div>
		<div>
			<PageHeading
				title="Showcase"
				class="mb-4"
			/>
			<div class="w-full pb-1 overflow-x-auto">
				<div class="grid w-full grid-flow-col gap-5 auto-cols-max">
					<ImageCard
						image="https://2.bp.blogspot.com/-aaurWADxbdg/WLMz556Ly5I/AAAAAAAAAUI/H9LJA--YuxA8Fuli2np57UsCtMccaSofwCLcB/w1200-h630-p-k-no-nu/edublocks.jpg"
						subtitle="Raspberry Pi"
						title="Code with Minecraft"
					/>
				</div>
			</div>
		</div>
	</div>
	<CreateProjectModal />
</template>

<script lang="ts">
import { defineComponent, onMounted, watchEffect } from "vue";
import { modalState } from "@/components/Modals/ModalState";
import Home from "./Home";
import { platforms } from "@/platforms/platforms";
import { projects } from "@/views/Projects/Projects";
import { files } from "@/providers/files";
import { authentication } from "@/providers/auth";

export default defineComponent({
	name: "Dashboard",
	setup() {
		const view: Home = new Home();

		onMounted(() => {
			files.getAllFilesFromFirebase();
		});

		watchEffect(() => {
			if (!authentication.currentUser.value) {
				files.fileList.value = [];
			}
		});

		return { view, platforms, modalState, projects, files, authentication };
	}
});
</script>
