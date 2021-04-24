import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	return (
		<nav className="navbar  fixed top navbar-light bg-light h3  ">
			<Link to="/">
				<h2 className="navbar-brand pd-10 mb-0 ">Biciapp</h2>
			</Link>

			<div className="ml-auto">
				<div className="d-grid gap-2 d-md-block ">
					<Link to="/signup">
						<button className="btn btn-light font-weight-bold h1" type="button">
							Registro
						</button>
						{"   "}
					</Link>
					<Link to="/login">
						<button className="btn btn-light font-weight-bold h1" type="button">
							Entrar
						</button>
						{"   "}
					</Link>
					<Link to="/profile">
						<button className="btn btn-light font-weight-bold h1" type="button">
							Perfil
						</button>
					</Link>
					<Link to="/activity">
						<button className="btn btn-primary font-weight-bold h1" type="button">
							Actividades
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
