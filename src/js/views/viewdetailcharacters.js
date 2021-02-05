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
						<h1>Name: {store.characterDetails[0].name}</h1>
						<p>Birth year: {store.characterDetails[0].birth_year}</p>
						<p>Eye color: {store.characterDetails[0].eye_color}</p>
						<p>Gender: {store.characterDetails[0].gender}</p>
						<p>Hair color: {store.characterDetails[0].hair_color}</p>
						<p>Heigth: {store.characterDetails[0].heigth}</p>
						<p>Mass: {store.characterDetails[0].mass}</p>
						<p>Skin color: {store.characterDetails[0].skin_color}</p>
						<p>Homeworld: {store.characterDetails[0].homeworld}</p>
					</>
				) : (
					"loading"
				)}
				<p>
					<Button variant="primary">Learn more</Button>
				</p>
				<div className="img-square-wrapper pb-2">
					<img
						className="imgBrazil img-responsive mx-auto d-block"
						src="https://images.theconversation.com/files/289953/original/file-20190828-184192-j9w2v2.jpg"
					/>
				</div>
			</div>
		</Jumbotron>
	);
};

ViewDetailCharacters.propTypes = {
	match: PropTypes.object
};
