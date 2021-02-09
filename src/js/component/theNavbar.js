import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { SearchBar } from "./searchbar";
import "../../styles/index.scss";

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
		<nav className="navbar navbar-expand-lg ">
			<div className="navbar" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link Name">
							<Link to="/home" color="inherit">
								<span>Home</span>
							</Link>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link Name">
							<Link to="/characters" color="inherit">
								<span>Characters</span>
							</Link>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link Name">
							<Link to="/planets" color="inherit">
								<span>Planets</span>
							</Link>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link Name" tabIndex="-1" aria-disabled="true">
							<Link to="/contact" color="inherit">
								<span>Contact</span>
							</Link>
						</a>
					</li>
					<li className="nav-item Name">
						<a className="nav-link">
							<NavDropdown title="Favourites" id="basic-nav-dropdown">
								<span>{favourites}</span>
							</NavDropdown>
						</a>
					</li>
				</ul>
				<BrowserRouter>
					<Switch>
						<SearchBar>
							<Route exact path="/charactersdetails/:uid" component={SearchBar} />
						</SearchBar>
					</Switch>
				</BrowserRouter>
			</div>
		</nav>
	);
};
