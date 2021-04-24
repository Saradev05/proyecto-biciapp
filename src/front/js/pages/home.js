import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div id="backgrd" className="text-center ">
			<div className="home_body container-fluid row " width="100%">
				<div className="col-8 "> </div>
				<div className=" col-4"> actividades columna</div>
			</div>
		</div>
	);
};
