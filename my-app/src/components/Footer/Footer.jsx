import React from 'react';
import "../../styles/containerStyle.css";
import "./footerStyle.css";
import WA from "./img/WA.svg";
import TG from "./img/TG.svg";
import VK from "./img/VK.svg";
import YT from "./img/YT.svg";
import {Link} from "react-router-dom";


const Footer = function () {
    return (
        <div>
            <div className="footerContainer">
                <div className="container">
                    <div className="footerList">
                        <div className="footerListElement">
                            <p>+7 (999) 999 99 99</p>
                            <Link to="/my-app/public#">Bookly.ru </Link>
                            <div className="icons">
                                <Link to="/my-app/public#"><img src={WA} alt="#"/></Link>
                                <Link to="/my-app/public#"><img src={TG} alt="#"/></Link>
                                <Link to="/my-app/public#"><img src={VK} alt="#"/></Link>
                                <Link to="/my-app/public#"><img src={YT} alt="#"/></Link>
                            </div>
                        </div>
                        <div className="footerListElement borders">
                            <Link to="/MainPage">КАТАЛОГ</Link>
                            <Link to="/MainPage">ВСЕ КНИГИ</Link>
                            <Link to="/MainPage">СКИДКИ</Link>
                        </div>
                        <div className="footerListElement">
                            <Link to="/my-app/public#">КОНТАКТЫ</Link>
                            <Link to="/RequisitePage">РЕКВИЗИТЫ ОРГАНИЗАЦИИ</Link>
                            <Link to="/my-app/public#">ПОЛИТИКА БЕЗОПАСНОСТИ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;