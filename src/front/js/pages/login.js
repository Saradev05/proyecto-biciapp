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
		<div className="jumbotron">
			{error ? <h1>{error}</h1> : ""}
			<form onSubmit={logIn}>
				<input type="email" placeholder="email" required onChange={event => setEmail(event.target.value)} />

				<input type="password" placeholder="password" onChange={event => setPassword(event.target.value)} />

				<input type="submit" value="acceder" />
			</form>
		</div>
	);
};
