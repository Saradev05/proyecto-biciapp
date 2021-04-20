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
							Registro
						</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-light" type="button">
							Entrar
						</button>
					</Link>
					<Link to="/profile">
						<button className="btn btn-light" type="button">
							Perfil
						</button>
					</Link>
					<Link to="/activity">
						<button className="btn btn-primary" type="button">
							Actividades
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
