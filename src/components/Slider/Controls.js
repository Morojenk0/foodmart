import React from "react";
import "./Controls.scss";
import dataSlider from "./dataSlider";

export default function Controls({slideIndex, setSlide}) {
	return (
		<section className="slider__buttons">
			{dataSlider.map((obj, index) => {
				return (
					<button
						className={
							slideIndex === index + 1
								? "slider__button slider__button_active"
								: "slider__button"
						}
						onClick={() => {
							setSlide(index + 1);
						}}
						key={obj.id}
					></button>
				);
			})}
		</section>
	);
}
