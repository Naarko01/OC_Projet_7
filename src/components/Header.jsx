import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.scss";

function Header() {
	const location = useLocation();
	return (
		<header className="container">
			<img src={logo} alt="" className="container_logo" />
			<nav className="container_link">
				<Link
					to="/"
					className={`container_link--home${
						location.pathname === "/" ? " selected" : ""
					}`}
				>
					Accueil
				</Link>
				<Link
					to="/about"
					className={`container_link--about${
						location.pathname === "/about" ? " selected" : ""
					}`}
				>
					A Propos
				</Link>
			</nav>
		</header>
	);
}

export default Header;
