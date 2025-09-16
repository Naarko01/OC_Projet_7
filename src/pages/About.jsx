import { Banner, DropDown } from "../components";
import bannerImg from "../assets/aboutPage_bg.png";
import "../styles/About.scss";

function About() {
	const data = [
		{
			title: "Fiabilité",
			content:
				"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
		},
		{
			title: "Respect",
			content:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
		},
		{
			title: "Service",
			content:
				"La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
		},
		{
			title: "Sécurité",
			content:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
		},
	];
	return (
		<main>
			<div className="aboutBannerContainer">
				<Banner imgSrc={bannerImg} filterType="clair" />
			</div>
			<section className="dropdownList">
				{data?.map((item, index) => (
					<article
						className="dropdownElement"
						key={`${index}-${item.title}`}
					>
						<DropDown title={item.title} content={item.content} />
					</article>
				))}
			</section>
		</main>
	);
}

export default About;
