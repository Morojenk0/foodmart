import React from "react";
import arrowLeft from "../../images/control-arrow-left.svg";
import arrowRight from "../../images/control-arrow-right.svg";
import "./MoveSliderBtn.scss";

export default function MoveSliderBtn({direction, slideIndex, setSlide}) {
	return (
		<>
			<button
				onClick={setSlide}
				className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
			>
				<img src={direction === "next" ? arrowRight : arrowLeft} />
				{console.log(setSlide)}
			</button>
		</>
	);
}
