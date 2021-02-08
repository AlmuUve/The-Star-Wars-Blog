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
						<Card.Img variant="top" src="https://i.imgur.com/eKb8rr6.png" />
						<Card.Body>
							<Card.Title>{character.name}</Card.Title>
						</Card.Body>
						<Card.Footer>
							<Link to={"/charactersdetails/" + character.uid}>
								<button className="btn">Learn more</button>
							</Link>
							<Link>
								<button
									className="btn bg-transparent"
									onClick={() => actions.setMyFavouritesCharacters(character.name)}>
									<i className="fa fa-heart animate__animated animate__heartBeat animate__infinite	infinite" />
								</button>
							</Link>
						</Card.Footer>
					</Card>
				);
			})}
			<button className="charactersButton" onClick={() => actions.getCharacters()}>
				{" "}
				Next Page{" "}
			</button>
		</div>
	);
};
