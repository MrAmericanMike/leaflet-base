import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../css/global.css";

const MAP = L.map("map").setView([10, 0], 2);

// https://leaflet-extras.github.io/leaflet-providers/preview/
const CARTODB_POSITRON = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: "abcd",
	maxZoom: 20
});

CARTODB_POSITRON.addTo(MAP);

MAP.on("click", (event) => {
	console.log(event);
});

const MARKER = L.marker([0, 0]).bindPopup("Hello World!").addTo(MAP);

MARKER.on("click", (event) => {
	console.log(event);
});
