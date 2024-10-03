<script lang="ts">
	import L from "leaflet";
	import "leaflet/dist/leaflet.css";
	import "./global.css";

	function createMap(node: HTMLDivElement) {
		const MAP = L.map("map").setView([10, 0], 2);

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

		const markerIcon = L.icon({
			iconUrl: "./marker-icon.png",
			shadowUrl: "./marker-shadow.png"
		});

		const MARKER = L.marker([0, 0], { icon: markerIcon }).bindPopup("Hello World!").addTo(MAP);

		MARKER.on("click", (event) => {
			console.log(event);
		});
	}
</script>

<main>
	<div id="map" use:createMap></div>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#map {
		height: 98%;
		width: 98%;
	}
</style>
