import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.characters.map((character, index) => {
				return (
					<Card key={index.toString()}>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>{character.name}</Card.Title>
							<Card.Text>Holaaaaaaaa</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
							<Link to="/">
								<button className="btn btn-primary">Back home</button>
							</Link>
						</Card.Footer>
					</Card>
				);
			})}
		</div>
	);
};
