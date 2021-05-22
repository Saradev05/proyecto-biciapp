import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");

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
					actions.saveAccessToken(responseJson.access_token, responseJson.user.is_admin);

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
		<div id="backgrd" className="text-center ">
			<div className="login_body container-fluid row " width="100%">
				<div className=" container py-5 ">
					<div className="row justify-content-center">
						<div className="col-md-8  pt-5 mt-5">
							<div className="card">
								<div className="css-header card-header h4 py-4">Entrar en Biciapp</div>
								<div className="css-body card-body">
									{error ? <h5>{error}</h5> : ""}
									{message ? <h5>{message}</h5> : ""}
									<form onSubmit={logIn}>
										<div className="form-group row">
											<label
												htmlFor="email_address"
												className="col-md-4 col-form-label text-md-right py-3">
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
											<label
												htmlFor="password"
												className="col-md-4 col-form-label text-md-right py-3">
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
										<div className="col-md-6 offset-md-4 py-4">
											<button type="submit" className="btn btnb">
												Acceder
											</button>
											<Link to="/forgot" className="btn btn-link">
												No recuerdas la contraseña?
											</Link>
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
