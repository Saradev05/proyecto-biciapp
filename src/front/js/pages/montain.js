import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Montain = () => {
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const { actions } = useContext(Context);
	const history = useHistory();

	return (
		<div className="css-body container  py-5 my-5 ">
			<h2 className="card-title text-center">Ruta Alba, Asturias</h2>

			<img
				className="card-img-top"
				src="http://3.bp.blogspot.com/-6H949auMUAw/U9nLW1fbSxI/AAAAAAAAKkM/3sUxlurnNdA/s1600/Ruta+del+Alba-+R%C3%ADo+Llaimo+(1).JPG"
			/>
			<div className="card-body">
				<h5>
					Esta es una de las más conocidas de Asturias y una de esas rutas que podemos hacer una y mil veces y
					que siempre acaba siendo una gran opción. Declarada Monumento Natural en el año 2001, esta ruta de
					unos 6 km de ida y otros 6 de vuelta parte de la localidad de Soto de Agües y discurre paralela al
					río Alba o Llaímo cuya vista nos acompañará prácticamente durante toda la ruta. Por ella podremos
					disfrutar de sus imponentes desfiladeros, todo un paisaje repleto de vegetación de la zona y de
					pequeños saltos de agua. Lo mejor de todo, es que esta ruta es perfecta para niños de todas las
					edades e incluso es factible para llevar sillas de bebés, ya que más de la mitad del camino está
					pavimentado.
				</h5>
			</div>
		</div>
	);
};
