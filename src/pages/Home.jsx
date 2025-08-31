import homeBg from "../assets/home_bg.png";
import "../styles/Home.scss";

function Home() {
	return (
		<main>
			<div className="bgContainer">
				<img src={homeBg} alt="" />
				<p>Chez vous, partout et ailleurs</p>
				<div className="filter"></div>
			</div>
		</main>
	);
}

export default Home;
