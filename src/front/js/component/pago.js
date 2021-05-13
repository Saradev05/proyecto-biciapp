import React, { Component } from "react";
import { Link } from "react-router-dom";
import { func } from "prop-types";

const stripePromise = loadStripe(
	"pk_test_51IqFlLJgftEGfFd1R1qoeXMJO3P8k7NWFVRsoYXqpKxUwg56CZw0GWa8WvzCleG1tgfepkUWX4vlU7K4Hoyyj2CL008bQepEHT"
);

export const Pago = () => {
	const { store } = useContext(Context);

	async function handleClick() {
		const stripe = await stripePromise;

		const response = await fetch("https://3001-red-bass-pgvwzi28.ws-eu04.gitpod.io/api/create-checkout-session", {
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
		<div>
			<div className="description">
				<h5>$20.00</h5>
			</div>

			<button type="button" id="checkout-button" role="link" onClick={handleClick}>
				inscripción
			</button>
		</div>
	);
};
