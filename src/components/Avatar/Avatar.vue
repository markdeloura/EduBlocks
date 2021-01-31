<template>
	<div class="relative ml-3">
		<div>
			<button
				id="user-menu"
				class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-500 focus:ring-pink-500"
				aria-haspopup="true"
				@click="component.isDropdownOpen.value = !component.isDropdownOpen.value"
			>
				<img
					class="w-8 h-8 rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				>
			</button>
		</div>
		<transition
			enter-active-class="transition ease-out duration-200"
			enter-from-class="opacity-0 transform scale-95"
			enter-to-class="opacity-100 transform scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="opacity-100 transform scale-100"
			leave-to-class="opacity-0 transform scale-95"
		>
			<div
				v-if="component.isDropdownOpen.value"
				class="absolute right-0 w-48 py-1 mt-2 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5"
			>
				<div class="px-4 py-3">
					<p class="text-sm">
						Signed in as
					</p>
					<p class="text-sm font-medium text-gray-900 truncate">
						tom@example.com
					</p>
				</div>
				<div
					class="py-1 border-t"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="options-menu"
				>
					<a
						v-for="option in component.profileOptions"
						:key="option.id"
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
						@click="option.action"
					>{{ option.text }}</a>
				</div>
				<div class="py-1 border-t">
					<form
						method="POST"
						action="#"
					>
						<button
							type="submit"
							class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
							role="menuitem"
						>
							Sign out
						</button>
					</form>
				</div>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Avatar } from "./Avatar";

export default defineComponent({
	name: "Home",
	setup() {
		const component: Avatar = new Avatar();

		return { component };
	}
});
</script>