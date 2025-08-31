import { Link } from "react-router-dom";

function HousingCard({ title, coverUrl }) {
	return (
		<Link>
			<div className="housingCard">
				<img className="housingCard--cover" src={coverUrl} alt="" />
				<p className="housingCard--title">{title}</p>
			</div>
		</Link>
	);
}

export default HousingCard;
