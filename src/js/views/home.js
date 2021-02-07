import React from "react";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="starwars-demo">
			<img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star" />
			<img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" />
			<h2 className="byline" id="byline">
				Return of the Jedi
			</h2>
		</div>
	</div>
);
