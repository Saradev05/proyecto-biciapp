import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>

			<div className="ml-auto">
				<Link to="/demo">
					<div className="d-grid gap-2 d-md-block">
						<button className="btn btn-primary">Check the Context in action</button>

						<button className="btn btn-light" type="button">
							Registro
						</button>
						<button className="btn btn-light" type="button">
							Login
						</button>
					</div>
				</Link>
			</div>
		</nav>
	);
};
