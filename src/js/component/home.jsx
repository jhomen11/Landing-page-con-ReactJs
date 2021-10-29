import React from "react";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Navegacion from "./Navegacion.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navegacion />
			<Jumbotron mensaje="Landing Page" />
			<div className="container">
				<div className="row d-flex justify-content-center">
					<Card titulo="Titulo1" />
					<Card titulo="Titulo2" />
					<Card titulo="Titulo3" />
					<Card titulo="Titulo4" />
				</div>
			</div>
			<Footer autor="Jhonny Mendoza" />
		</div>
	);
};

export default Home;
