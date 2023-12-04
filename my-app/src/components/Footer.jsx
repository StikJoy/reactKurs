import React from 'react';
import "../styles/containerStyle.css";
import "../styles/footerStyle.css";
import WA from "../img/WA.svg";
import TG from "../img/TG.svg";
import VK from "../img/VK.svg";
import YT from "../img/YT.svg";


const Footer = function () {
    return (
        <div>
            <div className="footerContainer">
                <div className="container">
                    <div className="footerList">
                        <div className="footerListElement">
                            <p>+7 (999) 999 99 99</p>
                            <a href="/#">Bookspb.ru </a>
                            <div className="icons">
                                <a href="/#"><img src={WA} alt="#"/></a>
                                <a href="/#"><img src={TG} alt="#"/></a>
                                <a href="/#"><img src={VK} alt="#"/></a>
                                <a href="/#"><img src={YT} alt="#"/></a>
                            </div>
                        </div>
                        <div className="footerListElement border">
                            <a href="/#">КАТАЛОГ</a>
                            <a href="/#">ВСЕ КНИГИ</a>
                            <a href="/#">СКИДКИ</a>
                        </div>
                        <div className="footerListElement">
                            <a href="/#">КОНТАКТЫ</a>
                            <a href="/#">РЕКВИЗИТЫ ОРГАНИЗАЦИИ</a>
                            <a href="/#">ПОЛИТИКА БЕЗОПАСНОСТИ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;