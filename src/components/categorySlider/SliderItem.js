import React from "react";
export default function SliderItem({obj, index}) {
	return (
		<article className="slider__item">
			<img
				className="slider__img"
				src={require(`../../images/webp/slide-category-img-${index + 1}.webp`)}
				// src={require(`../../images/webp/slide-category-img-1.webp`)}
			/>
			<h4 className="slider__title">{obj.title}</h4>
		</article>
	);
}
