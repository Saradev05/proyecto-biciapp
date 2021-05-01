import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { SignUp } from "./pages/signup";
import { LogIn } from "./pages/login";

// import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Profile } from "./pages/profile";
import { Activity } from "./pages/activity";
import { Forgot } from "./pages/forgot";
import { NewPassword } from "./pages/newPassword";
import { Events } from "./pages/events";
import { Montain } from "./pages/montain";
import { Beach } from "./pages/beach";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME;

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<Route exact path="/login">
							<LogIn />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/activity/theid">
							<Activity />
						</Route>
						<Route exact path="/forgot">
							<Forgot />
						</Route>
						<Route exact path="/newPassword/:token">
							<NewPassword />
						</Route>
						<Route exact path="/events">
							<Events />
						</Route>
						<Route exact path="/montain">
							<Montain />
						</Route>
						<Route exact path="/beach">
							<Beach />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
