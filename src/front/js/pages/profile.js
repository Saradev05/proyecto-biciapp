import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Profile = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { actions } = useContext(Context);

	useEffect(() => {
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
		<div className="jumbotron">
			<div>
				email:
				{email}
			</div>
			<div> </div>
		</div>
	);
};
