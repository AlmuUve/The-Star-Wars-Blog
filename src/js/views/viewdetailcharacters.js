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
			<div className="card view">
				<div className="row flex-row">
					<div className="col-lg-6 col-md-12 col-sm-12 mt-3">
						<div className="card-horizontal">
							<div className="img-square-wrapper">
								<img className="charactersImg" src="https://i.imgur.com/mZypjJY.png" />
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12 mt-3">
						<div className="card-body view">
							{store.characterDetails.length > 0 ? (
								<>
									<h1 className="h1view">{store.characterDetails[0].name}</h1>
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
						</div>
					</div>
				</div>
			</div>
		</Jumbotron>
	);
};

ViewDetailCharacters.propTypes = {
	match: PropTypes.object
};
