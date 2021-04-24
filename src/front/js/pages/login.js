import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { actions } = useContext(Context);
	const history = useHistory();

	function logIn(event) {
		event.preventDefault();
		setError("");
		if (email == "") {
			setError("Email formato incorrecto");
			return;
		}
		let responseOk = false;
		fetch(process.env.BACKEND_URL + "/api/login", {
			method: "POST",
			headers: {
				"content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
			.then(response => {
				responseOk = response.ok;
				return response.json();
			})
			.then(responseJson => {
				if (responseOk) {
					actions.saveAccessToken(responseJson.access_token);

					history.push("/home");
				} else {
					setError(responseJson.message);
				}
			})
			.catch(error => {
				setError(error.message);
			});
		return false;
	}

	return (
		<div className=" container  ">
			{error ? <h1>{error}</h1> : ""}
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="card">
						<div className="card-header h4">Registrarme</div>
						<div className="card-body">
							<form onSubmit={logIn}>
								<div className="form-group row">
									<label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">
										E-mail
									</label>
									<div className="col-md-6">
										<input
											type="email"
											id="email_address"
											className="form-control"
											name="email-address"
											required
											placeholder="email"
											onChange={event => setEmail(event.target.value)}
										/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="password" className="col-md-4 col-form-label text-md-right">
										Contraseña
									</label>
									<div className="col-md-6">
										<input
											type="password"
											id="password"
											className="form-control"
											name="email-address"
											required
											placeholder="password"
											onChange={event => setPassword(event.target.value)}
										/>
									</div>
								</div>
								<div className="col-md-6 offset-md-4">
									<button type="submit" className="btn btn-primary">
										Acceder
									</button>
									<a href="#" className="btn btn-link">
										No recuerdas la contraseña?
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
