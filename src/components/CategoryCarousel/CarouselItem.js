import React from "react";
import "./CarouselItem.scss";
export default function CarouselItem({obj, index}) {
	return (
		<article className="carousel__item">
			<img
				className="carousel__img"
				// src={require(`../../images/webp/slide-category-img-${index + 1}.webp`)}
				src={require(`../../images/webp/slide-category-img-1.webp`)}
			/>
			<h4 className="carousel__title">{obj.title}</h4>
		</article>
	);
}
