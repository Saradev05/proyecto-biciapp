import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Administ = () => {
	const [activity, setActivity] = useState(null);
	// const [password, setPassword] = useState("");
	const [name, setName] = useState(null);
	const [route, setRoute] = useState(null);
	const [dificulty, setDificulty] = useState(null);
	const [description, setDescription] = useState(null);
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const { actions } = useContext(Context);
	const history = useHistory();

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

	function activityUpdate(event) {
		event.preventDefault();
		let responseOk = false;
		fetch(process.env.BACKEND_URL + "/api/activity", {
			method: "POST",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			},
			body: JSON.stringify({
				name: name,
				route: route,
				dificulty: dificulty,
				description: description
			})
		})
			.then(response => {
				responseOk = response.ok;
				return response.json();
			})
			.then(responseJson => {
				console.log(responseJson);
				if (responseOk) {
					setActivity(responseJson);
					setMessage("Actividad guardada correctamente!");
				} else {
					setError(responseJson.msg);
				}
			})
			.catch(error => {
				setError(error.message);
			});
	}

	return (
		<div id="backgrd" className="content-center ">
			<div className="profile_body container-fluid row " width="100%">
				<div className="container py-4">
					<div className="row justify-content-center">
						<div className="card col-md-10 pt-2">
							<div className="css-header card-header h4">Añadir actividad</div>
							{error ? <h1>{error}</h1> : ""}
							{message ? <h1>{message}</h1> : ""}
							<div className="css-body card-body">
								<form onSubmit={activityUpdate}>
									<div className="form-group col-10">
										<label htmlFor="name" className="form-label">
											Nombre de la actividad
										</label>
										<div className="col-md-10">
											<input
												type="name"
												id="name"
												className="name form-control"
												name="name"
												required
												placeholder="nombre"
												onChange={event => setName(event.target.value)}
											/>
										</div>
									</div>
									<div className="form-group col-10">
										<label htmlFor="route" className="form-label ">
											Ruta
										</label>
										<div className="col-md-10">
											<input
												type="route"
												className="route form-control"
												name="route"
												required
												placeholder="Ruta"
												onChange={event => setRoute(event.target.value)}
											/>
										</div>
									</div>
									<div className="form-group col-10">
										<label htmlFor="dificulty" className="form-label ">
											dificultad
										</label>
										<div className="col-md-10">
											<input
												type="dificulty"
												className="dificulty form-control"
												name="dificulty"
												required
												placeholder="dificultad"
												onChange={event => setDificulty(event.target.value)}
											/>
										</div>
									</div>
									<div className="form-group col-10">
										<label htmlFor="description" className="form-label  ">
											descripción
										</label>

										<div className="col-md-10">
											<textarea
												type="description"
												row="3"
												className="form-control "
												name="description"
												required
												placeholder="descripcion"
												onChange={event => setDescription(event.target.value)}
											/>
										</div>
									</div>
									<div className="col-md-6 offset-md-4">
										<button type="submit" className="btn btn-primary">
											Crear actividad
										</button>
										<a href="" className="btn btn-link" />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
