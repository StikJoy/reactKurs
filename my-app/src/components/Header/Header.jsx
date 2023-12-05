import React from 'react';
import "../../styles/containerStyle.css";
import "./headerStyle.css";

import logo from "./img/logo.svg";
import catalog from "./img/catalog.png";
import search from "./img/search2.svg";
import {Link} from "react-router-dom";

const Header = function () {

    return (

    <div>
        <div className="navContainer">
            <div className= "container">
                <div className="navBar">
                    <div className="navElement">
                        <Link to="/DeliveryPage">Оплата и доставка</Link>
                        <Link to="/AboutPage">Рейтинги/Отзывы</Link>
                        <Link to="/MainPage">Скидки</Link>
                    </div>

                    <div className="navElement">
                        <Link to="/ContactPage">Контакты</Link>
                        <span>
                            <p>+7 (999) 999 99 99</p>
                            <p>круглосуточно</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className="searchContainer">
            <div className= "container">
                <div className="searchBar">
                    <div className="logo">
                        <img src={logo} alt="#"/>
                    </div>
                    <div className="interactivity">
                        <div className="catalog">
                            <Link to="/MainPage">
                                <button className="catalogButton">
                                    <img src={catalog} alt="#"/>
                                    <p>Каталог</p>
                                </button>
                            </Link>
                        </div>

                        <div className="search">
                            <input type="text" className="searchInput" placeholder={"Я ищу..."}/>
                            <button className="searchButton"><img src={search} alt="#"/></button>
                        </div>
                    </div>

                    <div className="basket">
                        <Link to="/BasketPage">КОРЗИНА</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;