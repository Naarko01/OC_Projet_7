import "../styles/Footer.scss";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer_content">
				<img
					className="footer_content--img"
					src="src\assets\logo-white.png"
					alt=""
				/>
				<p className="footer_content--text">
					© 2020 Kasa. All rights reserved
				</p>
			</div>
		</footer>
	);
}

export default Footer;
