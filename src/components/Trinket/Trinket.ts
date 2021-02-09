import { pythonCode } from "@/views/Editor/Editor";

export class Trinket {
	public getTrinketURL(): string {
		let trinketURL: string = "";
		const usrBin: string = "#!/usr/bin/python3 \n";
		const python: string = pythonCode.value;
		if (pythonCode.value.includes("requests")) {
			trinketURL = `https://trinket.io/tools/1.0/jekyll/embed/python3?runOption=run&outputOnly=true&start=result#code=${encodeURIComponent(usrBin + python)}`;
		}
		else {
			trinketURL = `https://trinket.io/tools/1.0/jekyll/embed/python?runOption=run&outputOnly=true&start=result#code=${encodeURIComponent(usrBin + python)}`;
		}
		return trinketURL;
	}
}