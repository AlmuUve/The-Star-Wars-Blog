import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import Card from "react-bootstrap/Card";

export const PlanetsCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.planets.map((planet, index) => {
				return (
					<Card key={index.toString()}>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title> {planet.name} </Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Link to={"/details/" + character.uid}>
								<button className="btn btn-primary">+ Info</button>
							</Link>
							<button className="btn btn-primary">Fav</button>
						</Card.Footer>
					</Card>
				);
			})}
		</div>
	);
};
