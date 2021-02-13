import { ref, Ref } from "vue";

export const isDesktopLayout: Ref<boolean> = ref(false);
export const isPortrait: Ref<boolean> = ref(false);

export function listenForScreenSizeChange(): void {
	let resize: number | undefined;
    
	const onResize: Function = () => {
		if (window.innerWidth > 768) {
			isDesktopLayout.value = true;
		}
		else {
			isDesktopLayout.value = false;
		}
	};

	const onRotate: Function = () => {
		if (screen.availHeight > screen.availWidth) {
			isPortrait.value = true;
		}
	};
    
	onResize();
	onRotate();
    
	window.addEventListener("resize", function() {
		clearTimeout(resize);
		resize = setTimeout(onResize, 50);
	});
}