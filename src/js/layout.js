import React from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { VistaDetail } from "./views/vistadetail";
import injectContext from "./store/appContext";
import { StarWarsLogo } from "./component/header";
import { TheNavbar } from "./component/theNavbar";
import { Footer } from "./component/footer";
import { Characters } from "./component/charactersCardDeck";
import { Planets } from "./component/planets";
// import "../../styles/index.scss";

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
						<Route exact path="/characters" component={Characters} />
						<Route exact path="/planets" component={Planets} />
						<Route exact path="/details/:id" component={VistaDetail} />
						{/* <Route>
							<h1>The force is not with you!</h1>
						</Route> */}
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

{
	/* <BrowserRouter basename={basename}>
				<ScrollToTop>
					<StarWarsLogo />
					<TheNavbar />
					<Characters />
					<PlanetsCardDeck />
					<Footer />
				</ScrollToTop>
			</BrowserRouter> */
}
