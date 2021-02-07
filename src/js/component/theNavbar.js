import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Route, withRouter, Switch, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { SearchBar } from "./searchbar";

import "../../styles/index.scss";

// import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(1)
	},
	extendedIcon: {
		marginRight: theme.spacing(1)
	}
}));

export const TheNavbar = () => {
	const { store, actions } = useContext(Context);
	const classes = useStyles();

	const favourites = store.favouritesCharacters.map((favouritesCharacter, index) => {
		return (
			<NavDropdown.Item key={index.toString()}>
				{favouritesCharacter}{" "}
				<IconButton
					aria-label="delete"
					className={classes.margin}
					onClick={() => actions.setDeleteMyFavouritesCharacters(favouritesCharacter)}>
					<DeleteIcon />
				</IconButton>
			</NavDropdown.Item>
		);
	});

	return (
		<Breadcrumbs maxItems={2} aria-label="breadcrumb">
			<Link to="/home" color="inherit">
				Home
			</Link>
			<Link to="/characters" color="inherit">
				Characters
			</Link>
			<Link to="/planets" color="inherit">
				Planets
			</Link>
			<Link color="inherit">Contact</Link>
			<NavDropdown title="Favourites" id="basic-nav-dropdown">
				{favourites}
			</NavDropdown>
			<BrowserRouter>
				<Switch>
					<SearchBar>
						<Route exact path="/charactersdetails/:uid" component={SearchBar} />
					</SearchBar>
					{/* <Menu /> */}
				</Switch>
			</BrowserRouter>
		</Breadcrumbs>
	);
};
