import React from "react";
import {useState} from "react";
import dataSlider from "./dataSlider";
import "./Slider.scss";
import Controls from "./Controls";

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(1);

	return (
		<section className="slider">
			{dataSlider.map((obj, index) => {
				return (
					<article
						className={
							slideIndex === index + 1 ? "slide slide_active" : "slide"
						}
						key={obj.id}
					>
						<p className="slide__subtitle">{obj.subTitle}</p>
						<h3 className="slide__title">{obj.title}</h3>
						<p className="slide__text">{obj.text}</p>
						<a className="slide__link" href="#">
							shop now
						</a>
						<img
							className="slide__img"
							src={require(`../../images/webp/slide-img-${index + 1}.webp`)}
						/>
					</article>
				);
			})}
			<Controls slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
		</section>
	);
}
