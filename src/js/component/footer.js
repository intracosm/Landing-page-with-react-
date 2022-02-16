import React from "react";
import propTypes from "prop-types";
export const Footer = (props) => {
	return (
		<div className="bg-dark mt-5 mb-0">
			<p className="text-white p-4 text-center mb-0">
				<a href="#">
					Copyright &copy; {props.devname} {props.date}
				</a>
			</p>
		</div>
	);
};
Footer.propTypes = {
	devinitials: propTypes.string,
	date: propTypes.string,
};
