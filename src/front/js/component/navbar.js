import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar  fixed top navbar-light bg-light h3  ">
			<Link to="/">
				<h2 className="navbar-brand pd-10 mb-0 ">Biciapp</h2>
			</Link>

			<div className="ml-auto">
				<div className="d-grid gap-2 d-md-block ">
					<Link to="/signup">
						<button className="btn btn-light font-weight-bold h1" type="button">
							Sign Up
						</button>
						{"   "}
					</Link>
					<Link to="/login">
						<button className="btn btn-light font-weight-bold h1" type="button">
							Log In
						</button>
						{"   "}
					</Link>
					<Link to="/profile">
						<button className="btn btn-light font-weight-bold h1" type="button">
							Profile
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
