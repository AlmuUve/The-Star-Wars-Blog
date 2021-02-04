import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

import "../../styles/vistadetail.scss";

export const VistaDetail = () => {
	let { id } = useParams(globalUrl);
	return (
		<Jumbotron>
			<div className="row">
				<h1>Hello!</h1>
				<p>Details</p>
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
