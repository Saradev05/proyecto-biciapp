import React, { Component } from "react";
import { Link } from "react-router-dom";
export const Footer = () => (
	//// <footer className="footer fixed-bottom">
	//         <div>
	//             <h5>
	//                 Made by <a href="mailto:info@aleidagonzalez.com">Aleida</a>{" "}
	//                 <i className="fa fa-bicycle text-success fa-2x  " />
	//                 <a className="ml-2" href="mailto:devyanand@gmail.com">
	//                     Sara{" "}
	//                 </a>
	//             </h5>
	//         </div>

	//         <div className=" footer-button">
	//             <Link to="/activity">
	//                 <button className="btn btn-light bg-transparent border-0 font-weight-light h1 m-2" type="button">
	//                     Acceso Administrador
	// 				</button>
	//             </Link>
	//         </div>
	//     </footer>
	// );

	<footer className="text-center  ">
		<div className="container">
			<p className="float-right">
				<Link to="/administ">
					<button className="btn btn-light bg-transparent border-0 font-weight-light h4 m-2" type="button">
						Acceso Administrador
					</button>
				</Link>
			</p>
			<h5 className="d-flex align-items-center">
				Made by
				<a className="p-2" href="mailto:info@aleidagonzalez.com">
					Aleida
				</a>
				<i className="p-2 fa fa-bicycle text-success fa-2x  " />
				<a className="p-2 " href="mailto:devyanand@gmail.com">
					Sara{" "}
				</a>
			</h5>
			<p />
		</div>
	</footer>
);
