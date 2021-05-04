import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Forgot = () => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const history = useHistory();

	function requestForgotPassword(event) {
		event.preventDefault();
		setError("");
		if (email == "") {
			setError("Email formato incorrecto");
			return;
		}
		let responseOk = false;
		fetch(process.env.BACKEND_URL + "/api/forgot-password", {
			method: "POST",
			headers: {
				"content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email
			})
		})
			.then(response => {
				responseOk = response.ok;
				return response.json();
			})
			.then(responseJson => {
				if (responseOk) {
					setMessage("ves a tu correo para reestablecer la contraseña!");
					history.push("/newPassword/token");
				} else {
					setError(responseJson.message);
				}
			});
	}

	return (
		<div id="backgrd" className=" forgot_body text-center ">
			<div className=" container-fluid row " width="100%">
				<div className=" container py-4 ">
					<div className="row justify-content-center">
						<div className="col-md-8 pt-2">
							<div className="card">
								<div className="card-header h4">Recuperar la contraseña</div>
								<div className="card-body">
									{error ? <h5>{error}</h5> : ""}
									{message ? <h5>{message}</h5> : ""}
									<form>
										<div className="form-group row">
											<label
												htmlFor="email_address"
												className="col-md-4 col-form-label text-md-right">
												email
											</label>
											<div className="col-md-6">
												<input
													type="email"
													id="email_address"
													className="form-control"
													name="email-address"
													required
													placeholder="email"
													onChange={event => {
														setEmail(event.target.value);
													}}
												/>
											</div>

											{emailError ? (
												<span className="col-md-6 text-md-right ml-4 mt-1">{emailError} </span>
											) : (
												""
											)}
											<div className="col-md-6 offset-md-4 mt-2">
												<input
													type="button"
													className="btn btn-primary m-2"
													value="Recuperar contraseña"
													onClick={requestForgotPassword}
												/>
											</div>
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
