import React, { useContext } from "react";
import { Context } from "../store/appContext";

import rigoImageUrl from "../../img/rigo-baby.jpg";
import CostaIMG from "../../img/costa01.jpg";
import MontanaIMG from "../../img/montana02.jpg";
import FamilyIMG from "../../img/family_home.jpg";
import Cyclists from "../../img/cyclists.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	const { store } = useContext(Context);
	return (
		<div className="jumbotron-fluid">
			<div className="container-fluid p-0 ">
				<img
					src="https://cdn.pixabay.com/photo/2019/11/08/07/05/cyclists-4610614_960_720.jpg"
					className="imgCyclists img-fluid jumbotron"
					width="100%"
				/>{" "}
			</div>
			<p className="bienvenido-home">
				Bienvenido a BiciApp, estamos deseando conocerte en nuestra próxima actividad. Te recomendamos que pases
				a ver las próximas actividades, solo son una muestra de lo que acsotumbramos a hacer. No dejes de
				visitar la web ya que vamos actualizando rutas a menudo...
			</p>
			<p className="text-unete">¡¡¡¡ÚNETE A BICIAPP!!!!</p>

			<div className="container py-5 my-5">
				<div className="row text-center ">
					<div className="col mx-auto mb-3">
						<h2 className="text-muted ">PROXIMAS ACTIVIDADES</h2>
					</div>
				</div>
				<div className="card-deck">
					<div className="card">
						<img className="card-img-top" src={FamilyIMG} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title text-center">Eventos</h5>
							<Link to={"/events"}>
								<button className="btn btn-warning">ver detalles</button>
							</Link>
						</div>
					</div>

					<div className="card">
						<img className="card-img-top" src={MontanaIMG} alt="Card image cap" />
						<div className=" card-body">
							<h5 className="card-title text-center">En Montaña</h5>
							<Link to={"/montain"}>
								<button className="btn btn-warning">ver detalles</button>
							</Link>
						</div>
					</div>

					<div className="card">
						<img className="card-img-top" src={CostaIMG} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title text-center">En Costa</h5>
							<Link to={"/beach"}>
								<button className="btn btn-warning">ver detalles</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
