import React, { useState, useContext, useEffect, Component } from "react";
import { Context } from "../store/appContext";
import { useHistory, Link } from "react-router-dom";
import { func } from "prop-types";

export const Mountain = () => {
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const { actions } = useContext(Context);
	const history = useHistory();

	return (
		<>
			<div className="container">
				<div className="mountain-card d-flex col-lg-12 ruta-card my-5">
					<div className="col-md-6 ">
						<img
							src="http://3.bp.blogspot.com/-6H949auMUAw/U9nLW1fbSxI/AAAAAAAAKkM/3sUxlurnNdA/s1600/Ruta+del+Alba-+R%C3%ADo+Llaimo+(1).JPG"
							className="img-mountain "
							alt="..."
						/>
					</div>
					<div className="col-md-6">
						<div className="card-body-routemountain ">
							<h3 className="card-header-route">
								<div className="detalles-ruta">DETALLES DE LA RUTA</div>
							</h3>

							<ul className="ulCss">
								<li className="listado-ruta">
									<div className="detalles-ruta-listado">Nombre </div>
									<br />
									Ruta Alba
								</li>
								<li className="listado-ruta">
									<div className="detalles-ruta-listado">Ruta</div>
									<br />
									Punto de encuentro: Soto de Agües <br />
									Fecha: 12 de Junio <br />
									Salida desde Soto de Agües, siguiendo el río Alba. Km 3,4 a nuestra izquierda
									hallamos una casita, a la que se accede por un puente de madera. 2km más y llegamos
									a una zona de descanso con una bifurcación. Seguimos por el camino de la izquierda.
									Km 6,8 llegamos a un puente que nos lleva a la Cruz de los Ríos, donde termina el
									recorrido de ida.
								</li>
								<li className="listado-ruta">
									<div className="detalles-ruta-listado">Dificultad</div>
									<br />
									Distancia 18km ida y vuelta. <br /> Dificultad baja. <br /> Apta para niños.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<h4 className="route-title">Descripción</h4>
				<p className="text-black route-descripcion-mountain">
					Esta es una de las más conocidas de Asturias y una de esas rutas que podemos hacer una y mil veces y
					que siempre acaba siendo una gran opción. Declarada Monumento Natural en el año 2001, esta ruta de
					unos 6 km de ida y otros 6 de vuelta parte de la localidad de Soto de Agües y discurre paralela al
					río Alba o Llaímo cuya vista nos acompañará prácticamente durante toda la ruta. Por ella podremos
					disfrutar de sus imponentes desfiladeros, todo un paisaje repleto de vegetación de la zona y de
					pequeños saltos de agua. Lo mejor de todo, es que esta ruta es perfecta para niños de todas las
					edades e incluso es factible para llevar sillas de bebés, ya que más de la mitad del camino está
					pavimentado.
				</p>
			</div>
		</>
	);
};
