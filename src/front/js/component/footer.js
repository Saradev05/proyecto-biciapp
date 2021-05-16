import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Footer = () => {
	const { actions } = useContext(Context);
	return (
		<footer className="container mt-auto py-3 text-center  ">
			<h5 className="d-flex align-items-center">
				Made by
				<a className="p-2" href="mailto:info@aleidagonzalez.com">
					Aleida
				</a>
				<i className="p-2 fa fa-bicycle text-success fa-2x  " />
				<a className="p-2 " href="mailto:devyanand@gmail.com">
					Sara{" "}
				</a>
			</h5>
			<p />
		</footer>
	);
};
