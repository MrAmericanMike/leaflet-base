import { mount } from "svelte";
import App from "./App.svelte";

const APP = mount(App, {
	target: document.querySelector("#app")
});

export default APP;
