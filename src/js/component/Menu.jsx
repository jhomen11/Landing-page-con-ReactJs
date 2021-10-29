import React from "react";

const Menu = ({ categoria }) => {
	return (
		<li className="nav-item">
			<a className="nav-link" aria-current="page" href="#">
				{categoria}
			</a>
		</li>
	);
};

export default Menu;
