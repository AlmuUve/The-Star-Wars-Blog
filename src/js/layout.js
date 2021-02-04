import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { VistaDetail } from "./views/vistadetail";
import injectContext from "./store/appContext";

import { TheNavbar } from "./component/thenavbar";
import { Footer } from "./component/footer";

import { Planets } from "./component/planets";
import { Characters } from "./component/characters";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<TheNavbar />
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/characters" component={Characters} />
						<Route exact path="/planets" component={Planets} />
						<Route exact path="/details" component={VistaDetail} />
						<Route>
							<h1>The force is not with you!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
