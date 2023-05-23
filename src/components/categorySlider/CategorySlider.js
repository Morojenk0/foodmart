import React from "react";
import {useState} from "react";
import dataCategorySlider from "./dataCategorySlider";
import "./CategorySlider.scss";
import Controls from "./Controls";

export default function CategorySlider() {
	const [slideIndex, setSlideIndex] = useState(0);

	const setSlide = () => {
		setSlideIndex(0.5);
	};

	return (
		<>
			<Controls slideIndex={slideIndex} setSlide={setSlide} />
			<div className="div">
				<div
					className="test"
					style={{transform: `translate(-${slideIndex * 100}%)`}}
				>
					{dataCategorySlider.map((obj, index) => {
						return (
							<article className="slider__item" key={obj.id}>
								<img
									className="slider__img"
									// src={require(`../../images/webp/slide-category-img-${
									// 	index + 1
									// }.webp`)}
									src={require(`../../images/webp/slide-category-img-1.webp`)}
								/>
								<h4 className="slider__title">{obj.title}</h4>
							</article>
						);
					})}
				</div>
			</div>
		</>
	);
}
