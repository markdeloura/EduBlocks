import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { FirebaseConfig, FirebaseProviders } from "@/types";
import router from "@/router/index";
import { ref, Ref } from "vue";

const firebaseConfig: FirebaseConfig = {
	apiKey: process.env.VUE_APP_API_KEY,
	authDomain: process.env.VUE_APP_AUTH_DOMAIN,
	databaseURL: process.env.VUE_APP_DATABASE_URL,
	projectId: process.env.VUE_APP_PROJECT_ID,
	storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
	appId: process.env.VUE_APP_APP_ID,
	measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

firebase.default.initializeApp(firebaseConfig);

class Authentication {
	public auth: firebase.default.auth.Auth = firebase.default.auth();

	public db: firebase.default.firestore.Firestore = firebase.default.firestore();

	public currentUser: Ref<firebase.default.User | null> = ref(this.auth.currentUser);

	public signInUserWithEmailAndPassword(email: string, password: string): void {
		this.auth.signInWithEmailAndPassword(email, password)
			.then(() => {
				router.push({ path: "/" });
			})
			.catch((error: Error) => {
				console.log(error);
			});
	}

	public registerUserWithEmailAndPassword(email: string, password: string): void {
		this.auth.createUserWithEmailAndPassword(email, password)
			.then(() => {
				router.push({ path: "/" });
			})
			.catch((error: Error) => {
				console.log(error);
			});
	}

	public signInUserWithProvider(provider: FirebaseProviders): void {
		let signInProvider: any;
		switch (provider) {
			case FirebaseProviders.Google:
				signInProvider = new firebase.default.auth.GoogleAuthProvider();
				break;
			case FirebaseProviders.Microsoft:
				signInProvider = new firebase.default.auth.OAuthProvider("microsoft.com");
				break;
			case FirebaseProviders.Apple:
				signInProvider = new firebase.default.auth.OAuthProvider("apple.com");
				break;
		}
		this.auth.signInWithPopup(signInProvider).then(() => {
			router.push({ path: "/" });
		});
	}

	public signOut(): void {
		this.auth.signOut().then(() => {
			this.currentUser.value = null;
		});
	}
}

export const authentication: Authentication = new Authentication();

authentication.auth.onAuthStateChanged((user: firebase.default.User | null) => {
	if (user) { 
		authentication.currentUser.value = user;
	}
});