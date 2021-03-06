<template>
	<div
		v-if="view.currentClassroom.value"
		class="flex w-full h-full px-4 py-6 xl:px-8"
	>
		<div class="flex flex-row w-full h-full space-x-6">
			<div class="flex flex-col flex-1 w-full h-full">
				<PageHeading
					title="Assignments"
					sticky
				>
					<Button
						v-if="view.isUserAdmin()"
						text="New"
						icon="plus"
						variant="Primary"
						class="h-11"
						@click="modalState.createAssignmentModal = true"
					/>
					<div
						v-if="!view.isUserAdmin()"
						class="h-11"
					/>
				</PageHeading>
				<div v-if="view.currentClassroomAssignments.value.length > 0 && !view.isLoading.value">
					<ul
						class="bg-white border divide-y rounded-md"
					>
						<ListItem
							v-for="(assignment, index) in view.currentClassroomAssignments.value"
							:key="assignment"
							icon="python"
							variant="Green"
							:item1="assignment.data.title"
							item2="Not Submitted"
							:item3="`Due: ${assignment.data.due.replace('T', ' @ ')}`"
							:dropdown-options="view.getAssignmentDropdownOptions(index)"
							@rowClick="view.goToAssignment(index)"
						/>
					</ul>
				</div>
				<div
					v-else
					class="flex flex-wrap content-center justify-center w-full h-full"
				>
					<div class="flex flex-wrap justify-center space-y-8">
						<img
							src="/images/illustrations/no-assignments.svg"
							class="h-48"
						>
						<div class="w-full space-y-2 text-center">
							<h1 class="block text-2xl font-semibold">
								No Assignments
							</h1>
							<p class="text-lg text-gray-400">
								There's currently no assignments in this classroom. 
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="sticky flex flex-col w-64 h-full space-y-6 xl:w-80">
				<div class="flex-none w-full p-6 bg-white rounded-lg shadow">
					<h2
						class="text-base font-medium text-gray-900"
					>
						Details
					</h2>
					<div class="flow-root mt-6">
						<div class="-my-4">
							<div class="flex items-center py-4 space-x-3">
								<div class="flex-shrink-0">
									<div
										class="flex flex-wrap content-center justify-center w-12 h-12 text-blue-500 bg-blue-200 rounded-full"
									>
										<Icon
											name="python"
											class="w-6 h-6"
											is-filled
										/>
									</div>
								</div>
								<div class="flex-1 min-w-0 leading-5">
									<p class="font-medium text-gray-900">
										{{ view.currentClassroom.value.data.name }}
									</p>
									<p class="text-gray-500">
										{{ view.currentClassroom.value.data.type }}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-6 space-y-4">
						<a
							v-if="view.isUserAdmin()"
							class="block w-full px-4 py-2 text-sm font-medium text-center text-white transition-all bg-pink-500 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-pink-600"
							@click="view.getClassroomJoinCode()"
						>
							Add Students
						</a>
						<a
							v-if="!view.isUserAdmin()"
							class="block w-full px-4 py-2 text-sm font-medium text-center text-white transition-all bg-pink-500 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-pink-600"
							@click="view.leaveClassroom()"
						>
							Leave Classroom
						</a>
						<a
							v-if="view.isUserAdmin()"
							class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 transition-all bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
							@click="view.deleteClassroom()"
						>
							Delete Classroom
						</a>
					</div>
				</div>
				<div class="flex-1 w-full h-full p-6 overflow-y-hidden bg-white rounded-lg shadow">
					<h2
						v-if="view.isUserAdmin()"
						class="text-base font-medium text-gray-900"
					>
						Students ({{ view.currentClassroomStudents.value.length }})
					</h2>
					<h2
						v-if="!view.isUserAdmin()"
						class="text-base font-medium text-gray-900"
					>
						Classmates ({{ view.currentClassroomStudents.value.length }})
					</h2>
					<div
						class="w-full mt-6 space-y-4 overflow-y-auto"
						style="height: calc(100% - 3rem)"
					>
						<ul
							class="-my-3 divide-y divide-gray-200"
						>
							<li
								v-for="student in view.currentClassroomStudents.value"
								:key="student"
								class="py-4"
							>
								<div
									v-if="student"
									class="flex items-center space-x-4"
								>
									<div class="flex-shrink-0">
										<img
											class="object-cover w-8 h-8 rounded-full"
											:src="student.image"
										>
									</div>
									<div class="flex-1 min-w-0">
										<p class="text-sm font-medium text-gray-900 truncate">
											{{ student.name }}
										</p>
										<p
											v-if="view.isUserAdmin()"
											class="text-sm text-gray-500 truncate"
										>
											{{ student.email }}
										</p>
									</div>
									<div v-if="view.isUserAdmin()">
										<Icon
											name="trash"
											class="w-4 h-4 transition-all cursor-pointer hover:text-red-500"
											@click="view.removeStudentFromClass(student.uid)"
										/>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<AddToClassModal :code="view.currentJoinCode.value" />
	<CreateAssignmentModal />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Classroom from "./Classroom";
import router from "@/router/index";
import { modalState } from "@/components/Modals/ModalState";
 
export default defineComponent({
	name: "ClassroomDetail",
	setup() {
		const view: Classroom = new Classroom();

		onMounted(() => {
			view.getClassroom(router.currentRoute.value.params.classID.toString());
		});

		return { view, router, modalState };
	}
});
</script>