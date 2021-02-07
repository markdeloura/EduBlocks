export interface Data {
	[key: string]: unknown;
} 

export interface FirebaseConfig {
	apiKey: string;
	authDomain: string;
	databaseURL: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
}

export enum FirebaseProviders {
	Google = "Google",
	Apple = "Apple",
	Microsoft = "Microsoft"
}