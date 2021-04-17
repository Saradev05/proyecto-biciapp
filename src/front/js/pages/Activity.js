import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Activity = () => {
    const [activity, setActivity] = useState("");
    // const [password, setPassword] = useState("");
    const [name, setName] = useState(null);
    const [route, setRoute] = useState(null);
    const [dificulty, setDificulty] = useState(null);
    const [description, setDescription] = useState(null);
    const [message, setMessage]= useState(null);
    const { actions } = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        let accessToken = actions.getAccessToken();
        if (!accessToken) {
            history.push("/activity");
            return;
        }
        fetch(process.env.BACKEND_URL + "/api/activity", {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                Authorization: "Bearer " + actions.getAccessToken()
            }
        })
            .then(response => response.json())
            .then(responseJson => setActivity(responseJson));
    }, []);

    function update(event) {
        event.preventDefault();
        fetch(process.env.BACKEND_URL + "/api/activity", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                Authorization: "Bearer " + actions.getAccessToken()
            },
            body: JSON.stringify({
                name: name,
                route: route,
                dificulty: dificulty,
                description: description
           } )
        })
            .then(response => response.json())
            .then(responseJson => setActivity(responseJson));
            setmessage("actividad añadida")
    }

   
    if (!activity) {
        return <h1>Loading activity....</h1>;
    }

    return (

        <div className=" container  ">
            {error ? <h1>{error}</h1> : ""}
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Añadir actividad</div>
                        <div className="card-body">
                            <form onSubmit={activity}>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-md-4 col-form-label text-md-right">
                                        Nombre de la actividad
                                    </label>
                                    <div className="col-md-6">
                                        <input
                                            type="name"
                                            id="name"
                                            className="name"
                                            name="name"
                                            required
                                            placeholder="nombre"
                                            onChange={event => setName(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="route" className="col-md-4 col-form-label text-md-right">
                                        Ruta
                                    </label>
                                    <div className="col-md-6">
                                        <input
                                            type="route"
                                           
                                            className="route"
                                            name="route"
                                            required
                                            placeholder="Ruta"
                                            onChange={event => setRoute(event.target.value)}
                                        />
                                    </div>
                                </div>
                                 {/* <div className="form-group row">
                                    <label htmlFor="dificulty" className="col-md-4 col-form-label text-md-right">
                                       dificultad
                                    </label>
                                    <div className="col-md-6">
                                        <input
                                            type="route"
                                           
                                            className="route"
                                            name="route"
                                            required
                                            placeholder="Ruta"
                                            onChange={event => setRoute(event.target.value)}
                                        />
                                    </div>
                                </div>
                                 <div className="form-group row">
                                    <label htmlFor="route" className="col-md-4 col-form-label text-md-right">
                                       descripcion
                                    </label>
                                    <div className="col-md-6">
                                        <input
                                            type="route"
                                           
                                            className="route"
                                            name="route"
                                            required
                                            placeholder="Ruta"
                                            onChange={event => setRoute(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        Crear
                                    </button>
                                    <a href="#" className="btn btn-link">
                                        No recuerdas la contraseña? */}
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

