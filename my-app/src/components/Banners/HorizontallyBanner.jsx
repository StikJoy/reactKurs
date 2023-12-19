import React from 'react';
import "../../styles/containerStyle.css";
import "./carouselStyle.css";
// import gifBanner from "../img/gifBanner.gif"

const HorizontallyBanner = function () {
    return (
        <div>
            <div className="container">
                <a href="#sale">
                    <div className="banner">
                        <img src={require('./img/gifBanner.gif')} alt="#"/>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default HorizontallyBanner;