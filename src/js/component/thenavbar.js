import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import StarWars from "../../img/starwarslogo.svg";

export const TheNavbar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">
				<img src={StarWars} alt="Girl in a jacket" width="500" height="600" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Characters</Nav.Link>
					<Nav.Link href="#link">Planets</Nav.Link>
					<Nav.Link href="#link">About</Nav.Link>
					<Nav.Link href="#link">Contact</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1" />
						<NavDropdown.Item href="#action/3.2" />
						<NavDropdown.Item href="#action/3.3" />
						<NavDropdown.Divider />
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
