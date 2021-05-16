import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classnames from "classnames";
import "../../styles/profile.scss";

export const Profile = () => {
	// const [password, setPassword] = useState(""); tabs funcionen 7may
	const [user, setUser] = useState(null);
	const [bike, setBike] = useState(null);
	const [bikes, setBikes] = useState(null);
	const [name, setName] = useState(null);
	const [bType, setBType] = useState(null);
	const [gears, setGears] = useState(null);
	const [wheelInches, setWheelInches] = useState(null);
	const { actions } = useContext(Context);
	const [message, setMessage] = useState("");
	const [messageBike, setMessageBike] = useState("");

	const [activeTab, setActiveTab] = useState("1");
	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const history = useHistory();

	useEffect(() => {
		let accessToken = actions.getAccessToken();
		if (!accessToken) {
			history.push("/login");
			return;
		}
		fetch(process.env.BACKEND_URL + "/api/profile", {
			method: "GET",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setUser(responseJson));

		fetch(process.env.BACKEND_URL + "/api/user/bikes/", {
			method: "GET",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			}
		})
			.then(response => response.json())
			.then(responseJson => setBikes(responseJson));
	}, []);

	// coment
	function update(event) {
		event.preventDefault();
		fetch(process.env.BACKEND_URL + "/api/profile", {
			method: "PUT",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			},
			body: JSON.stringify(user)
		})
			.then(response => response.json())
			.then(responseJson => setUser(responseJson));

		setMessage("Perfil guardado correctamente!");
	}

	function bikeUpdate(event) {
		event.preventDefault();
		fetch(process.env.BACKEND_URL + "/api/new_bike", {
			method: "POST",
			headers: {
				"content-Type": "application/json",
				Authorization: "Bearer " + actions.getAccessToken()
			},
			body: JSON.stringify({
				b_type: bType,
				name: name,
				wheel_inches: wheelInches,
				gears: gears
			})
		})
			.then(response => {
				if (response.status == 200) {
					return response.json();
				} else {
					throw Error("No se ha guardado");
				}
			})
			.then(responseJson => {
				setBike(responseJson);
				let bikesCopy = [...bikes];
				bikesCopy.push(responseJson);
				setBikes(bikesCopy);
				setMessageBike("Bici guardada correctamente!");
			})
			.catch(error => setMessage(error.message));
	}

	if (!user) {
		return <h1>Loading user....</h1>;
	}
	if (!bikes) {
		return <h1>Loading bikes....</h1>;
	}

	return (
		<>
			<div id="backgrd" className="content-center ">
				<div className="profile_body container-fluid row  " width="100%">
					<div className="container py-4">
						<div className="row justify-content-center">
							<div className="body-profile card col-md-12 col-sm-12 pt-5">
								<div className="card ">
									<Nav tabs className="header-profile">
										<NavItem>
											<NavLink
												className={classnames({ active: activeTab === "1" })}
												onClick={() => {
													toggle("1");
												}}>
												Perfil
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames({ active: activeTab === "2" })}
												onClick={() => {
													toggle("2");
												}}>
												Bicis
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames({ active: activeTab === "3" })}
												onClick={() => {
													toggle("3");
												}}>
												Añadir bici
											</NavLink>
										</NavItem>
									</Nav>
									<TabContent activeTab={activeTab} className="body-profile">
										<TabPane tabId="1">
											<Row>
												<Col sm="12">
													<div className="card-body p-3">
														<div id="profile" className="perfil ">
															{/* <div className="header-profile card-header h4">
																Perfil de usuario{" "}
															</div>{" "} */}
															<div className="card-body ">
																{message ? <h5>{message}</h5> : ""}
																<form className="row g-3 ">
																	<div className="col-md-6 col-sm-12 p-2">
																		<label
																			htmlFor="inputEmail4 "
																			className="form-label ">
																			Email
																		</label>
																		<input
																			type="email"
																			className="form-control"
																			id="inputEmail4"
																			defaultValue={user.email}
																			onChange={event => {
																				setUser({
																					...user,
																					email: event.target.value
																				});
																			}}
																		/>
																	</div>
																	<div className="col-md-6 col-sm-12  p-2">
																		<label
																			htmlFor="inputPassword4"
																			className="form-label">
																			Contraseña
																		</label>
																		<input
																			type="password"
																			className="form-control"
																			id="inputPassword4"
																			defaultValue={user.password}
																			onChange={event => {
																				setUser({
																					...user,
																					password: event.target.value
																				});
																			}}
																		/>
																	</div>
																	<div className="col-md-6 col-sm-12 p-2">
																		<label className="form-label ">Nombre</label>
																		<input
																			type="text"
																			className="form-control"
																			placeholder="Nombre"
																			aria-label="First name"
																			defaultValue={user.name}
																			onChange={event => {
																				setUser({
																					...user,
																					name: event.target.value
																				});
																			}}
																		/>
																	</div>
																	<div className="col-md-6 col-sm-12 p-2">
																		<label className="form-label">Apellidos</label>
																		<input
																			type="text"
																			className="form-control"
																			placeholder="Apellidos"
																			aria-label="Last name"
																			defaultValue={user.surname}
																			onChange={event => {
																				setUser({
																					...user,
																					surname: event.target.value
																				});
																			}}
																		/>
																	</div>
																	<div className="col-md-6 col-sm-12 p-2">
																		<label className="form-label">Usuario</label>
																		<input
																			type="text"
																			className="form-control"
																			placeholder="Nombre a mostrar"
																			aria-label="First name"
																			defaultValue={user.nick_name}
																			onChange={event => {
																				setUser({
																					...user,
																					nick_name: event.target.value
																				});
																			}}
																		/>
																	</div>
																	<div className="col-md-6 col-sm-12 p-2">
																		<label className="form-label">Edad</label>
																		<input
																			type="text"
																			className="form-control"
																			placeholder="edad"
																			aria-label="First name"
																			defaultValue={user.age}
																			onChange={event => {
																				setUser({
																					...user,
																					age: event.target.value
																				});
																			}}
																		/>
																	</div>
																	<div className="col-md-6 col-sm-12 p-2">
																		<label
																			htmlFor="inputAddress"
																			className="form-label">
																			dirección
																		</label>
																		<input
																			type="text"
																			className="form-control"
																			id="inputAddress"
																			placeholder="Calle , num"
																			defaultValue={user.address1}
																			onChange={event => {
																				setUser({
																					...user,
																					address1: event.target.value
																				});
																			}}
																		/>
																	</div>
																	<div className="col-md-6 col-sm-12 p-2">
																		<label
																			htmlFor="inputAddress"
																			className="form-label">
																			detalles de dirección
																		</label>
																		<input
																			type="text"
																			className="form-control"
																			id="inputAddress"
																			placeholder="piso, escalera, puerta"
																			defaultValue={user.address2}
																			onChange={event => {
																				setUser({
																					...user,
																					address2: event.target.value
																				});
																			}}
																		/>
																	</div>
																	<div className="col-md-6 col-sm-12 p-2">
																		<label
																			htmlFor="inputCity"
																			className="form-label">
																			Ciudad
																		</label>
																		<input
																			type="text"
																			className="form-control"
																			id="inputCity"
																			defaultValue={user.city}
																			onChange={event => {
																				setUser({
																					...user,
																					city: event.target.value
																				});
																			}}
																		/>
																	</div>
																	<div className="col-md-6 col-sm-12 p-2">
																		<label
																			htmlFor="inputZip"
																			className="form-label">
																			Codigo postal
																		</label>
																		<input
																			type="text"
																			className="form-control"
																			id="inputZip"
																			defaultValue={user.postal_code}
																			onChange={event => {
																				setUser({
																					...user,
																					postal_code: event.target.value
																				});
																			}}
																		/>
																	</div>
																	<div className="col-md-6 col-sm-12 p-3 ">
																		<button
																			type="submit"
																			className="btn btn-primary m-2"
																			onClick={update}>
																			Guardar datos
																		</button>
																		{"  "}
																		<button
																			type="submit"
																			className="btn btn-primary ">
																			Borrar
																		</button>
																	</div>
																</form>
															</div>
														</div>
													</div>
												</Col>
											</Row>
										</TabPane>
										<TabPane tabId="2">
											<Row>
												<Col md="6" sm="12">
													<div id="allBikes" className="bikes">
														{/* <div className="header-profile card-header h4 p-3">
															Mis bicicletas
														</div> */}
														<div className="card-body container  p-3">
															<table className="table ">
																<thead>
																	<tr>
																		<th scope="col-md-6 col-sm-12">#</th>
																		<th scope="col-md-6 col-sm-12">Tipo</th>
																		<th scope="col-md-6 col-sm-12">Marchas</th>
																		<th scope="col-md-6 col-sm-12">Nombre</th>
																		<th scope="col-md-6 col-sm-12">Pulgadas</th>
																	</tr>
																</thead>
																<tbody>
																	{bikes.map(bike => {
																		return (
																			<tr key={bike.id}>
																				<th scope="row">{bike.id}</th>
																				<td>{bike.b_type}</td>
																				<td>{bike.gears}</td>
																				<td>{bike.name}</td>
																				<td>{bike.wheel_inches}</td>
																			</tr>
																		);
																	})}
																</tbody>
															</table>
														</div>
													</div>
												</Col>
											</Row>
										</TabPane>
										<TabPane tabId="3">
											<Row>
												<Col md="6" sm="12">
													<div id="bikeAdd" className="bike">
														{/* <div className="header-profile card-header h4 p-3">
															Añadir una bici
														</div> */}
														<div className="card-body py-5">
															{messageBike ? <h5>{messageBike}</h5> : ""}
															<form className=" row g-3  col-md-10 " id="bikes">
																<div className="col-md-6 col-sm-12 p-2">
																	<label htmlFor="b_type" className="form-label">
																		Tipo de bici
																	</label>
																	<select
																		type="text"
																		placeholder="seleccionar tipo de bici"
																		className="form-control "
																		defaultValue={bike ? bike.b_type : ""}
																		onChange={event => {
																			setBType(event.target.value);
																		}}>
																		<option value="sin seleccionar">
																			escoger una opción{" "}
																		</option>
																		<option value="MTB">MTB</option>
																		<option value="Carretera">Carretera</option>
																		<option value="paseo">paseo</option>
																	</select>
																</div>
																<div className="col-md-6 col-sm-12 p-2">
																	<label className="form-label">
																		Nombre de la bici
																	</label>
																	<input
																		type="text"
																		className="form-control"
																		placeholder="Nombre"
																		aria-label="First name"
																		defaultValue={bike ? bike.name : ""}
																		onChange={event => {
																			setName(event.target.value);
																		}}
																	/>
																</div>
																<div className="col-md-6 col-sm-12 p-2">
																	<label
																		htmlFor="wheel_inches"
																		className="form-label">
																		diametro de rueda
																	</label>
																	<select
																		type="text"
																		placeholder="diametro de rueda"
																		className="form-control"
																		defaultValue={bike ? bike.wheel_inches : ""}
																		onChange={event => {
																			setWheelInches(event.target.value);
																		}}>
																		<option value="sin seleccionar">
																			escoger una opción{" "}
																		</option>
																		<option value="28+">28 pulgadas o más</option>
																		<option value="20-27">20 a 27 pulgadas</option>
																		<option value="19-">
																			menos de 20 pulgadas
																		</option>
																	</select>
																</div>
																<div className="col-md-6 col-sm-12 p-2">
																	<label htmlFor="gears" className="form-label">
																		marchas
																	</label>
																	<select
																		type="text"
																		placeholder="marchas de la bici"
																		className="form-control"
																		defaultValue={bike ? bike.gears : ""}
																		onChange={event => {
																			setGears(event.target.value);
																		}}>
																		<option value="sin seleccionar">
																			escoger una opción{" "}
																		</option>
																		<option value="30+">30 marchas o mas</option>
																		<option value="15+">15 a 29 marchas</option>
																		<option value="-15">menos de 15 marchas</option>
																	</select>
																</div>
																<div className="col-md-6 col-sm-12 p-2  ">
																	<button
																		type="submit"
																		className="btn btn-primary m-2"
																		onClick={bikeUpdate}>
																		Guardar bici
																	</button>
																	<button type="submit" className="btn btn-primary">
																		Borrar
																	</button>
																</div>
															</form>
														</div>
													</div>
												</Col>
											</Row>
										</TabPane>
									</TabContent>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
