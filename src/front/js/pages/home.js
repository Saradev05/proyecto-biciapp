import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div id="backgrd" className="text-center ">
			<div className="bg-image mh-20" width="100%">
				<img
					src="https://cdn.pixabay.com/photo/2019/11/08/07/05/cyclists-4610614_960_720.jpg"
					className="bg-image img-fluid  "
					width="100%"
					height="auto"
				/>
			</div>
			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>

			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
