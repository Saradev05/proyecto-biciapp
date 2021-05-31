import React, { Component, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import MasaIMG from "../../img/masacrit.jpg";
import { func } from "prop-types";

export const Activity = () => {
	const { actions } = useContext(Context);
	const [activity, setActivity] = useState(null);

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/api/activity/", {
			method: "GET",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setActivity(responseJson));
	}, []);

	let activitymap = [];
	if (activity != null) {
		activitymap = activity.map((eachactivity, index) => {
			return (
				<div className="card card-vista" key={index}>
					{/* <div className="col-md-8 ">
						<img
							src="https://i.pinimg.com/originals/22/ba/5a/22ba5a6124273c42823f3572878b02ea.jpg "
							className=" w-100"
							alt="..."
						/>
					</div> */}

					<div className="card-body-route ">
						<h3 className="card-header-route">
							<div className="detalles-ruta">ACTIVIDAD</div>
						</h3>
						<div className="css-body card-body">
							<ul className="ulCss">
								<li className="listado-ruta">
									<div className="detalles-ruta-listado">Nombre </div>
									<br />
									{eachactivity.name}
								</li>

								<li className="listado-ruta">
									<div className="detalles-ruta-listado">Ruta</div>
									<br />

									{eachactivity.route}
								</li>
								<li className="listado-ruta">
									<div className="detalles-ruta-listado">Dificultad</div>
									<br />

									{eachactivity.dificulty}
								</li>
							</ul>
							<h4 className="route-title-actividad">Descripción</h4>
							<p className="route-descripcion-actividad">{eachactivity.description}</p>
						</div>
					</div>
				</div>
			);
		});
	}
	return (
		<div className="container ">
			<div className="d-flex col-lg-12 ruta-card mb-5">
				<div className="col-md-6 ">
					<img className="img-activity py-4 rounded border border-warning" src={MasaIMG} />
				</div>
				<div className="col-md-6">{activity ? activitymap : ""}</div>
			</div>
		</div>
	);
};
