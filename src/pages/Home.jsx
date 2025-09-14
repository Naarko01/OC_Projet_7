import { HousingCard, Banner } from "../components";
import homeBg from "../assets/home_bg.png";
import data from "../data/housing.json";
import "../styles/Home.scss";

function Home() {
	const housingList = data;
	const bannerTitle = "Chez vous, partout et ailleurs";

	/*
	useEffect(() => {
		async function fetchHousing() {
			setIsLoading(true);
			try {
				const response = await fetch("/data/housing.json");
				const housingList = await response.json();
				setHousingList(housingList);
			} catch (err) {
				console.log(err);
				setError(true);
			} finally {
				setTimeout(() => {
					setIsLoading(false);
				}, 1500);
			}
		}
		fetchHousing();
	}, []);
	*/

	return (
		<main>
			<div className="homeBannerContainer">
				<Banner imgSrc={homeBg} title={bannerTitle} />
			</div>
			<section className="housingList">
				{housingList.map((housing) => (
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
