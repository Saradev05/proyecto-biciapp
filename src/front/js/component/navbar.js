import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-xl fixed top navbar-light bg-light  ">
			<Link to="/">
				<span className="navbar-brand pd-10 mb-0 h1">Biciapp</span>
			</Link>

			<div className="ml-auto">
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
