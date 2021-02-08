import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "../../styles/index.scss";

export const Contact = () => {
	return (
		<div className="container-fluid d-flex">
			<div className="card">
				<div className="row flex-row">
					<div className="col-lg-4 col-md-4 col-sm-6 mt-3">
						<div className="card-horizontal">
							<div className="img-square-wrapper">
								<img
									src="https://images.unsplash.com/photo-1590426911380-bd4a61d4d3ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
									alt="Card image cap"
									className=" card-img border border-warning"
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-6 mt-3">
						<div className="card-body">
							<h2 className="card-title ">PARADISE FOR WILDLIFE LOVERS</h2>
							<p className="card-text">
								According to Conservation International, just 17 countries are considered “megadiverse”.
								Madagascar is big. It’s 226,917 square miles to be precise, making it the fourth largest
								island on the planet. Real emblem of Malagasy flora, the baobab is a majestic and sacred
								tree that counts eight species. Six of them only grow in Madagascar. The baobab alley
								contains the most specimens in the world, so you will realize their impressive size and
								admire some trunks naturally intertwined. Madagascar is lucky enough to be located close
								to a migration route for whales and, twice a year, the creatures are visible from the
								coast. Between July and September, Sainte-Marie island is the best place to admire a
								whole legion of humpback whales where females come to calve in the warm sea. We
								recommend you not to think about it too much and pack your bags! Madagascar is waiting
								for you!{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
