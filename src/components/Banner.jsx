import "../styles/Banner.scss";

function Banner({ imgSrc, title, filterType }) {
	return (
		<section className="bgContainer">
			<img src={imgSrc} alt="" />
			{title && <p>{title}</p>}
			<div
				className={`filter${filterType === "clair" ? " brighter" : ""}`}
			></div>
		</section>
	);
}

export default Banner;
