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
			<div className="d-flex col-lg-12 ruta-card mb-5">
				<div className="col-md-8 ">
					<img
						src="http://3.bp.blogspot.com/-6H949auMUAw/U9nLW1fbSxI/AAAAAAAAKkM/3sUxlurnNdA/s1600/Ruta+del+Alba-+R%C3%ADo+Llaimo+(1).JPG"
						className=" w-100"
						alt="..."
					/>
				</div>
				<div className="col-lg-4">
					<div className="card-body-route ">
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
								ruta alba puntos de la ruta
							</li>
							<li className="listado-ruta">
								<div className="detalles-ruta-listado">Dificultad</div>
								<br />
								Distancia 18km ida y vuelta. Dificultad baja. Apta para niños.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<h4 className="route-title">Descripción</h4>
			<p className="route-descripcion">
				Esta es una de las más conocidas de Asturias y una de esas rutas que podemos hacer una y mil veces y que
				siempre acaba siendo una gran opción. Declarada Monumento Natural en el año 2001, esta ruta de unos 6 km
				de ida y otros 6 de vuelta parte de la localidad de Soto de Agües y discurre paralela al río Alba o
				Llaímo cuya vista nos acompañará prácticamente durante toda la ruta. Por ella podremos disfrutar de sus
				imponentes desfiladeros, todo un paisaje repleto de vegetación de la zona y de pequeños saltos de agua.
				Lo mejor de todo, es que esta ruta es perfecta para niños de todas las edades e incluso es factible para
				llevar sillas de bebés, ya que más de la mitad del camino está pavimentado.
			</p>
		</>
		// <div className="css-body container  py-5 my-5 ">
		// 	<h1 className="card-title text-center p-3">Ruta Alba, Asturias</h1>

		// 	<img
		// 		className="card-img-top p-5 "
		// 		src="http://3.bp.blogspot.com/-6H949auMUAw/U9nLW1fbSxI/AAAAAAAAKkM/3sUxlurnNdA/s1600/Ruta+del+Alba-+R%C3%ADo+Llaimo+(1).JPG"
		// 	/>
		// 	<div className="card-body text justify-center p-5">
		// 		<h5>
		// 			Esta es una de las más conocidas de Asturias y una de esas rutas que podemos hacer una y mil veces y
		// 			que siempre acaba siendo una gran opción. Declarada Monumento Natural en el año 2001, esta ruta de
		// 			unos 6 km de ida y otros 6 de vuelta parte de la localidad de Soto de Agües y discurre paralela al
		// 			río Alba o Llaímo cuya vista nos acompañará prácticamente durante toda la ruta. Por ella podremos
		// 			disfrutar de sus imponentes desfiladeros, todo un paisaje repleto de vegetación de la zona y de
		// 			pequeños saltos de agua. Lo mejor de todo, es que esta ruta es perfecta para niños de todas las
		// 			edades e incluso es factible para llevar sillas de bebés, ya que más de la mitad del camino está
		// 			pavimentado.
		// 		</h5>
		// 	</div>
		// </div>
	);
};
