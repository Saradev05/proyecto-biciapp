import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const { actions } = useContext(Context);

	const history = useHistory();
	function signup(event) {
		event.preventDefault();
		if (password != confirmPassword) {
			setError("las contraseñas son distintas");
			return;
		}
		let responseOk = false;
		fetch(process.env.BACKEND_URL + "/api/signup", {
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
					setMessage("Ya estas registrado!");
					history.push("/login");
				} else {
					setError(responseJson.message);
				}
			});
	}
	return (
		<div id="backgrd" className="text-center ">
			<div className="login_body container-fluid row " width="100%">
				<div className=" container py-4 ">
					<div className="row justify-content-center">
						<div className="col-md-8 pt-2">
							<div className="card">
								<div className="card-header h4">Crear cuenta de usuario</div>
								<div className="card-body">
									{error ? <h5>{error}</h5> : ""}
									{message ? <h5>{message}</h5> : ""}
									<form>
										<div className="form-group row">
											<label
												htmlFor="email_address"
												className="col-md-4 col-form-label text-md-right">
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
										<div className="form-group row">
											<label htmlFor="password" className="col-md-4 col-form-label text-md-right">
												Confirmar contraseña
											</label>
											<div className="col-md-6">
												<input
													type="password"
													id="password"
													className="form-control"
													name="email-address"
													required
													placeholder="repetir contraseña"
													onChange={event => setConfirmPassword(event.target.value)}
												/>
											</div>
										</div>
										<div className="col-md-6 offset-md-4">
											<button
												type="submit"
												value="registro"
												className="btn btn-primary"
												onClick={signup}>
												Crear usuario
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
