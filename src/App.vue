<template>
	<component :is="this.$route.meta.layout || 'DefaultLayout'">
		<router-view />
	</component>
	
	<!-- Modals -->
	<CreateProjectModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";

export default defineComponent({
	name: "App",
	components: {
		DefaultLayout,
		BlankLayout
	}
});
</script>