import React from "react";
import {createRoot} from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import Slider from "./components/Slider/Slider";
import CategorySlider from "./components/categorySlider/CategorySlider";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

const sliderDomNode = document.getElementById("slider");
const sliderRoot = createRoot(sliderDomNode);
sliderRoot.render(
	<React.StrictMode>
		<Slider />
	</React.StrictMode>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<CategorySlider />
	</React.StrictMode>
);
