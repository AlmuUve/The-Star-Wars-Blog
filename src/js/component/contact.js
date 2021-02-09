import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Starship from "../../img/Millenium_Falcon.png";
import "../../styles/index.scss";

export const Contact = () => {
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
						<h1 className="title_details">Almu Skywalker</h1>
						<p>Birth year: </p>
						<p>Eye color: </p>
						<p>Gender: </p>
						<p>Hair color: </p>
						<p>Heigth: </p>
						<p>Mass: </p>
						<p>Skin color</p>
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
						<h1 className="title_details">Rafaela Stardust</h1>
						<p>Birth year: </p>
						<p>Eye color: </p>
						<p>Gender: </p>
						<p>Hair color: </p>
						<p>Heigth: </p>
						<p>Mass: </p>
						<p>Skin color</p>
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
