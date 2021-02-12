<template>
	<span>{{ view.currentClassroom.value }}</span>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Classroom from "./Classroom";
import router from "@/router/index";
 
export default defineComponent({
	name: "ClassroomDetail",
	setup() {
		const view: Classroom = new Classroom();

		onMounted(() => {
			view.getClassroom(router.currentRoute.value.params.classID.toString());
		});

		return { view, router };
	}
});
</script>