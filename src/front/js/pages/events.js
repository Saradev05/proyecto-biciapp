import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import MasaIMG from "../../img/masacrit.jpg";

export const Events = () => {
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const { actions } = useContext(Context);
	const history = useHistory();

	return (
		<>
			<div className="container">
				<div className="events-card d-flex col-lg-12 events-card my-5">
					<div className="col-md-6 ">
						<img className="card-img-top p-5" src={MasaIMG} />
					</div>
					<div className="col-md-6">
						<div className="card-body-routeevents ">
							<h3 className="card-header-route">
								<div className="detalles-ruta">DETALLES DE LA RUTA</div>
							</h3>

							<ul className="ulCss">
								<li className="listado-ruta">
									<div className="detalles-ruta-listado">Nombre </div>
									<br />
									Masa crítica
								</li>
								<li className="listado-ruta">
									<div className="detalles-ruta-listado">Ruta</div>
									<br />
<<<<<<< HEAD
									Fecha: Primer viernes de cada mes <br />
=======
>>>>>>> 3caeb091b21f72e4d53e781a538004bfb038ad63
									Salida desde La Losa y recorrido por las calles de Oviedo
								</li>
								<li className="listado-ruta">
									<div className="detalles-ruta-listado">Dificultad</div>
									<br />
<<<<<<< HEAD
									Dificultad baja.
									<br /> Apta para niños.
=======
									Dificultad baja. Apta para niños.
>>>>>>> 3caeb091b21f72e4d53e781a538004bfb038ad63
								</li>
							</ul>
						</div>
					</div>
				</div>

				<h4 className="route-title">Descripción</h4>
				<p className="text-black route-descripcion-events">
					Es un movimiento social que tiene lugar todos los meses en numerosas ciudades del mundo. Es una
					salida en bici para reclamar los derechos del ciclista y promover un modelo de movilidad sostenible
					en zonas urbanas. No es una manifestación ni una organización, tampoco es una carrera. Es una manera
					de establecer un espacio público donde la gente pueda juntarse, reunirse y conocerse. No tiene
					dirigentes, no hay una organización que autorice los paseos. Un conjunto de ciclistas se reúnen en
					el mismo lugar, a la misma hora y deciden pedalear juntos por un rato, llevando consigo sus ideales
					y sus formas de vivir, compartiéndolas con los demás.
				</p>
			</div>
		</>
	);
};
