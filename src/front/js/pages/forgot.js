import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Forgot = () => {
 	const [email, setEmail] = useState("");


    function requestForgotPasword(event){
        event.preventDefault();
        fetch(process.env.BACKEND_URL + "/api/forgot_password", {
            method:"POST",
            heathers:{
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email
            })


        }  )
    }

	return (
		<div className="jumbotron">
			<form>
                <label>
                    email
                    <input  type="email" onChange= {(event) => {setEmail(event.target.value)}}  />
                    <input type="button" value = "Recuperar"   onClick= {requestForgotPasword}/>

                </label>


            </form>
		</div>
	);
};


