import React, { Component } from "react";
import { Link } from "react-router-dom";
import { func } from "prop-types";

export const Ruta_completa = () => {
	return (
		<div className="">
			<img className="card-img-top" src="" />
			<div className="card-body">
				<h2 className="card-title text-center">Senda costera en bici o caminando en Llanes, Asturias</h2>
				<h5>
					La senda costera recorre la costa oriental de Asturias y se puede hacer en bici o caminando. Parte
					de Bustio, pueblo limítrofe con Cantabria, y llega hasta Guadamía. Unos 65km de paisajes, playas y
					prados, que se pueden ir descubriendo por etapas. Este fin de semana hemos vuelto a tener un día
					espectacular y no hemos podido evitar el coger las bicis, preparar a las niñas con cascos y
					mochilinas y salir toda la familia de excursión, picnic incluido, para hacer parte de esta ruta
					costera. Desde Llanes hasta la playa de Borizu y sin tráfico. Distancia 12km ida y vuelta.
					Dificultad baja. Apta para niños.
				</h5>
			</div>
		</div>
	);
};
