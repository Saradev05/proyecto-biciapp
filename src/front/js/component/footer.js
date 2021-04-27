import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="container-fluid dflex-row ">
			<div className=" col-04" />
			<div className=" col-04">
				<h5 className="madeBy container row align-items-center ">
					Made by
					<a className="ml-2 mr-2" href="mailto:info@aleidagonzalez.com">
						Aleida
					</a>
					<i className="fa fa-bicycle text-success fa-2x  " />
					<a className="ml-2 mr-2" href="mailto:devyanand@gmail.com">
						Sara
					</a>
				</h5>
			</div>
			<div className=" col-4">
				<Link to="/activity">
					<button className="btn btn-light bg-transparent border-0 font-weight-light h1 m-2" type="button">
						Acceso Administrador
					</button>
				</Link>
			</div>
		</div>
	</footer>
);
