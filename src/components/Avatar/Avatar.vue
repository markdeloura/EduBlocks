<template>
	<div
		v-if="!authentication.currentUser.value && router.currentRoute.value.path !== '/login'"
		class="flex flex-wrap content-center h-full font-bold text-pink-500 transition-all cursor-pointer hover:text-pink-600"
		@click="router.push({path: '/login'})"
	>
		<Icon
			name="login"
			class="w-6 h-6 mr-2"
		/>
		<span>Login</span>
	</div>
	<div
		v-if="authentication.currentUser.value"
		class="relative z-50 ml-3"
	>
		<div>
			<button
				class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
				@click="component.isDropdownOpen.value = !component.isDropdownOpen.value"
			>
				<img
					v-if="authentication.currentUser.value.photoURL"
					class="w-8 h-8 rounded-full"
					:src="authentication.currentUser.value.photoURL"
				>
				<span
					v-else
					class="inline-block w-8 h-8 overflow-hidden bg-gray-100 border rounded-full"
				>
					<svg
						class="w-full h-full text-gray-300"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				</span>
			</button>
		</div>
		<transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0"
		>
			<div
				v-show="component.isDropdownOpen.value"
				class="absolute right-0 z-50 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
			>
				<div class="px-4 py-3">
					<p class="text-sm">
						Signed in as
					</p>
					<p class="text-sm font-medium text-gray-900 truncate">
						{{ authentication.currentUser.value.email }}
					</p>
				</div>
				<div class="py-1 border-t">
					<button
						class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
						@click="component.signOut()"
					>
						Sign out
					</button>
				</div>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Avatar } from "./Avatar";
import { authentication } from "@/providers/auth";
import router from "@/router/index";

export default defineComponent({
	name: "Home",
	setup() {
		const component: Avatar = new Avatar();

		return { component, authentication, router };
	}
});
</script>