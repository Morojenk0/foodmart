import React from "react";
import arrowLeft from "../../images/svg/control-arrow-left.svg";
import arrowRight from "../../images/svg/control-arrow-right.svg";
import "./MoveCarouselBtn.scss";

export default function MoveCarouselBtn({direction, nextSlide, prevSlide}) {
	return (
		<>
			<button
				onClick={direction === "next" ? nextSlide : prevSlide}
				className={
					direction === "next"
						? "carousel__btn next"
						: "carousel__btn prev disabled"
				}
			>
				<img src={direction === "next" ? arrowRight : arrowLeft} />
			</button>
		</>
	);
}
// className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
