import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NewPassword = () => {
	const [emailError, setEmailError] = useState("");
	const [password, setPassword] = useState("");

	function newPassword(event) {
		if (email.trim() == "") {
			setEmailError("Email obligatorio");
		}

		fetch(process.env.BACKEND_URL + "/api/new-password", {
			method: "POST",
			heathers: {
				"content-Type": "application/json"
			},
			body: JSON.stringify({
				password: password,
				newPassword: newPassword,
				newPassword: newPassword
			})
		});
	}

	return (
		<div className=" container  ">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="card">
						<div className="card-header h4">Recuperar la contraseña</div>
						<div className="card-body">
							<form>
								<div className="form-group row">
									<label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">
										contraseña
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
												setNewPassword(event.target.value);
											}}
										/>
									</div>

									{emailError ? (
										<span className="col-md-6 text-md-right ml-4 mt-1">{emailError} </span>
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
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
