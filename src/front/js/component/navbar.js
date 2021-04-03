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
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>

				<div className="d-grid gap-2 d-md-block">
					<Link to="/signup">
						<button className="btn btn-light" type="button">
							Sign Up
						</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-light" type="button">
							Log In
						</button>
					</Link>
					<Link to="/profile">
						<button className="btn btn-light" type="button">
							Profile
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
