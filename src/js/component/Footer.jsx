import React from "react";
import PropTypes from "prop-types";

const Footer = ({ autor }) => {
	return (
		<footer className=" bg-dark text-white">
			<div className="container-fluid justify-content-center align-items-center">
				<nav className="row">
					<p className="text-center pt-2">{autor}</p>
				</nav>
			</div>
		</footer>
	);
};
Footer.propTypes = {
	autor: PropTypes.string
};
export default Footer;
