import React, { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Starship from "../../img/Millenium_Falcon.png";
import "../../styles/index.scss";

export const ViewDetailCharacters = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getCharacterDetails(params.id);
	}, []);

	return (
		<Fragment>
			<div className="container">
				<div className="row flex-row">
					<div className="col-lg-6 col-md-12 col-sm-12 mt-3">
						<img
							className="image_details"
							src="https://www.thesun.co.uk/wp-content/uploads/2021/01/1feed1d1-bcca-43c0-988f-81e0ca6bbfb1.jpg"
							width="100%"
							height="95%"
						/>
					</div>
					<div className="details col-lg-6 col-md-12 col-sm-12 mt-3">
						{store.characterDetails.length > 0 ? (
							<>
								<h1 className="title_details">{store.characterDetails[0].name}</h1>
								<p>Birth year: {store.characterDetails[0].birth_year}</p>
								<p>Eye color: {store.characterDetails[0].eye_color}</p>
								<p>Gender: {store.characterDetails[0].gender}</p>
								<p>Hair color: {store.characterDetails[0].hair_color}</p>
								<p>Heigth: {store.characterDetails[0].heigth}</p>
								<p>Mass: {store.characterDetails[0].mass}</p>
								<p>Skin color: {store.characterDetails[0].skin_color}</p>
								{/* <p>Homeworld: {store.planetDetails[0].name}</p> */}
							</>
						) : (
							<CircularProgress color="warning" />
						)}
					</div>
				</div>
			</div>
			{/* <div className="button_container">
				<Link to="/characters/">
					<button className="button_back_home">
						<img className="button_image_details" src={Starship} />
					</button>
				</Link>
			</div> */}
		</Fragment>
	);
};

ViewDetailCharacters.propTypes = {
	match: PropTypes.object
};
