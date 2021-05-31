import React, { useContext } from "react";
import { Context } from "../store/appContext";

import rigoImageUrl from "../../img/rigo-baby.jpg";
import CostaIMG from "../../img/costa01.jpg";
import MontanaIMG from "../../img/montana02.jpg";
import FamilyIMG from "../../img/family_home.jpg";
import Cyclists from "../../img/cyclists.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { func } from "prop-types";
// stripe en repo biciapp4 fotos branch Sara
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	"pk_test_51IqFlLJgftEGfFd1R1qoeXMJO3P8k7NWFVRsoYXqpKxUwg56CZw0GWa8WvzCleG1tgfepkUWX4vlU7K4Hoyyj2CL008bQepEHT"
);

export const Home = () => {
	const { store } = useContext(Context);

	async function handleClick() {
		const stripe = await stripePromise;

		const response = await fetch(process.env.BACKEND_URL + "/api/create-checkout-session", {
			method: "POST"
		});

		const session = await response.json();

		// When the customer clicks on the button, redirect them to Checkout.

		const result = await stripe.redirectToCheckout({
			sessionId: session.id
		});

		if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer
			// using `result.error.message`.
		}
	}
	return (
		<div className="jumbotron-fluid">
			<div className="container-fluid p-0 m-0">
				<img
					src={Cyclists}
					alt="Card image cap"
					// src="https://cdn.pixabay.com/photo/2019/11/08/07/05/cyclists-4610614_960_720.jpg"
					className="imagenb imgCyclists img-fluid jumbotron"
					width="100% "
					height="100vh"
				/>
			</div>

			<p className="bienvenido-home  texto-negro text-justify">
				<h1 className=" text-center py-5">Bienvenido a Biciapp</h1>
				<span className="bienvenido-text  ">
					Estamos encantados de tenerte por aquí y esperamos conocerte en nuestra próxima actividad.
				</span>
				<p className="  ">
					Aquí debajo encontrarás una muestra de lo que acostumbramos a hacer. No dejes de visitar la web ya
					que vamos actualizando rutas a menudo...
				</p>
			</p>
			<center className="py-4  ">
				<Link to={"/aboutUs"}>
					<button className="button-card-body rounded-pill p-3 text-center border-0 shadow ">
						<h5 className="text-center ">Quiero saber más</h5>
					</button>
				</Link>
			</center>

			<div className="actividades container py-5 ">
				<div className="row text-center ">
					<div className="col mx-auto mb-3">
						<h2 className="text-black mb-5">PROXIMAS ACTIVIDADES</h2>
					</div>
				</div>
				<div className="card-deck flex-box ">
					<div className="card-activities card evento">
						<img className="1card-img-top" src={FamilyIMG} alt="Card image cap" />
						<div className=" card-body">
							<h5 className="card-title text-black text-center">Eventos</h5>
							<center>
								<div>
									<Link to={"/events"}>
										<button className=" btn btnb btn-outline-primary font-weight-bold h1 m-2 p-2">
											Ver detalles
										</button>
									</Link>
								</div>
							</center>
						</div>
					</div>
					<div className="card-activities card montaña">
						<img className="1card-img-top" src={MontanaIMG} alt="Card image cap" />
						<div className=" card-body">
							<h5 className="card-title text-center">En Montaña</h5>
							<center>
								<Link to={"/mountain"}>
									<button className="btn btnb btn-outline-primary font-weight-bold h1 m-2 p-2">
										Ver detalles
									</button>
								</Link>
								<div className="description">
									<h5>20,00€</h5>
								</div>
								<button
									type="button "
									id="checkout-button"
									className="btn btn-link "
									role="link"
									onClick={handleClick}>
									Inscripción
								</button>
							</center>
						</div>
					</div>
					<div className="card-activities card costa">
						<img className="1card-img-top" src={CostaIMG} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title text-center">En Costa</h5>
							<center>
								<Link to={"/beach"}>
									<button className="btn btnb btn-outline-primary font-weight-bold h1 m-2 p-2">
										Ver detalles
									</button>
								</Link>
								<div className="description">
									<h5>20,00€</h5>
								</div>
								<button
									type="button "
									id="checkout-button"
									className="btn btn-link"
									role="link"
									onClick={handleClick}>
									Inscripción
								</button>
							</center>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
