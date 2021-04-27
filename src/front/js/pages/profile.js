import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/profile.scss";

export const Profile = () => {
	// const [password, setPassword] = useState("");
	const [user, setUser] = useState(null);
	const [bike, setBike] = useState(null);
	const [name, setName] = useState(null);
	const [bType, setBType] = useState(null);
	const [gears, setGears] = useState(null);
	const [wheelInches, setWheelInches] = useState(null);
	const { actions } = useContext(Context);
	const [message, setMessage] = useState("");
	const history = useHistory();

	useEffect(() => {
		let accessToken = actions.getAccessToken();
		if (!accessToken) {
			history.push("/login");
			return;
		}
		fetch(process.env.BACKEND_URL + "/api/profile", {
			method: "GET",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setUser(responseJson));

		fetch(process.env.BACKEND_URL + "/api/user/bikes/", {
			method: "GET",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setBike(responseJson));
	}, []);

	function update(event) {
		event.preventDefault();
		fetch(process.env.BACKEND_URL + "/api/profile", {
			method: "PUT",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			},
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(responseJson => setUser(responseJson));

		setMessage("Perfil guardado correctamente!");
	}

	function bikeUpdate(event) {
		event.preventDefault();
		fetch(process.env.BACKEND_URL + "/api/new_bike", {
			method: "POST",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			},
			body: JSON.stringify({
				b_type: bType,
				name: name,
				wheel_inches: wheelInches,
				gears: gears
			})
		})
			.then(response => {
				if (response.status == 200) {
					return response.json();
				} else {
					throw Error("No se ha guardado");
				}
			})
			.then(responseJson => {
				setBike(responseJson);
				setMessage("Bici guardada correctamente!");
			})
			.catch(error => setMessage(error.message));
	}

	if (!user) {
		return <h1>Loading user....</h1>;
	}
	if (!bike) {
		return <h1>Loading bikes....</h1>;
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-10">
					<div className="card">
						<div className="card-header h4">Perfil de usuario</div>
						<div className="card-body">
							{message ? <h5>{message}</h5> : ""}
							<form className="row g-3">
								<div className="col-md-6">
									<label htmlFor="inputEmail4" className="form-label">
										Email
									</label>
									<input
										type="email"
										className="form-control"
										id="inputEmail4"
										defaultValue={user.email}
										onChange={event => {
											setUser({ ...user, email: event.target.value });
										}}
									/>
								</div>
								<div className="col-md-6">
									<label htmlFor="inputPassword4" className="form-label">
										Contraseña
									</label>
									<input
										type="password"
										className="form-control"
										id="inputPassword4"
										defaultValue={user.password}
										onChange={event => {
											setUser({ ...user, password: event.target.value });
										}}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label" />
									Nombre
									<input
										type="text"
										className="form-control"
										placeholder="Nombre"
										aria-label="First name"
										defaultValue={user.name}
										onChange={event => {
											setUser({ ...user, name: event.target.value });
										}}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label" />
									Apellidos
									<input
										type="text"
										className="form-control"
										placeholder="Apellidos"
										aria-label="Last name"
										defaultValue={user.surname}
										onChange={event => {
											setUser({ ...user, surname: event.target.value });
										}}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label" />
									Usuario
									<input
										type="text"
										className="form-control"
										placeholder="Nombre a mostrar"
										aria-label="First name"
										defaultValue={user.nick_name}
										onChange={event => {
											setUser({ ...user, nick_name: event.target.value });
										}}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label" />
									Edad
									<input
										type="text"
										className="form-control"
										placeholder="edad"
										aria-label="First name"
										defaultValue={user.age}
										onChange={event => {
											setUser({ ...user, age: event.target.value });
										}}
									/>
								</div>
								<div className="col-6">
									<label htmlFor="inputAddress" className="form-label">
										dirección
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="Calle , num"
										defaultValue={user.address1}
										onChange={event => {
											setUser({ ...user, address1: event.target.value });
										}}
									/>
								</div>
								<div className="col-6">
									<label htmlFor="inputAddress" className="form-label">
										detalles de dirección
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="piso, escalera, puerta"
										defaultValue={user.address2}
										onChange={event => {
											setUser({ ...user, address2: event.target.value });
										}}
									/>
								</div>
								<div className="col-md-6">
									<label htmlFor="inputCity" className="form-label">
										Ciudad
									</label>
									<input
										type="text"
										className="form-control"
										id="inputCity"
										defaultValue={user.city}
										onChange={event => {
											setUser({ ...user, city: event.target.value });
										}}
									/>
								</div>
								<div className="col-md-6">
									<label htmlFor="inputZip" className="form-label">
										Codigo postal
									</label>
									<input
										type="text"
										className="form-control"
										id="inputZip"
										defaultValue={user.postal_code}
										onChange={event => {
											setUser({ ...user, postal_code: event.target.value });
										}}
									/>
								</div>
								<div className="col-12" />
								<div className="col-12">
									<button type="submit" className="btn btn-primary m-2" onClick={update}>
										Guardar datos
									</button>
									{"  "}
									<button type="submit" className="btn btn-primary">
										Borrar
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="card">
						<div className="card-header h4">Datos de bicicleta</div>
						<div className="card-body">
							{message ? <h5>{message}</h5> : ""}
							<form className=" row g-3  col-md-10 " id="bikes">
								<div className="col-md-6">
									<label htmlFor="b_type" className="form-label">
										Tipo de bici
									</label>
									<select
										type="text"
										placeholder="seleccionar tipo de bici"
										className="form-control "
										defaultValue={bike ? bike.b_type : ""}
										onChange={event => {
											setBType(event.target.value);
										}}>
										<option value="sin seleccionar">escoger una opción </option>
										<option value="MTB">MTB</option>
										<option value="Carretera">Carretera</option>
										<option value="paseo">paseo</option>
									</select>
								</div>
								<div className="col-md-6">
									<label className="form-label" />
									Le has puesto nombre?
									<input
										type="text"
										className="form-control"
										placeholder="Nombre"
										aria-label="First name"
										defaultValue={bike.name}
										onChange={event => {
											setName(event.target.value);
										}}
									/>
								</div>
								<div className="col-md-6">
									<label htmlFor="b_type" className="form-label">
										diametro de rueda
									</label>
									<select
										type="text"
										placeholder="diametro de rueda"
										className="form-control"
										defaultValue={bike ? bike.wheel_inches : ""}
										onChange={event => {
											setWheelInches(event.target.value);
										}}>
										<option value="sin seleccionar">escoger una opción </option>
										<option value="28+">28 pulgadas o más</option>
										<option value="20-27">20 a 27 pulgadas</option>
										<option value="19-">menos de 20 pulgadas</option>
									</select>
								</div>
								<div className="col-md-6">
									<label htmlFor="b_type" className="form-label">
										marchas
									</label>
									<select
										type="text"
										placeholder="diametro de rueda"
										className="form-control"
										defaultValue={bike ? bike.gears : ""}
										onChange={event => {
											setGears(event.target.value);
										}}>
										<option value="sin seleccionar">escoger una opción </option>
										<option selected>30 marchas o mas</option>
										<option>15 a 29 marchas</option>
										<option>menos de 15 marchas</option>
									</select>
								</div>
								<div className="col-12 m-2">
									<button type="submit" className="btn btn-primary" onClick={bikeUpdate}>
										Guardar bici
									</button>
									{"  "}
									<button type="submit" className="btn btn-primary">
										Borrar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
