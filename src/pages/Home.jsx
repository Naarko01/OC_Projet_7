import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import HousingCard from "../components/HousingCard";
import homeBg from "../assets/home_bg.png";
import "../styles/Home.scss";

function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [housingList, setHousingList] = useState([]);
	const [error, setError] = useState(null);

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
				setIsLoading(false);
			}
		}
		fetchHousing();
	}, []);

	return (
		<main>
			<section className="bgContainer">
				<img src={homeBg} alt="" />
				<p>Chez vous, partout et ailleurs</p>
				<div className="filter"></div>
			</section>
			{error ? (
				<div className="fetchError">
					Erreur lors de la récupération des données
				</div>
			) : isLoading ? (
				<Loader />
			) : (
				<section className="housingList">
					{housingList.map((housing) => (
						<HousingCard
							key={housing.id}
							title={housing.title}
							coverUrl={housing.cover}
						/>
					))}
				</section>
			)}
		</main>
	);
}

export default Home;
