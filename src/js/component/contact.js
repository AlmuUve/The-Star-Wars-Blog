import React, { Fragment } from "react";
import "../../styles/index.scss";

export const Contact = () => {
	return (
		<Fragment>
			<div className="container">
				<div className="row flex-row">
					<div className="col-lg-6 col-md-12 col-sm-12 mt-3">
						<img
							className="image_details"
							src="https://i.imgur.com/3D70y19.jpg"
							width="100%"
							height="95%"
						/>
					</div>
					<div className="details col-lg-6 col-md-12 col-sm-12 mt-3">
						<h1 className="title_details">Almu Skywalker</h1>
						<a href="https://www.linkedin.com/in/almudenavelazquezcalzada/">
							<img src="https://img.icons8.com/fluent/96/000000/linkedin.png" />
						</a>
						<a href="https://github.com/AlmuUve">
							<img src="https://img.icons8.com/material-sharp/96/000000/github.png" />
						</a>
						<a href="mailto: avelazqc@gmail.com">
							<img src="https://img.icons8.com/fluent/96/000000/gmail--v1.png" />
						</a>
						<a href="https://wa.me/+34655422008">
							<img src="https://img.icons8.com/fluent/96/000000/whatsapp.png" />
						</a>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row flex-row">
					<div className="col-lg-6 col-md-12 col-sm-12 mt-3">
						<img
							className="image_details"
							src="https://scontent.fmad10-2.fna.fbcdn.net/v/t1.0-9/44031571_1042806932566345_2435186383124430848_n.jpg?_nc_cat=106&ccb=3&_nc_sid=174925&_nc_ohc=PdX5Qk2qd-wAX_KuhwZ&_nc_ht=scontent.fmad10-2.fna&oh=20a2084226f8e0920a786bf61f46f942&oe=604F3DDA"
							width="100%"
							height="95%"
						/>
					</div>
					<div className="details col-lg-6 col-md-12 col-sm-12 mt-3">
						<h1 className="title_details">Rafaela Stardust</h1>
						<a href="https://www.linkedin.com/in/rafaelagcalves/">
							<img src="https://img.icons8.com/fluent/96/000000/linkedin.png" />
						</a>
						<a href="https://github.com/rafaelagcalves">
							<img src="https://img.icons8.com/material-sharp/96/000000/github.png" />
						</a>
						<a href="mailto: rafaelagcalves@gmail.com">
							<img src="https://img.icons8.com/fluent/96/000000/gmail--v1.png" />
						</a>
						<a href="https://wa.me/+34682419316">
							<img src="https://img.icons8.com/fluent/96/000000/whatsapp.png" />
						</a>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
