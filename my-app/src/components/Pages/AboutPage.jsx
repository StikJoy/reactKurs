import React from 'react';
import "../../styles/textStyle.css";
import aboutUs from "../../img/aboutUs.png";
import aboutUs2 from "../../img/aboutUs2.png";
import HorizontallyBanner from "../Banners/HorizontallyBanner";
import {Chart} from "chart.js";

const DeliveryPage = function () {

    // const speedCanvas = document.getElementById("speedChart");
    //
    // Chart.defaults.global.defaultFontFamily = "Lato";
    // Chart.defaults.global.defaultFontSize = 18;
    //
    // const speedData = {
    //     labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    //     datasets: [{
    //         label: "Car Speed (mph)",
    //         data: [0, 59, 75, 20, 20, 55, 40],
    //     }]
    // };
    //
    // const chartOptions = {
    //     legend: {
    //         display: true,
    //         position: 'top',
    //         labels: {
    //             boxWidth: 80,
    //             fontColor: 'black'
    //         }
    //     }
    // };
    //
    // const lineChart = new Chart(speedCanvas, {
    //     type: 'line',
    //     data: speedData,
    //     options: chartOptions
    // });

    return (
        <div className="container">
            <HorizontallyBanner/>
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

            {/*<canvas id="speedChart" width="600" height="400"></canvas>*/}
        </div>
    );
};

export default DeliveryPage;