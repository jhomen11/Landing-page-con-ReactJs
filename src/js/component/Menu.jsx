import React from "react";
import PropTypes from "prop-types";

const Menu = ({ categoria }) => {
	return (
		<li className="nav-item">
			<a className="nav-link" aria-current="page" href="#">
				{categoria}
			</a>
		</li>
	);
};
Menu.propTypes = {
	categoria: PropTypes.string
};
export default Menu;
