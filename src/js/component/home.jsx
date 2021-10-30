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
			<Card />
			<Footer autor="Jhonny Mendoza" />
		</div>
	);
};

export default Home;
