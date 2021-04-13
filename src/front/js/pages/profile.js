import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Profile = () => {
	const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	const [user, setUser] = useState(null);
	const [bike, setBike] = useState(null);
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

		fetch(process.env.BACKEND_URL + "/api/user/bikes", {
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

		fetch(process.env.BACKEND_URL + "/api/new_bike", {
			method: "POST",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			},
			body: JSON.stringify({
				b_type: b_type,
				wheel_inches: wheel_inches,
				gears: gears
			})
		})
			.then(response => response.json())
			.then(responseJson => setBike(responseJson));

		setMessage("Perfil guardado correctamente!");
	}

	if (!user) {
		return <h1>Loading user....</h1>;
	}
	if (!bike) {
		return <h1>Loading bikes....</h1>;
	}

	return (
		<div className="container">
			{message ? <h1>{message}</h1> : ""}
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
					<button type="submit" className="btn btn-primary" onClick={update}>
						Guardar datos
					</button>
					<button type="submit" className="btn btn-primary">
						Borrar
					</button>
				</div>
			</form>

			<form className=" row g-3  col-md-6 " id="bikes">
				<div className="col-md-6">
					<label htmlFor="b_type" className="form-label">
						Tipo de bici
					</label>
					<select
						type="text"
						placeholder="seleccionar tipo de bici"
						className="form-control"
						defaultValue={bike ? bike.b_type : ""}
						onChange={event => {
							setBike({ ...bike, b_type: event.target.value });
						}}>
						<option selected>MTB</option>
						<option>Carretera</option>
						<option>paseo</option>
					</select>
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
							setBike({ ...bike, wheel_inches: event.target.value });
						}}>
						<option selected>28 pulgadas o más</option>
						<option>20 a 27 pulgadas</option>
						<option>menos de 20 pulgadas</option>
					</select>
				</div>
			</form>
		</div>
	);
};
