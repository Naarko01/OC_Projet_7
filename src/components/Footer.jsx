import "../styles/Footer.scss";
import whiteLogo from "../assets/logo-white.png";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer_content">
				<img className="footer_content--img" src={whiteLogo} alt="" />
				<p className="footer_content--text">
					© 2020 Kasa. All rights reserved
				</p>
			</div>
		</footer>
	);
}

export default Footer;
