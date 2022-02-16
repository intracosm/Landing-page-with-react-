import React from "react";
import propTypes from "prop-types";
export const Jumbotron = (props) => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3">
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold">{props.jtitle}</h1>
				<p className="col-md-8 fs-4">{props.jbody}</p>
				<button className="btn btn-primary btn-lg" type="button">
					{props.jbtnlabel}
				</button>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	jtitle: propTypes.string,
	jbody: propTypes.string,
	jbtnlabel: propTypes.string,
};
