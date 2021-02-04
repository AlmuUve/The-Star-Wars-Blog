import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.characters.map((character, index) => {
				return (
					<Card key={index.toString()}>
						<Card.Img
							variant="top"
							src="https://i.pinimg.com/originals/34/69/5f/34695fafb7ebb88e880f798a81af0d40.png"
						/>
						<Card.Body>
							<Card.Title>{character.name}</Card.Title>
							<Card.Text>Holaaaaaaaa</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Link to={"/details/" + character.uid}>
								<button className="btn btn-primary">+ Info</button>
							</Link>
						</Card.Footer>
					</Card>
				);
			})}
		</div>
	);
};
