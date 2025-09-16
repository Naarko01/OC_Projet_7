import { useParams, useNavigate } from "react-router-dom";
import { Carousel, DropDown } from "../components";
import data from "../data/housing.json";
import { useEffect } from "react";
import "../styles/Housing.scss";

function Housing() {
	const { id } = useParams();
	let navigate = useNavigate();
	const targetedObj = data.find((element) => element.id === id);
	const maxRating = 5;

	useEffect(() => {
		if (!targetedObj) {
			return navigate("/error");
		}
	}, [navigate, targetedObj]);

	return targetedObj ? (
		<main>
			<Carousel id={id} />
			<section className="info">
				<div className="infoHousing">
					<h2 className="title">{targetedObj.title}</h2>
					<p className="location">{targetedObj.location}</p>
					<div className="tagList">
						{targetedObj.tags.map((tag) => (
							<div className="tag" key={`${id}-${tag}`}>
								{tag.split(" ")[0]}
							</div>
						))}
					</div>
				</div>
				<div className="infoHost">
					<p className="hostName">{targetedObj.host.name}</p>
					<img
						src={targetedObj.host.picture}
						alt="photo du propriétaire"
						className="hostPicture"
					/>
					<div className="notation">
						{[...Array(maxRating)].map((_, index) => (
							<i
								key={index}
								className={`fa-solid fa-star${
									index < targetedObj.rating ? " rated" : ""
								}`}
							></i>
						))}
					</div>
				</div>
			</section>
			<section className="details">
				<DropDown content={targetedObj.description} title={"Description"} />
				<DropDown
					content={targetedObj.equipments}
					title={"Équipements"}
					isList={true}
				/>
			</section>
		</main>
	) : null;
}

export default Housing;
