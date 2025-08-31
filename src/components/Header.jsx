import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.scss";

function Header() {
	return (
		<header className="container">
			<img src={logo} alt="" className="container_logo" />
			<nav className="container_link">
				<Link to="/" className="container_link--home">
					Accueil
				</Link>
				<Link to="/about" className="container_link--about">
					A Propos
				</Link>
			</nav>
		</header>
	);
}

export default Header;
