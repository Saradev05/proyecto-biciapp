import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import classnames from "classnames";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "../../styles/profile.scss";
import { UploadFoto } from "./uploadFoto";

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
				<div className="profile_body container-fluid row py-5" width="100%">
					<div className="container py-5 mt-5">
						<div className="row justify-content-center">
							<div className="body-profile card col-md-10 col-sm-6 p-1 ">
								<Nav tabs className="header-profile">
									<NavItem>
										<NavLink
											className={classnames({ active: activeTab === "1" })}
											onClick={() => {
												toggle("1");
											}}>
											Perfil de usuario
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
											<Col md="12" sm="12">
												<div className="card-body p-1">
													<div id="profile" className="perfil ">
														{/* <div className="header-profile card-header h4">
																Perfil de usuario{" "}
															</div>{" "} */}
														<div className="card-body ">
															{message ? <h5>{message}</h5> : ""}
															<form className="row g-3 ">
																<div className="imagenYperfil1 d-flex col-md-12 col-sm-12 mt-4 ">
																	<div className="imagenPerfil d-flex flex-column col-md-6 col-sm-12 p-2">
																		<label className="form-label ">
																			Foto de Perfil
																		</label>
																		<img
																			className="fotoProfile w-100 h-100"
																			variant="top"
																			src="https://images.pexels.com/photos/1619299/pexels-photo-1619299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
																		/>
																	</div>
																	<div className="perfil1 col-md-6 col-sm-12 p-2">
																		<div className="col-md-12 col-sm-12 p-2">
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
																		<div className="col-md-12 col-sm-12 p-2">
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
																		<div className="col-md-12 col-sm-12 p-2">
																			<label className="form-label ">
																				Nombre
																			</label>
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
																		<div className="col-md-12 col-sm-12 p-2">
																			<label className="form-label">
																				Apellidos
																			</label>
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
																		<div className="col-md-12 col-sm-12 p-2">
																			<label className="form-label">
																				Usuario
																			</label>
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
																		<div className="col-md-12 col-sm-12 p-2">
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
																	</div>
																</div>
																<div className="restoPerfil  d-flex row ">
																	<div className="col-md-6 col-sm-12 p-2">
																		<label
																			htmlFor="inputAddress"
																			className="form-label">
																			Dirección
																		</label>
																		<input
																			type="text"
																			className="form-control "
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
																			Detalles de dirección
																		</label>
																		<input
																			type="text"
																			className="form-control p-2"
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
																	<div className="col-md-6 col-sm-12 p-2 ">
																		<button
																			type="submit"
																			className="btn btnb m-2"
																			onClick={update}>
																			Guardar datos
																		</button>
																		<Link to="/uploadFoto">
																			<button
																				type="button"
																				className="btn btnb h1 m-2">
																				Subir foto
																			</button>
																		</Link>
																		{"  "}
																		<button type="submit" className="btn btnb  ">
																			Borrar
																		</button>
																	</div>
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
											<Col sm="12">
												<div id="allBikes" className="bikes">
													{/* <div className="header-profile card-header h4 p-3">
															Mis bicicletas
														</div> */}
													<div className="card-body p-3">
														<Table className="table ">
															<Thead>
																<Tr>
																	<Th scope="col-12">#</Th>
																	<Th scope="col-12">Foto</Th>
																	<Th scope="col-12">Tipo</Th>
																	<Th scope="col-12">Marchas</Th>
																	<Th scope="col-12">Nombre</Th>
																	<Th scope="col-12">Pulgadas</Th>
																</Tr>
															</Thead>
															<Tbody>
																{bikes.map(bike => {
																	return (
																		<tr key={bike.id}>
																			<th scope="row">{bike.id}</th>
																			<td>
																				{" "}
																				<img
																					className="fotoProfile w-100  bg-color-danger"
																					variant="top"
																					src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg"
																				/>{" "}
																			</td>
																			<td>{bike.b_type}</td>
																			<td>{bike.gears}</td>
																			<td>{bike.name}</td>
																			<td>{bike.wheel_inches}</td>
																		</tr>
																	);
																})}
															</Tbody>
														</Table>
													</div>
												</div>
											</Col>
										</Row>
									</TabPane>
									<TabPane tabId="3">
										<Row>
											<Col sm="12">
												<div id="bikeAdd" className="bike">
													{/* <div className="header-profile card-header h4 p-3">
															Añadir una bici
														</div> */}
													<div className="card-body py-2">
														{messageBike ? <h5>{messageBike}</h5> : ""}
														<form className=" row g-3   " id="bikes">
															<div className="imagenBici  d-flex flex-column col-md-6 col-sm-12 p-2">
																<label className="form-label ">Foto de bici</label>
																<img
																	className="fotoProfile w-100 h-100 bg-color-danger"
																	variant="top"
																	src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg"
																/>
															</div>
															<div className="addBici col-md-6 col-sm-12 p-2">
																<div className="col-md-12 col-sm-12 p-2">
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
																<div className="col-md-12 col-sm-12 p-2">
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
																<div className="col-md-12 col-sm-12 p-2">
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
																<div className="col-md-12 col-sm-12 p-2">
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
																<div className="col-md-12 col-sm-12 p-2">
																	<button
																		type="submit"
																		className="btn btnb"
																		onClick={bikeUpdate}>
																		Guardar bici
																	</button>
																	<Link to="/uploadFoto">
																		<button
																			type="button"
																			className="btn btnb  h1 m-2">
																			Subir foto
																		</button>
																	</Link>
																	{"  "}
																	<button type="submit" className="btn btnb ">
																		Borrar
																	</button>
																</div>
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
		</>
	);
};
