import React from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { ViewDetailCharacters } from "./views/viewdetailcharacters";
import { ViewDetailPlanets } from "./views/viewdetailplanets";
import injectContext from "./store/appContext";
import { StarWarsLogo } from "./component/header";
import { TheNavbar } from "./component/theNavbar";
import { Footer } from "./component/footer";
import { CharactersCard } from "./component/charactersCard";
import { PlanetsCard } from "./component/planetsCard";
import { Contact } from "./component/contact";
import "../styles/index.scss";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<StarWarsLogo />
					<TheNavbar />
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/" component={Home} />
						<Route exact path="/characters" component={CharactersCard} />
						<Route exact path="/planets" component={PlanetsCard} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/charactersdetails/:id" component={ViewDetailCharacters} />
						<Route exact path="/planetsdetails/:id" component={ViewDetailPlanets} />
						<Route>
							<h1 className="error_title">THE FORCE IS NOT WITH YOU PADAWAN!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
			<Footer />
		</div>
	);
};

export default injectContext(Layout);
