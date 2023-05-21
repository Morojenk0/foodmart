import React from "react";
import "./Controls.scss";

export default function Controls(setSlide) {
	return (
		<div className="slider__controls">
			<h2 className="slider__title">Category</h2>
			<div className="slider__controls-container">
				<button className="slider__btn-caterogies">view all caterogies</button>
				<button className="btn slider__btn-prev">
					<img className="slider__btn-img" src="" />
				</button>
				<button className="btn slider__btn-next">
					<img className="slider__btn-img" src="" />
				</button>
			</div>
		</div>
	);
}
