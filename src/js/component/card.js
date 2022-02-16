import React from "react";
import propTypes from "prop-types";
export const Card = (props) => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.imageURL} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: propTypes.string,
	description: propTypes.string,
	buttonLabel: propTypes.string,
	buttonURL: propTypes.string,
	imageURL: propTypes.string,
};
