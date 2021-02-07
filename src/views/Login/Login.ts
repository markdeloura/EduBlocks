import { authentication } from "@/providers/auth";
import { FirebaseProviders } from "@/types";
import router from "@/router/index";
import { onMounted, watchEffect, reactive } from "vue";

class LoginState {
	public email: string = "";
	public password: string = "";
}

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

	public state: LoginState = reactive(new LoginState());

	public login(): void {
		authentication.signInUserWithEmailAndPassword(this.state.email, this.state.password);
	}

	public register(): void {
		authentication.registerUserWithEmailAndPassword(this.state.email, this.state.password);
	}
	
	public socialLogin(provider: FirebaseProviders): void {
		authentication.signInUserWithProvider(provider);
	}
}