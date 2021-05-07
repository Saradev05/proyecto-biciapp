import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import LogoIMG from "../../img/logo.png";
export const Navbar = () => {
	const { actions, store } = useContext(Context);
	return (
		<nav className="navbar  navbar-warning m-0 bg-warning   ">
			<Link to="/">
				<img className="img-logo" src={LogoIMG} />
			</Link>
			<div className="ml-auto">
				<div className="d-grid gap-2 d-md-block m-0 ">
					<Link to="/signup">
						<button className="btn btn-warning font-weight-bold h1 m-2" type="button">
							Registro
						</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-warning font-weight-bold h1 m-2" type="button">
							Entrar
						</button>
					</Link>
					<Link to="/profile">
						<button className="btn btn-warning font-weight-bold h1 m-2" type="button">
							Perfil
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
