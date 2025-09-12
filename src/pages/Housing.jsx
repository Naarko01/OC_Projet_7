import { useParams, useNavigate } from "react-router-dom";
import { Carousel, DropDown } from "../components";
import data from "../data/housing.json";
import { useEffect } from "react";

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
			<div className="info">
				<h2 className="title">{targetedObj.title}</h2>
				<p className="location">{targetedObj.location}</p>
				<div className="host">
					<p className="hostName">{targetedObj.host.name}</p>
					<img
						src={targetedObj.host.picture}
						alt=""
						className="hostPicture"
					/>
				</div>
				<div className="tags"></div> {/* va devenir un component*/}
				<div className="notation"></div> {/* va devenir un component*/}
				<DropDown>Description</DropDown> {/* component à faire*/}
				<DropDown>Equipements</DropDown>
			</div>
		</main>
	) : null;
}

export default Housing;
