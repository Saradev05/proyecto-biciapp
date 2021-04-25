import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div id="backgrd" className="text-center ">
			<div className="home_body container-fluid row " width="100%">
				<div className="col-8 "> </div>
				<div className=" col-4">
					{" "}
					actividades columna
					<div className="card">
						<div className="card-header">
							<h3>PROXIMAS ACTIVIDADES</h3>{" "}
						</div>
						<div className="card-body">
							<div className="card-title">AQUI VAN LAS TARJETAS DE ACTIVIDADES VISTA CORTA</div>
							<p className="card-text">
								With supporting text below as a natural lead-in to additional content.
							</p>
							<div className="card-title">AQUI VAN LAS TARJETAS DE ACTIVIDADES VISTA CORTA</div>
							<p className="card-text">
								With supporting text below as a natural lead-in to additional content.
							</p>
							<div className="card-title">AQUI VAN LAS TARJETAS DE ACTIVIDADES VISTA CORTA</div>
							<p className="card-text">
								With supporting text below as a natural lead-in to additional content.
							</p>
							<a href="#" className="btn btn-primary">
								Ver todas las actividades
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
