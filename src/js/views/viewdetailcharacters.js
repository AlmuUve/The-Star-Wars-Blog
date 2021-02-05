import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../../styles/index.scss";

export const ViewDetailCharacters = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getCharacterDetails(params.id);
	}, []);

	return (
		<Jumbotron>
			<div className="row">
				{store.characterDetails.length > 0 ? (
					<>
						<h1>{store.characterDetails[0].name}</h1> <p>{store.characterDetails[0].birth_year}</p>
					</>
				) : (
					"loading"
				)}
				<p>
					<Button variant="primary">Learn more</Button>
				</p>
				<div className="img-square-wrapper pb-2">
					<img
						className="charactersImg"
						src="https://i.pinimg.com/originals/34/69/5f/34695fafb7ebb88e880f798a81af0d40.png"
					/>
				</div>
			</div>
		</Jumbotron>
	);
};

ViewDetailCharacters.propTypes = {
	match: PropTypes.object
};
