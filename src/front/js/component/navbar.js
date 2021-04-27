import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import LogoIMG from "../../img/logo.png";
export const Navbar = () => {
	const { actions, store } = useContext(Context);
	return (
		<nav className="navbar  navbar-light m-0 bg-light h3  ">
			<Link to="/">
				<img className="img-logo" src={LogoIMG} />
			</Link>
			<div className="ml-auto">
				<div className="d-grid gap-2 d-md-block m-0 ">
					<Link to="/signup">
						<button className="btn btn-outline-light text-muted" type="button">
							registro
						</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-outline-light text-muted mx-2" type="button">
							entrar
						</button>
					</Link>
					<Link to="/profile">
						<button className="btn btn-outline-light text-muted" type="button">
							perfil
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
