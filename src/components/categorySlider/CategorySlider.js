import React from "react";
import {useState} from "react";
import dataCategorySlider from "./dataCategorySlider";
import "./CategorySlider.scss";
import Controls from "./Controls";

export default function CategorySlider() {
	const [slideIndex, setSlideIndex] = useState(1);

	const setSlide = (index) => {
		setSlideIndex(index);
	};

	return (
		<>
			<Controls setSlide={setSlide} />
			<div className="test">
				{dataCategorySlider.map((obj, index) => {
					return (
						<article className="slider__item" key={obj.id}>
							<img
								className="slider__img"
								src={require(`../../images/webp/slide-category-img-${
									index + 1
								}.webp`)}
							/>
							<h4 className="slider__title">{obj.title}</h4>
						</article>
					);
				})}
			</div>
		</>
	);
}
