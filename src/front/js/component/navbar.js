import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Biciapp</span>
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
					{store.isAdmin ? (
						<Link to="/administ">
							<button className="btn btn-primary" type="button">
								Administración
							</button>
						</Link>
					) : (
						""
					)}
				</div>
			</div>
		</nav>
	);
};
