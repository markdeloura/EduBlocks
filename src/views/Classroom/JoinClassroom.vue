<template>
	<div class="flex flex-wrap content-center justify-center w-screen h-screen bg-gray-100">
		<div
			v-if="!view.joinError.value"
			class="flex flex-wrap content-center justify-center w-full h-full"
		>
			<div class="flex flex-wrap content-center justify-center text-pink-500 bg-pink-100 rounded-full w-52 h-52">
				<Icon
					name="clock"
					class="w-32 h-32"
				/>
			</div>
			<h1 class="w-full mt-6 text-3xl font-bold text-center text-gray-700">
				Joining Classroom...
			</h1>
		</div>
		<div
			v-else
			class="flex flex-wrap content-center justify-center w-full h-full"
		>
			<div class="flex flex-wrap content-center justify-center text-red-500 bg-red-100 rounded-full w-52 h-52">
				<Icon
					name="x"
					class="w-32 h-32"
				/>
			</div>
			<h1 class="w-full mt-6 text-2xl font-bold text-center text-gray-700">
				Sorry! An error occured.
			</h1>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Classroom from "./Classroom";
import router from "@/router/index";
 
export default defineComponent({
	name: "JoinClassroom",
	setup() {
		const view: Classroom = new Classroom();

		view.addStudentToClass(router.currentRoute.value.params.classID.toString());

		return { view };
	}
});
</script>