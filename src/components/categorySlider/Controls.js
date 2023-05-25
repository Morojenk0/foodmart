import React from "react";
import "./Controls.scss";
import MoveSliderBtn from "./MoveSliderBtn";
export default function Controls({nextSlide, prevSlide, slideIndex}) {
	return (
		<div className="slider__controls">
			<h2 className="slider__title">Category</h2>
			<div className="slider__controls-container">
				<button className="slider__btn-caterogies">view all caterogies</button>
				<MoveSliderBtn
					direction={"prev"}
					nextSlide={nextSlide}
					prevSlide={prevSlide}
					slideIndex={slideIndex}
				/>
				<MoveSliderBtn
					direction={"next"}
					nextSlide={nextSlide}
					prevSlide={prevSlide}
					slideIndex={slideIndex}
				/>
			</div>
		</div>
	);
}
