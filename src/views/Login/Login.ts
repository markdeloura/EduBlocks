import { authentication } from "@/providers/auth";
import { FirebaseProviders } from "@/types";
import router from "@/router/index";
import { onMounted, watchEffect } from "vue";

export default class Login {
	public init(): void {
		onMounted(() => {
			watchEffect(() => {
				if (authentication.currentUser.value) {
					router.push({path: "/"});
				}
			});
		});
	}

	public login(): void {
		authentication.signInUserWithEmailAndPassword("hello@example.com", "password");
	}

	public register(): void {
		authentication.registerUserWithEmailAndPassword("hello@example.com", "password");
	}
	
	public socialLogin(provider: FirebaseProviders): void {
		authentication.signInUserWithProvider(provider);
	}
}