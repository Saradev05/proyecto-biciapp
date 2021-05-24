import React, { useContext } from "react";
import { Context } from "../store/appContext";

import FamilyIMG from "../../img/family_home.jpg";
import Sara from "../../img/sara3.jpg";
import Aleida from "../../img/aleida1.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { func } from "prop-types";

export const AboutUs = () => {
	const { store } = useContext(Context);

	return (
		<div className="aboutUsContainer container py-5">
			<div className="row text-center ">
				<div className="col-mb-12 col-sm-12 ">
					<h2 className="texto-negro mb-2">ASÍ EMPEZÓ TODO...</h2>
				</div>
			</div>
			<div className="card-deck flex-box  py-5 ">
				<div className="card-about-us card fotoAboutUs col-mb-6 col-sm-12 aleida">
					<img className="card-img-aboutUs mr-5" src={Aleida} alt="Card imgage cap" />
				</div>
				<div className="card-about-us card fotoAboutUs col-mb-6 col-sm-12 sara">
					<img className="card-img-aboutUs" src={Sara} alt="Card imgage cap" />
				</div>
			</div>
			<div className="card-about-us card col-mb-12 col-sm-12 card-body">
				<p className="bienvenidoAboutUs texto-negro text-justify">
					<p>
						Esta aplicación nace de nuestro deseo de compartir nuestra afición de salir en bici en grupo a
						traves de actividades variadas.
					</p>

					<p>
						Nos gusta proponer salidas por la naturaleza mayoritariamente, accesibles a un rango amplio de
						edades y sin una exigencia física extrema. Preferimos dar un bonito paseo, disfrutar del
						paisaje, ir conversando con los compañeros , más que apretar el ritmo y terminar con la lengua
						fuera.
					</p>
					<p>
						También sabemos que el caracter y características de las rutas van a ir cambiando según las
						personas que lo conformen, por lo que nos podemos adaptar. Por ello comenta tus preferencias y
						estudiaremos el tema para próximas actividades.
					</p>
					<p>
						También hay eventos públicos situados en zonas urbanas que creemos que son interesantes para
						compartir con la gente que conozcamos en nuestras salidas. Una oportunidad más de estrechar
						lazos y crear una comunidad asistiendo a eventos no necesariamente organizados por nosotros, que
						por nuestra parte seran de caracter gratuito.
					</p>
				</p>
				<center>
					<Link to={"/"}>
						<button className="button-card-body rounded-pill p-3 mt-3 text-center border-0 shadow ">
							<h5 className="text-center ">Volver a Home</h5>
						</button>
					</Link>
				</center>
			</div>
		</div>
	);
};
