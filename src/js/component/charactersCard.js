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
							src="https://media.allure.com/photos/586403e0b77939842705f905/master/pass/shutterstock_5886297ew.jpg"
						/>
						<Card.Body className="card-body">
							<Card.Title>{character.name}</Card.Title>
						</Card.Body>
						<Card.Footer>
							<Link to={"/charactersdetails/" + character.uid} className="link_to">
								<button className="btn">Learn more</button>
							</Link>
							<Link>
								<button
									className="btn bg-transparent"
									onClick={() => actions.setMyFavourites(character.name)}>
									<i className="fa fa-heart animate__animated animate__heartBeat animate__infinite	infinite" />
								</button>
							</Link>
						</Card.Footer>
					</Card>
				);
			})}
			<button className="next-page-button btn col-12" onClick={() => actions.getCharacters()}>
				Next Page
			</button>
		</div>
	);
};
