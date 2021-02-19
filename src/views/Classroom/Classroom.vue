<template>
	<div class="w-full h-full px-4 py-6 xl:px-8">
		<div v-if="authentication.currentUser.value">
			<PageHeading
				title="Classroom"
				sticky
			>
				<Button
					text="Join Class"
					icon="link"
					class="text-pink-500 shadow-none h-11 hover:opacity-75"
					@click="modalState.joinClassModal = true;"
				/>
				<Button
					text="New Class"
					icon="plus"
					variant="Primary"
					class="h-11"
					@click="modalState.createClassModal = true;"
				/>
			</PageHeading>
			<!-- <div v-if="view.classrooms.value">
				<ListItem
					v-for="classroom in view.classrooms.value"
					:key="classroom"
					:item1="classroom.data.name"
					:item2="classroom.data.type"
					:item3="`${classroom.data.assignments.length} Assignment(s)`"
					:icon="classroom.data.icon"
					:variant="classroom.data.color"
					@rowClick="router.push({path: `/classroom/${classroom.id}`})"
				>
					<Icon
						name="trash"
						class="w-5 h-5 text-gray-400 transition-all cursor-pointer hover:text-red-500"
					/>
					<Icon
						name="link"
						class="w-5 h-5 text-gray-400 transition-all cursor-pointer hover:text-blue-500"
					/>
					<Icon
						name="chevron-right"
						class="w-5 h-5 text-pink-500 transition-all cursor-pointer hover:text-pink-600"
					/>
				</ListItem> -->
			<ul class="bg-white border-2 divide-y rounded-md">
				<div class="flex items-center px-4 py-4">
					<div class="flex items-center flex-1 min-w-0">
						<div class="flex-shrink-0">
							<div class="w-10 h-10 bg-blue-500 rounded-full" />
						</div>
						<div class="flex-1 min-w-0 px-4 md:grid md:grid-cols-4 md:gap-4">
							<div>
								<p class="font-medium truncate text-md">
									Hello World 2.0
								</p>
							</div>
							<div class="hidden mt-1 md:block">
								<div>
									<p class="text-sm text-gray-500">
										22 Students
									</p>
								</div>
							</div>
							<div class="hidden mt-1 md:block">
								<div>
									<p class="text-sm text-gray-500">
										0 Assignments
									</p>
								</div>
							</div>
							<div class="hidden mt-1 md:block">
								<div>
									<p class="text-sm text-gray-500">
										Mrs Smith
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<Icon
							name="dots_vertical"
							class="w-5 h-5 text-pink-500"
						/>
					</div>
				</div>
			</ul>
		</div>
	</div>
	<h1>
		Please login...
	</h1>
	<JoinClassModal />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Classroom from "./Classroom";
import { modalState } from "@/components/Modals/ModalState";
import router from "@/router/index";
import { authentication } from "@/providers/auth";

export default defineComponent({
	name: "Classroom",
	setup() {
		const view: Classroom = new Classroom();

		onMounted(() => {
			if (authentication.currentUser.value) {
				view.init();
			}
		});

		return { view, modalState, router, authentication };
	}
});
</script>