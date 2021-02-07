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
						/>
					</div>
				</div>
			</div>
			<div>
				<h1 class="pb-4 text-2xl font-semibold">
					My Projects
				</h1>
				<div class="w-full pb-1 overflow-x-auto">
					<div class="grid w-full grid-flow-col gap-5 auto-cols-max">
						<IconCard
							variant="Primary"
							title="Turtle Project"
							subtitle="Python 3"
						/>
					</div>
				</div>
			</div>
			<div>
				<h1 class="pb-4 text-2xl font-semibold">
					Guides
				</h1>
				<div class="w-full overflow-x-auto">
					<div class="grid w-full grid-flow-col gap-5 auto-cols-max">
						<ImageCard
							image="https://2.bp.blogspot.com/-aaurWADxbdg/WLMz556Ly5I/AAAAAAAAAUI/H9LJA--YuxA8Fuli2np57UsCtMccaSofwCLcB/w1200-h630-p-k-no-nu/edublocks.jpg"
							subtitle="Python 3"
							title="Hello"
						/>
					</div>
				</div>
			</div>
			<div>
				<h1 class="pb-4 text-2xl font-semibold">
					Community Projects
				</h1>
			</div>
		</div>
	</div>
	<CreateProjectModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { modalState } from "@/components/Modals/ModalState";
import Home from "./Home";
import { state } from "@/state";
import { platforms, Platform } from "@/platforms/platforms";
import router from "@/router/index";

export default defineComponent({
	name: "Dashboard",
	setup() {
		const view: Home = new Home();

		return { view, platforms, Platform, modalState, state, router };
	}
});
</script>
