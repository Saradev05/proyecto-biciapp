import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Slider from "react-slick";

import rigoImageUrl from "../../img/rigo-baby.jpg";
import CostaIMG from "../../img/costa01.jpg";
import MontanaIMG from "../../img/montana02.jpg";
import FamilyIMG from "../../img/family_home.jpg";

import { Link } from "react-router-dom";
import "../../styles/home.scss";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};
return (
	<div className="text-center mt-5 carousel-item">
		<Slider {...settings}>
			<div className="carousel-item">
				<h3>
					<img src=" ../../img/costa01.jpg" />
				</h3>
			</div>

			<div className="carousel-item">
				<h3>
					<img src=" ../../img/montana0.jpg" />
				</h3>
			</div>

			<div className="carousel-item">
				<h3>
					<img src=" ../../img/family_home.jpg" />
				</h3>
			</div>
		</Slider>
	</div>
);
