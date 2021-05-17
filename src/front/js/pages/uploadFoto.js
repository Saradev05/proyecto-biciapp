import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import rigoImageUrl from "../../img/rigo-baby.jpg";
import FamilyIMG from "../../img/family_home.jpg";
import Cyclists from "../../img/cyclists.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { func } from "prop-types";

export const UploadFoto = () => {
	const { store } = useContext(Context);
	const [files, setFiles] = useState(null);
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");

	function uploadFiles(event) {
		event.preventDefault();
		setError("");
		// if (file == "") {
		// 	setError("foto no cargada");
		// 	return;
		// }
		const formData = new FormData();
		formData, append;
		for (var i = 0; i < files.lenght; i++) {
			formData.append("document" + i, files[i]);
		}
		fetch(process.env.BACKEND_URL + "/api/uploadFoto", {
			method: "POST",
			body: formData
		}).then();
	}
	return (
		<div id="backgrd" className=" forgot_body text-center ">
			<div className=" container-fluid row " width="100%">
				<div className=" container py-4 ">
					<div className="row justify-content-center">
						<div className="col-md-8 pt-2">
							<div className="card">
								<div className="css-header card-header h4">Subir fotos</div>
								<div className="css-body card-body">
									{error ? <h5>{error}</h5> : ""}
									{message ? <h5>{message}</h5> : ""}
									<form method="" action="" encType="multipart/form-data">
										<div className="form-group row">
											<label className="col-md-4 col-form-label text-md-right">
												foto 1
												<input
													type="file"
													name="document"
													className="form-control-file"
													multiple
													required
													placeholder="1ª foto"
													onChange={event => {
														setFiles(event.target.files);
													}}
												/>
											</label>
										</div>

										{/* {fotoError ? (
											<span className="col-md-6 text-md-right ml-4 mt-1">{fotoError} </span>
										) : (
											""
										)} */}
										<div className="col-md-6 offset-md-4 mt-2">
											<input
												type="button"
												className="btn btn-primary m-2"
												value="Cargar foto"
												onClick={uploadFiles}
											/>
										</div>
									</form>
								</div>
							</div>

							<div className="container py-5 my-5">
								<div className="row text-center ">
									<div className="col mx-auto mb-3">
										<h2 className="text-black mb-5">Fotos cargadas</h2>
									</div>
								</div>
								<div className="card-deck">
									<div className="card">
										{/* <img className="1card-img-top" src={} alt="Card image cap" /> */}
										<div className="card-body">
											<h5 className="card-title text-center"></h5>
											<center>
												<div>
													<Link to={"/profile"}>
														<button className="btn btn-outline-primary font-weight-bold h1 m-2 p-3"></button>
													</Link>

													{/* <button type="button" id="checkout-button" role="link" onClick={}>
														nombre boton
													</button> */}
												</div>
											</center>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
