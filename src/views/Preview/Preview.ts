import router from "@/router/index";

export default class Preview {
	public setHTML(): void {
		if (router.currentRoute.value.query.html) { 
			document.querySelector("html")?.remove();
			document.write(decodeURI(router.currentRoute.value.query.html.toString()));
		}
	}
}