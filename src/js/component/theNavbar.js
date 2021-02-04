import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../styles/theNavbar.scss";

export const TheNavbar = () => {
	const { store, actions } = useContext(Context);

	const favourites = store.favouritesCharacters.map((favouritesCharacter, index) => {
		return (
			<NavDropdown.Item key={index.toString()}>
				{favouritesCharacter}{" "}
				<button
					className="btn btn-outline-warning"
					onClick={() => actions.setDeleteMyFavouritesCharacters(favouritesCharacter)}>
					<i className="fa fa-trash-o" aria-hidden="true" />
				</button>
			</NavDropdown.Item>
		);
	});

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Characters</Nav.Link>
					<Nav.Link href="#link">Planets</Nav.Link>
					<Nav.Link href="#link">About</Nav.Link>
					<Nav.Link href="#link">Contact</Nav.Link>
					<NavDropdown title="Favourites" id="basic-nav-dropdown">
						{favourites}
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
