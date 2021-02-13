<template>
	<div
		v-if="view.currentClassroom.value"
		class="w-full h-full px-8 py-6"
	>
		<div class="flex flex-row w-full h-full space-x-6">
			<div class="flex-1 w-full h-full">
				<PageHeading
					title="Assignments"
					sticky
				>
					<Button
						text="New"
						icon="plus"
						variant="Primary"
						class="h-11"
					/>
				</PageHeading>
			</div>
			<div class="sticky flex flex-col h-full space-y-6 w-80">
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
							class="block w-full px-4 py-2 text-sm font-medium text-center text-white transition-all bg-pink-500 border border-gray-300 rounded-md shadow-sm hover:bg-pink-600"
							@click="view.getClassroomJoinCode()"
						>
							Add Students
						</a>
						<a
							href="#"
							class="block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 transition-all bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
						>
							Delete Classroom
						</a>
					</div>
				</div>
				<div class="flex-1 w-full h-full p-6 overflow-y-hidden bg-white rounded-lg shadow">
					<h2
						class="text-base font-medium text-gray-900"
					>
						Students
					</h2>
					<div
						class="w-full mt-6 space-y-4 overflow-y-auto"
						style="height: calc(100% - 3rem)"
					>
						<ul
							class="-my-5 divide-y divide-gray-200"
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
											class="w-8 h-8 rounded-full"
											:src="student.image"
										>
									</div>
									<div class="flex-1 min-w-0">
										<p class="text-sm font-medium text-gray-900 truncate">
											{{ student.name }}
										</p>
										<p class="text-sm text-gray-500 truncate">
											{{ student.email }}
										</p>
									</div>
									<div>
										<Icon
											name="trash"
											class="w-4 h-4 transition-all cursor-pointer hover:text-red-500"
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