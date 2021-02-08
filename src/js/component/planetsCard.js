import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import "../../styles/index.scss";

export const PlanetsCard = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="cardContainer">
			{store.planets.map((planet, index) => {
				return (
					<Card key={index.toString()}>
						<Card.Img variant="top" src="https://i.imgur.com/eKb8rr6.png" />
						<Card.Body>
							<Card.Title> {planet.name} </Card.Title>
						</Card.Body>
						<Card.Footer>
							<Link to={"/planetsdetails/" + planet.uid}>
								<button className="btn">Learn more</button>
							</Link>
							<Link>
								<button
									className="btn bg-transparent"
									onClick={() => actions.setMyFavouritesCharacters(planet.name)}>
									<i className="fa fa-heart animate__animated animate__heartBeat animate__infinite	infinite" />
								</button>
							</Link>
						</Card.Footer>
					</Card>
				);
			})}
			<button className="next-page-button" onClick={() => actions.getPlanets()}>
				{" "}
				Next Page{" "}
			</button>
		</div>
	);
};
