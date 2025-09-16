import arrow from "../assets/dropdownArrow.png";
import { useState } from "react";
import "../styles/Dropdown.scss";

function DropDown({ title, content, isList }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`dropdown${isOpen ? " expanded" : ""}`}>
			<div className="topbar">
				<h3>{title}</h3>
				<img src={arrow} alt="flèche" onClick={() => setIsOpen(!isOpen)} />
			</div>
			<div className={`content${isOpen ? " open" : ""}`}>
				{isList ? (
					<ul className="equipmentList">
						{content.map((equipment, index) => (
							<li key={`${index}-${equipment}`}>{equipment}</li>
						))}
					</ul>
				) : (
					<p>{content}</p>
				)}
			</div>
		</div>
	);
}

export default DropDown;
