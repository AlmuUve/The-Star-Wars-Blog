import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import "../../styles/index.scss";

export const PlanetsCard = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="cardContainer">
			{store.planets.map((planet, index) => {
				return (
					<Card key={index.toString()}>
						<Card.Img
							variant="top"
							src="https://i.pinimg.com/originals/3b/41/e0/3b41e03ad3c84c445840a567cd922eb8.jpg"
						/>
						<Card.Body>
							<Card.Title> {planet.name} </Card.Title>
						</Card.Body>
						<Card.Footer>
							<Link to={"/planetsdetails/" + planet.uid} className="link_to">
								<button className="btn">Learn more</button>
							</Link>
							<Link>
								<button
									className="btn bg-transparent"
									onClick={() => actions.setMyFavourites(planet.name)}>
									<i className="fa fa-heart animate__animated animate__heartBeat animate__infinite	infinite" />
								</button>
							</Link>
						</Card.Footer>
					</Card>
				);
			})}
			<button className="next-page-button btn col-12" onClick={() => actions.getPlanets()}>
				Next Page
			</button>
		</div>
	);
};
