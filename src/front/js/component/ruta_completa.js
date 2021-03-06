import React, { Component } from "react";
import { Link } from "react-router-dom";
import { func } from "prop-types";

export const Ruta_completa = () => {
	return (
		<>
			<div className="d-flex col-lg-12 ruta-card mb-5">
				<div className="col-md-8 ">
					<img
						src="https://i.pinimg.com/originals/22/ba/5a/22ba5a6124273c42823f3572878b02ea.jpg "
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
								Senda costera de Llanes a Borizu
							</li>
							<li className="listado-ruta">
								<div className="detalles-ruta-listado">Ruta</div>
								<br />
								Punto de encuentro:Puerto maritimo de Llanes Fecha:19 de junio de 2021.
								<br /> La senda costera recorre la costa oriental de Asturias. Parte de Bustio, pueblo
								limítrofe con Cantabria, y llega hasta Guadamía. Unos 65km de paisajes, playas y prados,
								que se pueden ir descubriendo por etapas
							</li>
							<li className="listado-ruta">
								<div className="detalles-ruta-listado">Dificultad</div>
								<br />
								Distancia 12km ida y vuelta.
								<br /> Dificultad baja.
								<br /> Apta para niños.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<h4 className="route-title">Descripción</h4>
			<p className="route-descripcion">
				Llanes se encuentra enclavada en la franja costera entre la sierra del Cuera y el mar Cantábrico, área
				incluida en el paisaje protegido de la Costa Oriental, rica en paisaje y en historia, con abundantes
				muestras de actuaciones del hombre desde el paleolítico. Por aquí pasaba la vía romana entre Oyarzum y
				La Coruña, y en estas tierras comenzaron las correrías de la reconquista. Hoy Llanes es una villa
				pujante, cargada de buena arquitectura: palacios medievales y palacetes indianos, con especial brillo en
				el edificio del Casino. Desde el paseo de San Pedro, balcón al mar de la Villa, se inicia la senda que
				se dirige hacia el oeste, en dirección a Poo. Superado el casco urbano se inician las praderías,
				cruzando el paraje conocido como Malzapato, a 1 km del inicio, y dejando a la derecha La Atalá y la
				Punta de Xarri. La senda avanza entre fincas en las que sestean rebaños de vacas de la raza autóctona
				Asturiana de los Valles. Son las praderas de Los Jorcaos. A la izquierda, se observa la vieja carretera
				a Oviedo y la vía del tren. Detrás de la vía del ferrocarril se observa la sierra del Cuera, responsable
				de que la comarca sea la zona más lluviosa de Asturias, y la Sierra Plana de La Borbolla. A 3 km, se
				alcanza el paraje de Alburri. Poco después se llega a las inmediaciones de Poo. La senda vira hacia el
				norte, hacia la playa, que es digna de visitar. Tras el pueblo, la senda cruza el río La Vallina,
				acercándose entre prados a la isla de Poo. Es el paraje de El Portillo. Desde esas alturas se ven bien
				los islotes, que aquí llaman castros: castro de Poo, Pelau, San Martín, Gaiteru, Amielles. Se alcanza La
				Boriza a 6 km. Sólo queda ir bajando hacia Celorio, a los 6,8 km, aparece la hermosa playa de Las
				Cámaras, final de recorrido.
			</p>
		</>
	);
};
