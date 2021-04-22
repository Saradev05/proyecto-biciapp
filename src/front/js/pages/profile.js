import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Profile = () => {
	const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	const [user, setUser] = useState(null);
	const { actions } = useContext(Context);
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
	}

	if (!user) {
		return <h1>Loading user....</h1>;
	}

	return (
		<div className="container">
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

			<form className=" row g-3  col-md-6 ">
				<div className="input-group col-md-6">
					<label className="input-group-text" htmlFor="inputGroupSelect01">
						Options
					</label>
					<select className="form-select" id="inputGroupSelect01">
						<option selected>Choose...</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
			</form>

			<div>
				<input type="radio" value="si" name="pregunta" id="pregunta_si" /> SI
				<input type="radio" value="no" name="pregunta" id="pregunta_no" /> NO
				<input type="radio" value="nsnc" name="pregunta" id="pregunta_nsnc" /> NS/NC email:
				{email}
			</div>
		</div>
	);
};
