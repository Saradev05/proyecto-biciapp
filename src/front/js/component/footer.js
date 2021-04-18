import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made by{" "}
			<a href="http://www.4geeksacademy.com">
				Aleida <i className="fa fa-bicycle fa-2x fa-lg text-success " /> Sara
			</a>
		</p>
		<div className="col-md-6 offset-md-4">
			<Link to="/administ">
				<button className="btn btn-primary" type="button">
					Administración
				</button>
			</Link>
		</div>
	</footer>
);
