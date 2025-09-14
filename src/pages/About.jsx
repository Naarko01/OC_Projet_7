import { Banner, DropDown } from "../components";
import bannerImg from "../assets/aboutPage_bg.png";
import "../styles/About.scss";

function About() {
	return (
		<main>
			<div className="aboutBannerContainer">
				<Banner imgSrc={bannerImg} filterType="clair" />
			</div>
			<section className="dropdownList">
				<article className="dropdownElement">
					<DropDown utility="fiabilite" />
				</article>
				<article className="dropdownElement">
					<DropDown utility="respect" />
				</article>
				<article className="dropdownElement">
					<DropDown utility="service" />
				</article>
				<article className="dropdownElement">
					<DropDown utility="securite" />
				</article>
			</section>
		</main>
	);
}

export default About;
