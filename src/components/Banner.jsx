function Banner({ imgSrc, title }) {
	return (
		<section className="bgContainer">
			<img src={imgSrc} alt="" />
			{title && <p>{title}</p>}
			<div className="filter"></div>
		</section>
	);
}

export default Banner;
