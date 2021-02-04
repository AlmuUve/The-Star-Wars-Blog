import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import Card from "react-bootstrap/Card";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="planets_card">
			{store.planets.map((planet, index) => {
				return (
					<Card key={index.toString()}>
						<Card.Img className="planets_image" variant="top" />
						<Card.Body>
							<Card.Title> {planet.name} </Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Link to="/details">
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
