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
							{store.planetDetails.length > 0 ? (
								<>
									<h1 className="h1view">{store.planetDetails[0].name}</h1>
									<p>Diameter: {store.planetDetails[0].diameter}</p>
									<p>Rotational Period: {store.planetDetails[0].rotation_period}</p>
									<p>Orbital Period: {store.planetDetails[0].orbital_period}</p>
									<p>Gravity: {store.planetDetails[0].gravity}</p>
									<p>Population: {store.planetDetails[0].population}</p>
									<p>Climate: {store.planetDetails[0].climate}</p>
									<p>Terrain: {store.planetDetails[0].terrain}</p>
									<p>Surface Water: {store.planetDetails[0].surface_water}</p>
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

ViewDetailPlanets.propTypes = {
	match: PropTypes.object
};
