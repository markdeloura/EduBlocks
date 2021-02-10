import { App } from "vue";

// Components
import Avatar from "@/components/Avatar/Avatar.vue";
import Blockly from "@/components/Blockly/Blockly.vue";
import Button from "@/components/Button/Button.vue";
import EditorNav from "@/components/EditorNav/EditorNav.vue";
import Icon from "@/components/Icon/Icon.vue";
import IconCard from "@/components/IconCard/IconCard.vue";
import ImageCard from "@/components/ImageCard/ImageCard.vue";
import Input from "@/components/Input/Input.vue";
import ListItem from "@/components/ListItem/ListItem.vue";
import MainNav from "@/components/MainNav/MainNav.vue";
import SlideoverNav from "@/components/SlideoverNav/SlideoverNav.vue";
import Header from "@/components/Header/Header.vue";
import RouterTab from "@/components/RouterTab/RouterTab.vue";
import MenuItem from "@/components/MenuItem/MenuItem.vue";
import Select from "@/components/Select/Select.vue";
import SelectCard from "@/components/SelectCard/SelectCard.vue";
import Trinket from "@/components/Trinket/Trinket.vue";
import PageHeading from "@/components/PageHeading/PageHeading.vue";

// Register all components globally
export default {
	install(app: App): void {
		app.component("Avatar", Avatar);
		app.component("Blockly", Blockly);
		app.component("Button", Button);
		app.component("EditorNav", EditorNav);
		app.component("Icon", Icon);
		app.component("IconCard", IconCard);
		app.component("ImageCard", ImageCard);
		app.component("Input", Input);
		app.component("ListItem", ListItem);
		app.component("MainNav", MainNav);
		app.component("SlideoverNav", SlideoverNav);
		app.component("Header", Header);
		app.component("RouterTab", RouterTab);
		app.component("MenuItem", MenuItem);
		app.component("Select", Select);
		app.component("SelectCard", SelectCard);
		app.component("Trinket", Trinket);
		app.component("PageHeading", PageHeading);
	}
};