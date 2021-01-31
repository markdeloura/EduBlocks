import { App } from "vue";

// Components
import Avatar from "@/components/Avatar/Avatar.vue";
import Blockly from "@/components/Blockly/Blockly.vue";
import Button from "@/components/Button/Button.vue";
import EditorNav from "@/components/EditorNav/EditorNav.vue";
import Icon from "@/components/Icon/Icon.vue";
import ImageCard from "@/components/ImageCard/ImageCard.vue";
import Input from "@/components/Input/Input.vue";
import ListItem from "@/components/ListItem/ListItem.vue";
import MainNav from "@/components/MainNav/MainNav.vue";
import RouterTab from "@/components/RouterTab/RouterTab.vue";
import Select from "@/components/Select/Select.vue";
import SelectCard from "@/components/SelectCard/SelectCard.vue";

// Register all components globally
export default {
	install(app: App): void {
		app.component("Avatar", Avatar);
		app.component("Blockly", Blockly);
		app.component("Button", Button);
		app.component("EditorNav", EditorNav);
		app.component("Icon", Icon);
		app.component("ImageCard", ImageCard);
		app.component("Input", Input);
		app.component("ListItem", ListItem);
		app.component("MainNav", MainNav);
		app.component("RouterTab", RouterTab);
		app.component("Select", Select);
		app.component("SelectCard", SelectCard);
	}
};