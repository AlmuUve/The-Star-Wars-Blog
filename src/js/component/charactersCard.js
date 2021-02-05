import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import "../../styles/index.scss";

export const CharactersCard = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="cardContainer">
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
		</div>
	);
};
