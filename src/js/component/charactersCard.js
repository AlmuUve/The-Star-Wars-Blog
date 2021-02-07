import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import "../../styles/index.scss";
import Luke from "../../img/1.png";

export const CharactersCard = () => {
	const { store, actions } = useContext(Context);
	const image = {
		1: Luke
	};
	return (
		<div className="cardContainer">
			{store.characters.map((character, index) => {
				return (
					<Card key={index.toString()}>
						<Card.Img variant="top" src={image[character.uid]} />
						<Card.Body>
							<Card.Title>{character.name}</Card.Title>
							<Card.Text>{character.name}</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Link to={"/charactersdetails/" + character.uid}>
								<button className="btn btn-primary">+ Info</button>
							</Link>
							<Link>
								<button
									className="btn btn-outline-warning"
									onClick={() => actions.setMyFavouritesCharacters(character.name)}>
									<i className="fa fa-heart-o" aria-hidden="true" />
								</button>
							</Link>
						</Card.Footer>
					</Card>
				);
			})}
			<button onClick={() => actions.getCharacters()}> Soy un botón </button>
		</div>
	);
};
