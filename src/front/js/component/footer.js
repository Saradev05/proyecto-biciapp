import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Footer = () => {
	const { actions } = useContext(Context);
	return (
		<footer className="text-center  ">
			<h5 className="">
				Made by
				<a className="p-2" href="mailto:info@aleidagonzalez.com">
					Aleida
				</a>
				<i className="mt-3 fa fa-bicycle text-success fa-2x  " />
				<a className="p-2 " href="mailto:devyanand@gmail.com">
					Sara{" "}
				</a>
			</h5>
			<p />
		</footer>
	);
};
