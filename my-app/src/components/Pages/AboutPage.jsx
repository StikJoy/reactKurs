import React from 'react';
import "../../styles/textStyle.css";
import aboutUs from "../../img/aboutUs.png";
import aboutUs2 from "../../img/aboutUs2.png";

const DeliveryPage = function () {
    return (
        <div className="container">
            <div className="text">
                <h1>Отзывы</h1>
                <div className="textImage">
                    <img src={aboutUs} alt="#"/>
                </div>

                <h1>О нас</h1>
                <div className="textImage">
                    <img src={aboutUs2} alt="#"/>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPage;