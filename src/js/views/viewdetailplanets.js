import React, { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../../styles/index.scss";

export const ViewDetailPlanets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlanetsDetails(params.id);
	}, []);

	return (
		<Fragment>
			<div className="container">
				<div className="row flex-row">
					<div className="col-lg-6 col-md-12 col-sm-12 mt-3">
						<img
							className="image_details"
							src="https://img.unocero.com/2020/01/nasa-descubre-planeta-tatooine.jpg"
							width="100%"
							height="95%"
						/>
					</div>
					<div className="details col-lg-6 col-md-12 col-sm-12 mt-3">
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
							<CircularProgress color="warning" />
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

ViewDetailPlanets.propTypes = {
	match: PropTypes.object
};
