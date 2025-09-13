import { useParams, useNavigate } from "react-router-dom";
import { Carousel, DropDown } from "../components";
import data from "../data/housing.json";
import { useEffect } from "react";
import "../styles/Housing.scss";

function Housing() {
	const { id } = useParams();
	let navigate = useNavigate();
	const targetedObj = data.find((element) => element.id === id);

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
								{tag}
							</div>
						))}
					</div>
				</div>
				<div className="infoHost">
					<p className="hostName">{targetedObj.host.name}</p>
					<img
						src={targetedObj.host.picture}
						alt=""
						className="hostPicture"
					/>
					<div className="notation"></div> {/* va devenir un component*/}
				</div>
			</section>
			<section className="details">
				<DropDown id={id} utility={"description"} />
				<DropDown id={id} utility={"equipments"} />
			</section>
		</main>
	) : null;
}

export default Housing;
