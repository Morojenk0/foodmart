import React from "react";
import arrowLeft from "../../images/control-arrow-left.svg";
import arrowRight from "../../images/control-arrow-right.svg";
import "./MoveSliderBtn.scss";

export default function MoveSliderBtn({
	direction,
	nextSlide,
	prevSlide,
	slideIndex,
}) {
	return (
		<>
			<button
				onClick={direction === "next" ? nextSlide : prevSlide}
				className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
			>
				<img src={direction === "next" ? arrowRight : arrowLeft} />
			</button>
		</>
	);
}
