import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../../styles/index.scss";

export const VistaDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getCharacterDetails(params.id);
		console.log(params, "soy un param!");
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
						className="imgBrazil img-responsive mx-auto d-block"
						src="https://images.theconversation.com/files/289953/original/file-20190828-184192-j9w2v2.jpg"
					/>
				</div>
			</div>
		</Jumbotron>
	);
};

VistaDetail.propTypes = {
	match: PropTypes.object
};
