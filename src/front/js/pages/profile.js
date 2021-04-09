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

	// victor
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
					/>
				</div>
				<div className="col-md-6">
					<label className="form-label" />
					Edad
					<input type="text" className="form-control" placeholder="edad" aria-label="First name" />
				</div>
				<div className="col-6">
					<label htmlFor="inputAddress" className="form-label">
						dirección
					</label>
					<input type="text" className="form-control" id="inputAddress" placeholder="Calle , num" />
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
					/>
				</div>
				<div className="col-md-6">
					<label htmlFor="inputCity" className="form-label">
						Ciudad
					</label>
					<input type="text" className="form-control" id="inputCity" />
				</div>
				<div className="col-md-6">
					<label htmlFor="inputZip" className="form-label">
						Codigo postal
					</label>
					<input type="text" className="form-control" id="inputZip" />
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
			<div className="input-group md-6">
				<select className="form-select" id="inputGroupSelect02">
					<option selected>Choose...</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
				<label className="input-group-text" htmlFor="inputGroupSelect02">
					Options
				</label>
			</div>
			<div className="input-group md-6">
				<button className="btn btn-outline-secondary" type="button">
					Button
				</button>
				<select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
					<option selected>Choose...</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>
			<div className="input-group">
				<select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
					<option selected>Choose...</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
				<button className="btn btn-outline-secondary" type="button">
					Button
				</button>
			</div>
			<div>
				<input type="radio" value="si" name="pregunta" id="pregunta_si" /> SI
				<input type="radio" value="no" name="pregunta" id="pregunta_no" /> NO
				<input type="radio" value="nsnc" name="pregunta" id="pregunta_nsnc" /> NS/NC email:
				{email}
			</div>
		</div>
	);
};

// 	return (
// 		<div className="container">
// 			<form className="row g-3">
// 				<div className="col-md-6">
// 					<label className="form-label" />
// 					Nombre
// 					<input type="text" className="form-control" placeholder="First name" aria-label="First name" />
// 				</div>
// 				<div className="col">
// 					<label className="form-label" />
// 					Apellidos
// 					<input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
// 				</div>
// 				<div className="col-md-6">
// 					<label htmlFor="inputEmail4" className="form-label">
// 						Email
// 					</label>
// 					<input type="email" className="form-control" id="inputEmail4" />
// 				</div>
// 				<div className="col-md-6">
// 					<label htmlFor="inputPassword4" className="form-label">
// 						Contraseña
// 					</label>
// 					<input type="password" className="form-control" id="inputPassword4" />
// 				</div>
// 				<div className="col-12">
// 					<label htmlFor="inputAddress" className="form-label">
// 						dirección
// 					</label>
// 					<input type="text" className="form-control" id="inputAddress" placeholder="Calle , num" />
// 				</div>
// 				<div className="col-12">
// 					<label htmlFor="inputAddress2" className="form-label">
// 						dirección
// 					</label>
// 					<input
// 						type="text"
// 						className="form-control"
// 						id="inputAddress2"
// 						placeholder="piso, escalera, puerta"
// 					/>
// 				</div>
// 				<div className="col-md-6">
// 					<label htmlFor="inputCity" className="form-label">
// 						Ciudad
// 					</label>
// 					<input type="text" className="form-control" id="inputCity" />
// 				</div>

// 				<div className="col-md-2">
// 					<label htmlFor="inputZip" className="form-label">
// 						Distrito postal
// 					</label>
// 					<input type="text" className="form-control" id="inputZip" />
// 				</div>
// 				<div className="col-12">
// 					<div className="form-check">
// 						<input className="form-check-input" type="checkbox" id="gridCheck" />
// 						<label className="form-check-label" htmlFor="gridCheck">
// 							Check me out
// 						</label>
// 					</div>
// 				</div>
// 				<div className="col-12">
// 					<button type="submit" className="btn btn-primary">
// 						Guardar datos
// 					</button>
// 				</div>
// 			</form>
// 			<div>
// 				<input type="radio" value="si" name="pregunta" id="pregunta_si" /> SI
// 				<input type="radio" value="no" name="pregunta" id="pregunta_no" /> NO
// 				<input type="radio" value="nsnc" name="pregunta" id="pregunta_nsnc" /> NS/NC email:
// 				{email}
// 			</div>
// 		</div>
// 	);
// };
