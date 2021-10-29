import React from "react";
import PropTypes from "prop-types";

const Card = ({ titulo }) => {
	return (
		<div className=" col-lg-3 col-md-6 my-5 ">
			<div className="card">
				<img
					src="https://picsum.photos/500/325"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body text-center">
					<h5 className="card-title">{titulo}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the {`card's`} content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	titulo: PropTypes.string
};

export default Card;
