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
					variant="Light"
					@click="modalState.joinClassModal = true;"
				/>
				<Button
					text="New Class"
					icon="plus"
					variant="Primary"
					@click="modalState.createClassModal = true;"
				/>
			</PageHeading>
			<div>
				<ul
					v-if="!view.isLoading.value && view.classrooms.value.length > 0"
					class="bg-white border divide-y rounded-md"
				>
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
				<ul
					v-if="view.isLoading.value"
					class="bg-white border divide-y rounded-md"
				>
					<ListItemSkeleton
						v-for="n in 5"
						:key="n"
					/>
				</ul>
			</div>
		</div>
		<div
			v-else
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
						Create a free EduBlocks Cloud Account, to <br> join and create classrooms.
					</p>
				</div>
				<div class="flex justify-center w-full space-x-4">
					<Button
						text="Login/Register"
						icon="login"
						variant="Primary"
						@click="router.push({path: '/login'})"
					/>
				</div>
			</div>
		</div>
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