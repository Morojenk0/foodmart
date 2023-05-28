import React from "react";
import "./Controls.scss";
import MoveCarouselBtn from "./MoveCarouselBtn";

export default function Controls({nextSlide, prevSlide}) {
	return (
		<section className="carousel__controls">
			<h2 className="carousel__title">Category</h2>
			<div className="carousel__controls-container">
				<button className="carousel__btn-caterogies">
					view all caterogies
				</button>
				<MoveCarouselBtn
					direction={"prev"}
					nextSlide={nextSlide}
					prevSlide={prevSlide}
				/>
				<MoveCarouselBtn
					direction={"next"}
					nextSlide={nextSlide}
					prevSlide={prevSlide}
				/>
			</div>
		</section>
	);
}
