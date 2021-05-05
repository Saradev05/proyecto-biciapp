import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const NewPassword = () => {
	const [error, setError] = useState("");
	const [passError, setPassError] = useState("");
	const [confirmNewPass, setConfirmNewPass] = useState("");
	const [newPass, setNewPass] = useState("");
	const { actions } = useContext(Context);

	// const [email, setEmail] = useState("");
	const history = useHistory();

	function newPassword(event) {
		if (newPass != confirmNewPass) {
			setPassError("las contraseñas son distintas");
		}

		fetch(process.env.BACKEND_URL + "/api/newPassword", {
			method: "POST",
			heathers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			},
			body: JSON.stringify({
				newPass: newPass,
				confirmNewPass: confirmNewPass
			})
		})
			.then(response => {
				responseOk = response.ok;
				return response.json();
			})
			.then(responseJson => {
				if (responseOk) {
					setMessage("ya puedes usar la nueva contraseña!");
					history.push("/login");
				} else {
					setError(responseJson.message);
				}
			});
	}

	return (
		<div id="backgrd" className="text-center ">
			<div className="newPassword container-fluid row " width="100%">
				<div className="  container py-4  ">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="card">
								<div className="card-header h4">Recuperar la contraseña</div>
								<div className="card-body">
									<form>
										<div className="form-group row">
											<label
												htmlFor="email_address"
												className="col-md-4 col-form-label text-md-right">
												contraseña
											</label>
											<div className="col-md-6">
												<input
													type="password"
													id="newPass"
													className="form-control"
													name="newPass"
													required
													placeholder="nueva contraseña"
													onChange={event => {
														setNewPass(event.target.value);
													}}
												/>
											</div>
										</div>
										<div className="form-group row">
											<label
												htmlFor="confirma contraseña"
												className="col-md-4 col-form-label text-md-right">
												confirmar contraseña
											</label>
											<div className="col-md-6">
												<input
													type="password"
													id="confirmNewPass"
													className="form-control"
													name="confirmNewPass"
													required
													placeholder="confirma contraseña"
													onChange={event => {
														setConfirmNewPass(event.target.value);
													}}
												/>
											</div>
										</div>

										{passError ? (
											<span className="col-md-6 text-md-right ml-4 mt-1">{passError} </span>
										) : (
											""
										)}
										<div className="col-md-6 offset-md-4">
											<input
												type="button"
												className="btn btn-primary m-2"
												value="Cambiar contraseña"
												onClick={newPassword}
											/>
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
