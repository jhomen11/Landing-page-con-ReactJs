import React from "react";
import PropTypes from "prop-types";

export const CardBody = ({ titulo, img, btn }) => {
	return (
		<div className="card">
			<img src={img} className="card-img-top" alt="..." />
			<div className="card-body text-center">
				<h5 className="card-title">{titulo}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the {`card's`} content.
				</p>
				<a href="#" className={btn}>
					Go somewhere
				</a>
			</div>
		</div>
	);
};

CardBody.propTypes = {
	titulo: PropTypes.string,
	img: PropTypes.string,
	btn: PropTypes.string
};

export default CardBody;
