import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
export const Navbar = () => {
	const { actions, store } = useContext(Context);
	return (
		<nav className="navbar  fixed top navbar-light m-0 bg-light h3  ">
			<Link to="/">
				<h2 className="navbar-brand p-8 mb-0 ">Biciapp</h2>
			</Link>
			<div className="ml-auto">
				<div className="d-grid gap-2 d-md-block m-0 ">
					<Link to="/signup">
						<button className="btn btn-light font-weight-bold h1 m-2" type="button">
							Registro
						</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-light font-weight-bold h1 m-2" type="button">
							Entrar
						</button>
					</Link>
					<Link to="/profile">
						<button className="btn btn-light font-weight-bold h1 m-2" type="button">
							Perfil
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
