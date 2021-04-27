import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Events = () => {
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const { actions } = useContext(Context);
	const history = useHistory();

	return (
		<div className=" container  py-5 my-5">
			{error ? <h1>{error}</h1> : ""}
			{message ? <h1>{message}</h1> : ""}
			<div className="row justify-content-center">
				<div className="display-4 text-muted"> coming soon....</div>
			</div>
		</div>
	);
};
