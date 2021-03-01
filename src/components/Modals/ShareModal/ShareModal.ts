import { modalState } from "@/components/Modals/ModalState";
import { editor, pythonCode } from "@/views/Editor/Editor";
import { files } from "@/providers/files";
import { authentication } from "@/providers/auth";
import { ref, Ref } from "vue";

/**
 * Main class for Share Modal
 */
export class ShareModal {
	public currentTab: Ref = ref(1);
	public shareURL: Ref = ref("");
	public websiteURL: Ref = ref("");

	public copyLink(url: string): void{
		navigator.clipboard.writeText(url);
	}

	public generateWebsite(): void {
		const content: object = {
			dynamicLinkInfo: {
				domainUriPrefix: "https://website.edublocks.org",
				link: `http://${location.host}/website/?html=${encodeURI(pythonCode.value)}`
			},
			suffix: {
				option: "SHORT"
			}
		};
		fetch(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.VUE_APP_API_KEY}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(content)
		}).then((response: Response) => {
			response.json().then((json: any) => {
				this.websiteURL.value = json.shortLink;
			});
		});
	}
}