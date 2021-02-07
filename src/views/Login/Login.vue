<template>
	<div class="flex flex-col justify-center h-full py-12 bg-gray-50 sm:px-6 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-md">
			<h2 class="text-3xl font-extrabold text-center text-gray-900">
				Sign in / Register
			</h2>
		</div>

		<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
				<form class="space-y-6">
					<div>
						<label
							for="email"
							class="block text-sm font-medium text-gray-700"
						>
							Email address
						</label>
						<div class="mt-1">
							<Input
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								required
							/>
						</div>
					</div>

					<div>
						<label
							for="password"
							class="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<div class="mt-1">
							<Input
								id="password"
								name="password"
								type="password"
								required
							/>
						</div>
					</div>

					<div class="flex space-x-4">
						<Button
							text="Sign In"
							type="button"
							variant="Primary"
							class="w-full"
							@click="view.login()"
						/>
						<Button
							text="Register"
							type="button"
							class="w-full text-pink-500 shadow-none"
							@click="view.register()"
						/>
					</div>
				</form>

				<div class="mt-6">
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center text-sm">
							<span class="px-2 text-gray-500 bg-white">
								Or continue with
							</span>
						</div>
					</div>

					<div class="grid grid-cols-3 gap-3 mt-6">
						<div>
							<a
								class="inline-flex justify-center w-full h-10 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
								@click="view.socialLogin(FirebaseProviders.Google)"
							>
								<i class="h-10 text-lg fab fa-google" />
							</a>
						</div>
						<div>
							<a
								class="inline-flex justify-center w-full h-10 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
								@click="view.socialLogin(FirebaseProviders.Microsoft)"
							>
								<i class="h-10 text-lg fab fa-microsoft" />
							</a>
						</div>
						<div>
							<a
								class="inline-flex justify-center w-full h-10 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
								@click="view.socialLogin(FirebaseProviders.Apple)"
							>
								<i class="h-10 text-lg fab fa-apple" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "./Login";
import { FirebaseProviders } from "@/types";

export default defineComponent({	
	name: "Showcase",
	setup() {
		const view: Login = new Login();

		view.init();

		return { view, FirebaseProviders };
	}
});
</script>