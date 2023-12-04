import React from 'react';
import "../styles/containerStyle.css";
import "../styles/carouselStyle.css";

import carousel1 from "../img/Carusel1.jpg"
import carousel2 from "../img/Carusel2.jpg"
import carousel3 from "../img/Carusel3.png"
import carousel4 from "../img/Carusel4.jpg"

const Carousel = function () {

    return (
        <div>
            <div className="container">
                <div className="carousel">
                    <div className="carouselBanner">
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                        aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={carousel1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel3} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={carousel4} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;