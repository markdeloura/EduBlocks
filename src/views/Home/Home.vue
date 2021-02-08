<template>
	<div>
		<div class="w-full p-4 pt-3 space-y-6">
			<div>
				<div class="flex flex-wrap content-center mb-4 h-14">
					<h1 class="pt-1 text-2xl font-semibold">
						Create a new project...
					</h1>
					<Button
						text="New Project"
						icon="plus"
						variant="Primary"
						class="ml-auto h-11"
						@click="modalState.createProjectModal = true"
					/>
				</div>
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
			<div v-if="files.fileList.value.length > 1">
				<div
					class="pb-4 text-2xl font-semibold"
				>
					<span
						class="cursor-pointer hover:opacity-75"
						@click="view.navigateToRoute('/projects')"
					>
						Recent Projects
					</span>
				</div>
				<div class="w-full pb-1 overflow-x-auto">
					<div class="grid w-full grid-flow-col gap-5 auto-cols-max">
						<IconCard
							v-for="file in files.fileList.value.slice(0, 4)"
							:key="file"
							:icon="projects.getPlatformIconFromFileName(file.label)"
							:variant="projects.getPlatformVariantFromFileName(file.label)"
							:title="projects.removePlatformFromFileName(file.label)"
							:subtitle="projects.getPlatformFromFileName(file.label)"
						/>
					</div>
				</div>
			</div>
			<div>
				<div class="pb-4 text-2xl font-semibold">
					<span
						class="cursor-pointer hover:opacity-75"
						@click="view.navigateToRoute('/guides')"
					>
						Guides
					</span>
				</div>
				<div class="w-full overflow-x-auto">
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
				<div class="pb-4 text-2xl font-semibold">
					<span
						class="cursor-pointer hover:opacity-75"
						@click="view.navigateToRoute('/showcase')"
					>
						Community Projects
					</span>
				</div>
				<div class="w-full overflow-x-auto">
					<div class="grid w-full grid-flow-col gap-5 auto-cols-max">
						<ImageCard
							image="https://edublocks.org/learnimages/turtle-spiral.png"
							subtitle="Python 3"
							title="Multicoloured Spiral"
						/>
					</div>
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
