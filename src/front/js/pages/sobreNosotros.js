import React, { useContext } from "react";
import { Context } from "../store/appContext";

import FamilyIMG from "../../img/family_home.jpg";
import Sara from "../../img/sara.jpg";

import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { func } from "prop-types";

export const SobreNosotros = () => {
	const { store } = useContext(Context);

	return (
		<div className="jumbotron-fluid">
			<div className="container-fluid text-center spacebetween py-5 p-0 m-0">
				<img className="card-img-aboutUs mr-5" src={FamilyIMG} alt="" />
				<img className="card-img-aboutUs" src={Sara} alt="Card image cap" />
			</div>
			<p className="bienvenido-home texto-negro text-justify">
				<h1 className="text-center texto-negro p-3">Bienvenido a BiciApp</h1>
				<p>
					Esta aplicación nace de nuestro deseo de compartir nuestra afición de salir en bici en grupo a
					traves de actividades variadas.
				</p>

				<p>
					Nos gusta proponer salidas por la naturaleza mayoritariamente, accesibles a un rango amplio de
					edades y sin una exigencia física extrema. Entre tu y yo, preferimos dar un bonito paseo, disfrutar
					del paisaje, ir conversando con los compañeros , más que apretar el ritmo y terminar con la lengua
					fuera.
				</p>
				<p>
					También sabemos que el caracter y características de las rutas van a ir cambiando según las personas
					que lo conformen, por lo que nos podemos adaptar. Por ello comenta tus preferencias y estudiaremos
					el tema para próximas actividades.
				</p>
				<p>
					También hay eventos públicos situados en zonas urbanas que creemos que son interesantes para
					compartir con la gente que conozcamos en nuestras salidas. Una oportunidad más de estrechar lazos y
					crear una comunidad asistiendo a eventos no necesariamente organizados por nosotros, que por nuestra
					parte seran de caracter gratuito.
				</p>
			</p>
			<center>
				<Link to={"/"}>
					<button className="button-card-body rounded-pill p-3 text-center border-0 shadow ">
						<h5 className="text-center ">Volver a Home</h5>
					</button>
				</Link>
			</center>
		</div>
	);
};
