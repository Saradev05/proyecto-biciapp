import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
export const Home = () => {
	const { store } = useContext(Context);
	return (
		<div id="backgrd" className="text-center " width="100%">
			<img src="https://cdn.pixabay.com/photo/2019/11/08/07/05/cyclists-4610614_960_720.jpg" />
			<div className="home_body container-fluid row ">
				<div className="col-8 "> </div>

				<div className="col-12" />
				<div className=" col-12">
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
