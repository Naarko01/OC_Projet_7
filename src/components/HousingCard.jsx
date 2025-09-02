import { Link } from "react-router-dom";
import "../styles/HousingCard.scss";

function HousingCard({ title, coverUrl, id }) {
	return (
		<Link className="card" to={`/housing/${id}`}>
			<article className="card_content">
				<img className="card_content--cover" src={coverUrl} alt="" />
				<p className="card_content--title">{title}</p>
			</article>
		</Link>
	);
}

export default HousingCard;
