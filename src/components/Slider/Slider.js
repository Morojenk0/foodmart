import React from "react";
import {useState} from "react";
import dataSlider from "./dataSlider";
import "./Slider.scss";
import Controls from "./Controls";

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(1);

	const setSlide = (index) => {
		setSlideIndex(index);
	};

	return (
		<>
			{dataSlider.map((obj, index) => {
				return (
					<article
						className={
							slideIndex === index + 1 ? "slide slide_active" : "slide"
						}
						key={obj.id}
					>
						<p className="slide__subtitle">
							<span className="slide__subtitle-span">{obj.subTitle[0]} </span>
							{obj.subTitle[1]}
						</p>
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
			<Controls slideIndex={slideIndex} setSlide={setSlide} />
		</>
	);
}
