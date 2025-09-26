import { useState } from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import data from "../data/housing.json";
import "../styles/Carousel.scss";

function Carousel({ id }) {
	const [counter, setCounter] = useState(0);
	const targetedObj = data.find((element) => element.id === id);
	const imgListLength = targetedObj.pictures.length;

	function handleClick(isLeft) {
		if (counter === imgListLength - 1) {
			isLeft ? setCounter(counter - 1) : setCounter(0);
		} else if (counter === 0) {
			isLeft ? setCounter(imgListLength - 1) : setCounter(counter + 1);
		} else {
			isLeft ? setCounter(counter - 1) : setCounter(counter + 1);
		}
	}

	return (
		<div className="carousel">
			{imgListLength > 1 ? (
				<>
					<div className="leftArrow" onClick={() => handleClick(true)}>
						<img src={leftArrow} alt="flèche gauche" />
					</div>
					<div className="rightArrow" onClick={() => handleClick(false)}>
						<img src={rightArrow} alt="flèche droite" />
					</div>
				</>
			) : null}
			<img
				className="carouselContent"
				src={targetedObj.pictures[counter]}
				alt="photo de l'apartement"
			/>
			{imgListLength > 1 ? (
				<p className="counter">{`${counter + 1}/${imgListLength}`}</p>
			) : null}
		</div>
	);
}

export default Carousel;
