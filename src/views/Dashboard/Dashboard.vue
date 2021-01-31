<template>
	<div class="h-full mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="flex flex-col px-4 py-10 pb-8 sm:items-center sm:flex-row sm:px-0">
			<h1 class="text-3xl font-bold leading-tight">
				Welcome to <span class="text-pink-500">EduBlocks</span>
			</h1>
			<Button
				class="py-3 mt-8 shadow-lg sm:ml-auto sm:mt-0"
				variant="Primary"
				text="New Project"
				icon="plus"
				@click="modalState.createProjectModal = true"
			/>
		</div>
		<div class="px-4 sm:px-0">
			<div class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<SelectCard
					v-for="platform in platforms"
					:key="platform.id"
					:image="platform.image"
					:class="[state.mode === platform.title ? 'border-pink-500' : 'cursor-pointer hover:border-gray-400']"
					@click="state.mode = platform.title"
				/>
			</div>
			<div class="flex flex-col w-full mt-8 lg:flex-row">
				<div class="w-full h-full mr-8 lg:w-1/2">
					<h1 class="mb-4 text-2xl font-semibold">
						Guides
					</h1>
					<div class="flex space-x-4">
						<ImageCard
							category="Python 3"
							title="Make art with Python & Turtle"
							image="https://edublocks.org/learnimages/turtle-spiral.png"
						/>
						<ImageCard
							category="Python 3"
							title="Intro to Data Science with Python"
							image="https://edublocks.org/learnimages/create-a-graph.png"
						/>
						<ImageCard
							category="Python 3"
							title="Happy Birthday Song"
							image="https://edublocks.org/learnimages/happy-birthday.png"
						/>
					</div>
				</div>
				<div class="w-full h-full mt-8 lg:w-1/2 lg:mt-0">
					<h1 class="mb-3 text-2xl font-semibold">
						Projects
					</h1>
					<div class="h-56 mb-8 overflow-scroll overflow-x-visible lg:mb-0">
						<div class="mt-6 flow-root">
							<ul class="-my-5">
								<ListItem
									title="Lesson 1 - Hello World Project"
									:subtitle="Platform.Python"
									:variant="Platform.Python"
									image="/images/platforms/python.png"
								/>
								<ListItem
									title="Lesson 1 - Hello World Project"
									:subtitle="Platform.MicroBit"
									:variant="Platform.MicroBit"
									image="/images/platforms/python.png"
								/>
								<ListItem
									title="Lesson 1 - Hello World Project"
									:subtitle="Platform.RaspberryPi"
									:variant="Platform.RaspberryPi"
									image="/images/platforms/python.png"
								/>
								<ListItem
									title="Lesson 1 - Hello World Project"
									:subtitle="Platform.CircuitPython"
									:variant="Platform.CircuitPython"
									image="/images/platforms/python.png"
								/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<CreateProjectModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button/Button.vue";
import SelectCard from "@/components/SelectCard/SelectCard.vue";
import ImageCard from "@/components/ImageCard/ImageCard.vue";
import ListItem from "@/components/ListItem/ListItem.vue";
import CreateProjectModal from "@/components/Modals/CreateProjectModal/CreateProjectModal.vue";
import { modalState } from "@/components/Modals/ModalState";
import Dashboard from "./Dashboard";
import { state } from "@/state";
import { platforms, Platform } from "@/platforms/platforms";

export default defineComponent({
	name: "Dashboard",
	components: {
		Button,
		SelectCard,
		ImageCard,
		ListItem,
		CreateProjectModal
	},
	setup() {
		const view: Dashboard = new Dashboard();

		return { view, platforms, Platform, modalState, state };
	}
});
</script>
