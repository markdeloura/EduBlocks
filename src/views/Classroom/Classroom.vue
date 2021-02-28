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
			<div v-if="view.classrooms.value">
				<ul class="bg-white border divide-y rounded-md">
					<ListItem
						v-for="classroom in view.classrooms.value"
						:key="classroom"
						:item1="classroom.data.name"
						:item2="classroom.data.type"
						:item3="`${classroom.data.students.length} Students`"
						:item4="`${classroom.data.assignments.length} Assignments`"
						:icon="classroom.data.icon"
						:variant="classroom.data.color"
						:dropdown-options="view.getDropdownOptions(classroom)"
						@rowClick="router.push({path: `/classroom/${classroom.id}`})"
					/>
				</ul>
			</div>
		</div>
		<h1 v-else>
			Please login...
		</h1>
		<JoinClassModal />
	</div>
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