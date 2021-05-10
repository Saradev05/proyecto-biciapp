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
		<div className="css-body container  py-5 my-5 ">
			<h2 className="card-title text-center">Masa Crítica</h2>

			<img className="card-img-top" src={MasaIMG} />
			<div className="card-body">
				<h5 className="">
					La masa crítica es un movimiento social que tiene lugar todos los meses en numerosas ciudades del
					mundo. Es una salida mensual en bici para reclamar los derechos del ciclista y promover un modelo de
					movilidad sostenible en zonas urbanas. No es una manifestación ni una organización, sólo gente de
					todas las edades montando en bicicleta. Tampoco es una carrera. Es una manera de establecer un
					espacio público donde la gente pueda juntarse, reunirse y conocerse. No tiene dirigentes, no hay una
					organización que autorice los paseos. Un conjunto de ciclistas se reúnen en el mismo lugar, a la
					misma hora y deciden pedalear juntos por un rato, llevando consigo sus ideales y sus formas de
					vivir, compartiéndolas con los demás.
				</h5>
				<h5>
					El nombre de la Masa Crítica se cogió del documental sobre ciclismo de Ted White, Return of the
					Scorcher – 1992. En el reportaje, George Bliss (diseñador estadounidense de bicicletas) describe una
					típica escena en China, donde los ciclistas a menudo no pueden cruzar las calles por la cantidad de
					coches que circulan y por la falta de semáforos. Lentamente, más y más ciclistas se amontonan
					esperando para cruzar la calle, y cuando hay un número suficiente – una «Masa Crítica» como George
					Bliss lo llamó – moviendose todos juntos pueden avanzar sobre los coches y cruzar la calle; Esta fué
					la imagen que inspiró a los primeros ciclistas a adoptar el nombre de Masa Crítica. Cuando la gente
					se reúne con sus bicicletas, pueden llegar a tomar el control de las calles de la ciudad, si su
					número es suficientemente grande. La relación de poder con los conductores de automóviles cambia:
					un/a ciclista puede ser atropellado/a, cinco pueden ser intimidados, pero cincuenta o cien ciclistas
					¡reclaman la calle!
				</h5>
			</div>
		</div>
	);
};
