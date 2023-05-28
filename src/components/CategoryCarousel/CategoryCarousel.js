import React from "react";
import {useState} from "react";
import "./CategoryCarousel.scss";
import dataCategoryCarousel from "./dataCategoryCarousel";

import Controls from "./Controls";
import CarouselItem from "./CarouselItem";

export default function CategoryCarousel() {
	const [slideIndex, setSlideIndex] = useState(0);

	const nextSlide = (i) => {
		if (slideIndex !== dataCategoryCarousel.length / 6 - 1) {
			setSlideIndex(slideIndex + 1);
			// i.target.classList.remove("disabled");
		} else if (slideIndex === dataCategoryCarousel.length / 6 - 2) {
			setSlideIndex(slideIndex);
			// i.target.classList.add("disabled");
		}
	};

	const prevSlide = (i) => {
		if (slideIndex !== 0) {
			setSlideIndex(slideIndex - 1);
			// i.target.classList.add("disabled");
		} else if (slideIndex === 0) {
			setSlideIndex(slideIndex);
			// i.target.classList.remove("disabled");
		}
	};

	return (
		<section className="carousel">
			<Controls nextSlide={nextSlide} prevSlide={prevSlide} />
			<section
				className="carousel__items"
				style={{transform: `translate(-${slideIndex * 33.33333}%)`}}
			>
				{dataCategoryCarousel.map((obj, index) => {
					return <CarouselItem obj={obj} index={index} key={obj.id} />;
				})}
			</section>
		</section>
	);
}
