import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import LogoIMG from "../../img/logot2.png";
export const Navbar = () => {
	const { actions, store } = useContext(Context);
	return (
		<nav className="navbar ">
			<Link to="/">
				<img src={LogoIMG} className="rounded-right" alt="..." />
			</Link>
			<div className="ml-auto">
				<div className="d-grid gap-2 .d-md-block .d-sm-none col-md-12 col-sm-12 m-0 ">
					<Link to="/signup">
						<button type="button" className="btn btnb font-weight-bold h1 m-2">
							Registro
						</button>
					</Link>
					{actions.getAccessToken() ? (
						<Link to="/">
							<button
								onClick={() => {
									actions.removeToken();
								}}
								className="btn btnb font-weight-bold h1 m-2"
								type="button">
								Salir
							</button>
						</Link>
					) : (
						<Link to="/login">
							<button className="btn btnb font-weight-bold h1 m-2" type="button">
								Entrar
							</button>
						</Link>
					)}

					<Link to="/profile">
						<button className="btn btnb font-weight-bold h1 m-2" type="button">
							Perfil
						</button>
					</Link>
					<Link to="/activity">
						<button className="btn btnb font-weight-bold h1 m-2" type="button">
							Actividades
						</button>
					</Link>

					{actions.isAdmin() ? (
						<Link to="/administ">
							<button className="btn btnb font-weight-bold h1 m-2" type="button">
								Acceso Administrador
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
