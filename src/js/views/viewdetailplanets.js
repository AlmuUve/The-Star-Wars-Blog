import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../../styles/index.scss";

export const ViewDetailPlanets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlanetsDetails(params.id);
	}, []);

	return (
		<Jumbotron>
			<div className="row">
				{store.planetDetails.length > 0 ? (
					<>
						<h1>Name: {store.planetDetails[0].name}</h1>
						<p>Diameter: {store.planetDetails[0].diameter}</p>
						<p>Rotational Period: {store.planetDetails[0].rotation_period}</p>
						<p>Orbital Period: {store.planetDetails[0].orbital_period}</p>
						<p>Gravity: {store.planetDetails[0].gravity}</p>
						<p>Population: {store.planetDetails[0].population}</p>
						<p>Climate: {store.planetDetails[0].climate}</p>
						<p>Terrain: {store.planetDetails[0].terrain}</p>
						<p>Surface Water: {store.planetDetails[0].surface_water}</p>
						<p>Created: {store.planetDetails[0].created}</p>
						<p>Edited: {store.planetDetails[0].edited}</p>
						<p>Description: {store.planetDetails[0].description}</p>
					</>
				) : (
					"loading"
				)}
				<p>
					<Button variant="primary">Learn more</Button>
				</p>
				<div className="img-square-wrapper pb-2">
					<img
						className="planetsImg"
						src="https://i.pinimg.com/originals/34/69/5f/34695fafb7ebb88e880f798a81af0d40.png"
					/>
				</div>
			</div>
		</Jumbotron>
	);
};

ViewDetailPlanets.propTypes = {
	match: PropTypes.object
};
