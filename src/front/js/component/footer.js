import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Footer = () => {
	const { actions } = useContext(Context);
	return (
		// <footer className="container-fluid d-flex py-3 content-center justify-content: space-around">
		// 	<div className="col-4 text-justify ">
		// 		<h5 className="row align-items-center">
		// 			Made by
		// 			<a className="p-2" href="mailto:info@aleidagonzalez.com">
		// 				Aleida
		// 			</a>
		// 			<i className="p-2 fa fa-bicycle text-success fa-2x  " />
		// 			<a className="p-2 ml-2" href="mailto:devyanand@gmail.com">
		// 				Sara
		// 			</a>
		// 		</h5>
		// 	</div>
		// </footer>
		<footer className="footer container mt-auto py-3 text-center">
			<h5 className="row ml-50 align-items-center">
				Made by{" "}
				<a className="p-2" href="mailto:info@aleidagonzalez.com">
					Aleida{" "}
				</a>
				<i className="p-2 fa fa-bicycle text-success fa-2x  " />{" "}
				<a className="p-2 ml-2" href="mailto:devyanand@gmail.com">
					Sara{" "}
				</a>{" "}
			</h5>
		</footer>
	);
};
