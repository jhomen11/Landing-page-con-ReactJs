import React from "react";

const Jumbotron = ({ mensaje }) => {
	return (
		<div className="container">
			<div className="jumbotron bg-light p-5">
				<h1 className="display-3">{mensaje}</h1>
				<p>
					This is a template for a simple marketing or informational
					website. It includes a large callout called a jumbotron and
					three supporting pieces of content. Use it as a starting
					point to create something more unique.
				</p>
				<p>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more &raquo;
					</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
