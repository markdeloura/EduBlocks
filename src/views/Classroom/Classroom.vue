<template>
	<div class="px-8 py-6">
		<PageHeading
			title="Classroom"
			sticky
		>
			<Button
				text="Join Class"
				icon="link"
				class="text-pink-500 shadow-none h-11 hover:opacity-75"
			/>
			<Button
				text="New Class"
				icon="plus"
				variant="Primary"
				class="h-11"
				@click="modalState.createClassModal = true;"
			/>
		</PageHeading>
		<div v-if="view.classrooms.value">
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
			</ListItem>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Classroom from "./Classroom";
import { modalState } from "@/components/Modals/ModalState";
import router from "@/router/index";

export default defineComponent({
	name: "Classroom",
	setup() {
		const view: Classroom = new Classroom();

		onMounted(() => {
			view.init();
		});

		return { view, modalState, router };
	}
});
</script>