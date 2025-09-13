import data from "../data/housing.json";
import arrow from "../assets/dropdownArrow.png";
import { useState } from "react";
import "../styles/Dropdown.scss";

function DropDown({ id, utility }) {
	const [isOpen, setIsOpen] = useState(false);
	let content = "";
	let title = "";

	if (id) {
		const targetedObj = data.find((element) => element.id === id);

		switch (utility) {
			case "description":
				content = targetedObj.description;
				title = "Description";
				break;
			case "equipments":
				content = targetedObj.equipments;
				title = "Équipements";
				break;
			default:
				break;
		}
	} else {
		switch (utility) {
			case "fiabilite":
				content =
					"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
				title = "Fiabilité";
				break;
			case "respect":
				content =
					"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
				title = "Respect";
				break;
			case "service":
				content =
					"La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.";
				title = "Service";
				break;
			case "securite":
				content =
					"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
				title = "Sécurité";
				break;
			default:
				break;
		}
	}

	return (
		<div className={`dropdown${isOpen ? " expanded" : ""}`}>
			<div className="topbar">
				<h3>{title}</h3>
				<img src={arrow} alt="flèche" onClick={() => setIsOpen(!isOpen)} />
			</div>
			<div className={`content${isOpen ? " open" : ""}`}>
				{utility === "equipments" ? (
					<ul className="equipmentList">
						{content.map((equipment) => (
							<li key={`${id}-${equipment}`}>{equipment}</li>
						))}
					</ul>
				) : (
					<p>{content}</p>
				)}
			</div>
		</div>
	);
}

export default DropDown;
