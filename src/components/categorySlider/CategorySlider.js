import React from "react";
import {useState} from "react";
import dataCategorySlider from "./dataCategorySlider";
import "./CategorySlider.scss";
import Controls from "./Controls";
import SliderItem from "./SliderItem";

export default function CategorySlider() {
	const [slideIndex, setSlideIndex] = useState(0);

	const nextSlide = () => {
		if (slideIndex !== dataCategorySlider.length / 6 - 1) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === dataCategorySlider.length / 6 - 1) {
			setSlideIndex(slideIndex);
		}
	};
	const prevSlide = () => {
		if (slideIndex !== 0) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 0) {
			setSlideIndex(slideIndex);
		}
	};
	return (
		<>
			<Controls
				nextSlide={nextSlide}
				prevSlide={prevSlide}
				slideIndex={slideIndex}
			/>
			<div className="div">
				<div
					className="test"
					style={{transform: `translate(-${slideIndex * 50}%)`}}
				>
					{dataCategorySlider.map((obj, index) => {
						return <SliderItem obj={obj} index={index} key={obj.id} />;
					})}
					{/* {dataCategorySlider.map((obj, index) => {
						return (
							<article className="slider__item" key={obj.id}>
								<img
									className="slider__img"
									src={require(`../../images/webp/slide-category-img-${
										index + 1
									}.webp`)}
									// src={require(`../../images/webp/slide-category-img-1.webp`)}
								/>
								<h4 className="slider__title">{obj.title}</h4>
							</article>
						);
					})} */}
				</div>
			</div>
		</>
	);
}
// {dataCategorySlider.map((obj, index) => {
// 	return (
// 		<article className="slider__item" key={obj.id}>
// 			<img
// 				className="slider__img"
// 				// src={require(`../../images/webp/slide-category-img-${
// 				// 	index + 1
// 				// }.webp`)}
// 				src={require(`../../images/webp/slide-category-img-1.webp`)}
// 			/>
// 			<h4 className="slider__title">{obj.title}</h4>
// 		</article>
// 	);
// })}
// const setSlide = () => {
// 	direction === "next"
// 		? () => {
// 				setSlideIndex(slideIndex + 1);
// 				console.log(slideIndex);
// 		  }
// 		: () => {
// 				setSlideIndex(slideIndex - 1);
// 				console.log(slideIndex);
// 		  };
// };
