import { HousingCard, Banner } from "../components";
import homeBg from "../assets/home_bg.png";
import data from "../data/housing.json";
import "../styles/Home.scss";

function Home() {
	const bannerTitle = "Chez vous, partout et ailleurs";

	return (
		<main>
			<div className="homeBannerContainer">
				<Banner imgSrc={homeBg} title={bannerTitle} />
			</div>
			<section className="housingList">
				{data.map((housing) => (
					<HousingCard
						key={housing.id}
						title={housing.title}
						coverUrl={housing.cover}
						id={housing.id}
					/>
				))}
			</section>
		</main>
	);
}

export default Home;
