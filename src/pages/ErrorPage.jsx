import { Link } from "react-router-dom";
import "../styles/Error.scss";

function ErrorPage() {
	return (
		<main className="errorContainer">
			<p className="errorCode">404</p>
			<p className="errorText">
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link to="/" className="errorRedirectLink">
				Retourner sur la page d'accueil
			</Link>
		</main>
	);
}

export default ErrorPage;
