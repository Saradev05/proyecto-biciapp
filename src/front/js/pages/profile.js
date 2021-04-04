import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Profile = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { actions } = useContext(Context);
	const history = useHistory();

	useEffect(() => {
		let accessToken = actions.getAccessToken();
		if (!accessToken) {
			history.push("/login");
			return;
		}
		fetch("https://3001-bronze-crane-rmugjnez.ws-eu03.gitpod.io/api/profile", {
			method: "GET",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setEmail(responseJson.email));
	});

	return (
		<div className="container">
			<form className="row g-3">
				<div className="col-md-6">
					<label className="form-label" />
					Nombre
					<input type="text" className="form-control" placeholder="First name" aria-label="First name" />
				</div>
				<div className="col">
					<label className="form-label" />
					Apellidos
					<input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
				</div>
				<div className="col-md-6">
					<label htmlFor="inputEmail4" className="form-label">
						Email
					</label>
					<input type="email" className="form-control" id="inputEmail4" />
				</div>
				<div className="col-md-6">
					<label htmlFor="inputPassword4" className="form-label">
						Contraseña
					</label>
					<input type="password" className="form-control" id="inputPassword4" />
				</div>
				<div className="col-12">
					<label htmlFor="inputAddress" className="form-label">
						dirección
					</label>
					<input type="text" className="form-control" id="inputAddress" placeholder="Calle , num" />
				</div>
				<div className="col-12">
					<label htmlFor="inputAddress2" className="form-label">
						dirección
					</label>
					<input
						type="text"
						className="form-control"
						id="inputAddress2"
						placeholder="piso, escalera, puerta"
					/>
				</div>
				<div className="col-md-6">
					<label htmlFor="inputCity" className="form-label">
						Ciudad
					</label>
					<input type="text" className="form-control" id="inputCity" />
				</div>

				<div className="col-md-2">
					<label htmlFor="inputZip" className="form-label">
						Distrito postal
					</label>
					<input type="text" className="form-control" id="inputZip" />
				</div>
				<div className="col-12">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="gridCheck" />
						<label className="form-check-label" htmlFor="gridCheck">
							Check me out
						</label>
					</div>
				</div>
				<div className="col-12">
					<button type="submit" className="btn btn-primary">
						Guardar datos
					</button>
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
