import React, { useState } from "react";

export const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	function signup() {
		if (password != confirmPassword) {
			setError("las contraseñas son distintas");
			return;
		}

		fetch(process.env.BACKEND_URL + "/api/signup", {
			method: "POST",
			headers: {
				"content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		});
		setMessage("Ya estas registrado!");
	}

	return (
		<div className="jumbotron">
			{error ? <h3>{error}</h3> : ""}
			{message ? <h3>{message}</h3> : ""}
			<input type="email" placeholder="email" onChange={event => setEmail(event.target.value)} />

			<input type="password" placeholder="password" onChange={event => setPassword(event.target.value)} />

			<input type="password" placeholder="password" onChange={event => setConfirmPassword(event.target.value)} />

			<input type="button" value="registro" onClick={signup} />
		</div>
	);
};
