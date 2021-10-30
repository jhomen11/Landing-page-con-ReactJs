import React from "react";

import CardBody from "./CardBody.jsx";
import { Fragment } from "react";

const Card = () => {
	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="col-md-4 col-lg-3 my-5 ">
					<CardBody
						titulo="Titulo 1"
						img="https://picsum.photos/id/22/500/325"
						btn="btn btn-primary"
					/>
				</div>
				<div className="col-md-4 col-lg-3 my-5 ">
					<CardBody
						titulo="Titulo 2"
						img="https://picsum.photos/id/20/500/325"
						btn="btn btn-warning"
					/>
				</div>
				<div className="col-md-4 col-lg-3 my-5 ">
					<CardBody
						titulo="Titulo 3"
						img="https://picsum.photos/id/230/500/325"
						btn="btn btn-info"
					/>
				</div>
				<div className="col-md-4 col-lg-3 my-5 ">
					<CardBody
						titulo="Titulo 4"
						img="https://picsum.photos/id/420/500/325"
						btn="btn btn-dark"
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;
