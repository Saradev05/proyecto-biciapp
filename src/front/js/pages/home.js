import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Slider from "react-slick";

import rigoImageUrl from "../../img/rigo-baby.jpg";
import CostaIMG from "../../img/costa01.jpg";
import MontanaIMG from "../../img/montana02.jpg";
import FamilyIMG from "../../img/family_home.jpg";

import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<div className="text-center mt-5 carousel">
			<img src="https://cdn.pixabay.com/photo/2012/02/23/08/38/rocks-15712_960_720.jpg" />
			<Slider {...settings}>
				<div className="carousel-item">
					<img src="https://cdn.pixabay.com/photo/2012/02/23/08/38/rocks-15712_960_720.jpg" />
				</div>

				<div className="carousel-item">
					<img src="https://cdn.pixabay.com/photo/2017/07/19/18/32/cycling-2520007_960_720.jpg" />
				</div>

				<div className="carousel-item">
					<img src="https://cdn.pixabay.com/photo/2020/01/20/15/02/forest-4780528_960_720.jpg" />
				</div>
			</Slider>
		</div>
	);
};
