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
	// let activitymap = [];
	// if (activity != null) {
	// 	activitymap = activity.map((eachactivity, index) => {
	// 		return (
	// 			<div key={index}>
	// 				<div className="card-header">Actividad</div>
	// 				<div className="card-body">
	// 					<p>
	// 						nombre:
	// 						{eachactivity.name}
	// 					</p>
	// 					<p>
	// 						ruta:
	// 						{eachactivity.route}
	// 					</p>
	// 					<p>
	// 						dificultad:
	// 						{eachactivity.dificulty}
	// 					</p>
	// 					<p>
	// 						descripcion:
	// 						{eachactivity.description}
	// 					</p>
	// 				</div>
	// 			</div>
	// 		);
	// 	});
	// }
	return (
		<div className=" container  py-5 my-5">
			{error ? <h1>{error}</h1> : ""}
			{message ? <h1>{message}</h1> : ""}
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="card">
						<div className="card-header">Añadir actividad</div>
						<div className="card-body">
							<form onSubmit={activityUpdate}>
								<div className="form-group row">
									<label htmlFor="name" className="col-md-4 col-form-label text-md-right">
										Nombre de la actividad
									</label>
									<div className="col-md-6">
										<input
											type="name"
											id="name"
											className="name"
											name="name"
											required
											placeholder="nombre"
											onChange={event => setName(event.target.value)}
										/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="route" className="col-md-4 col-form-label text-md-right">
										Ruta
									</label>
									<div className="col-md-6">
										<input
											type="route"
											className="route"
											name="route"
											required
											placeholder="Ruta"
											onChange={event => setRoute(event.target.value)}
										/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="dificulty" className="col-md-4 col-form-label text-md-right">
										dificultad
									</label>
									<div className="col-md-6">
										<input
											type="dificulty"
											className="dificulty"
											name="dificulty"
											required
											placeholder="dificultad"
											onChange={event => setDificulty(event.target.value)}
										/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="description" className="col-md-4 col-form-label text-md-right">
										descripción
									</label>
									<div className="col-md-6">
										<input
											type="description"
											className="description"
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
			{/* <div className="row">
				<div className="card card-vista">{activity ? activitymap : ""}</div>
			</div> */}
		</div>
	);
};