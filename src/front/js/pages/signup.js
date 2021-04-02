import React, { useState } from "react";

export const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	function signup() {
		if (password != confirmPassword) {
			setError("las contraseñas son distintas");
			return;
		}

		fetch("https://3001-bronze-crane-rmugjnez.ws-eu03.gitpod.io/api/signup", {
			method: "POST",
			headers: {
				"content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		});
	}

	return (
		<div className="jumbotron">
			{error ? <h1>{error}</h1> : ""}
			<input type="email" placeholder="email" onChange={event => setEmail(event.target.value)} />

			<input type="password" placeholder="password" onChange={event => setPassword(event.target.value)} />

			<input type="password" placeholder="password" onChange={event => setConfirmPassword(event.target.value)} />

			<input type="button" value="registro" onClick={signup} />
		</div>
	);
};
