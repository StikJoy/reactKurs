import React from 'react';
import "../styles/containerStyle.css";
import "../styles/headerStyle.css";

import logo from "../img/logo.png";
import catalog from "../img/catalog.png";
import search from "../img/search2.svg";

const Header = function () {

    return (

    <div>
        <div className="navContainer">
            <div className= "container">
                <div className="navBar">
                    <div className="navElement">
                        <a href="/#">Оплата и доставка</a>
                        <a href="/#:">Рейтинги/Отзывы</a>
                        <a href="/#:">Скидки</a>
                    </div>

                    <div className="navElement">
                        <a href="/#">Контакты</a>
                        <a href="/#">
                            <p>+7 (999) 999 99 99</p>
                            <p>круглосуточно</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="searchContainer">
            <div className= "container">
                <div className="searchBar">
                    <div className="logo">
                        <img src={logo} alt="#"/>
                        <p>ЛОГОТИП</p>
                    </div>
                    <div className="interactivity">
                        <div className="catalog">
                            <button className="catalogButton">
                                <img src={catalog} alt="#"/>
                                <p>Каталог</p>
                            </button>
                        </div>

                        <div className="search">
                            <input type="text" className="searchInput" placeholder={"Я ищу..."}/>
                            <button className="searchButton"><img src={search} alt="#"/></button>
                        </div>
                    </div>

                    <div className="basket">
                        <a href="/#">КОРЗИНА</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;