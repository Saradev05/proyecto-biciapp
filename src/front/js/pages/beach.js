import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Ruta_completa } from "../component/ruta_completa";

export const Beach = () => {
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const { actions } = useContext(Context);
	const history = useHistory();

	return (
		<div className=" css-body container  py-5 my-5">
			<div className="row justify-content-center">
				<div className="">
					<Ruta_completa />
				</div>
			</div>
		</div>
	);
};
