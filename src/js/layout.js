import React from "react";
import { BrowserRouter } from "react-router-dom"; // Route, Switch
import ScrollToTop from "./component/scrollToTop";
// import { Home } from "./views/home";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { StarWarsLogo } from "./component/header";
import { TheNavbar } from "./component/theNavbar";
import { Footer } from "./component/footer";
import { PlanetsCardDeck } from "./component/planetsCardDeck";
import { Characters } from "./component/charactersCardDeck";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<StarWarsLogo />
					<TheNavbar />
					<Characters />
					<PlanetsCardDeck />
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
