import React from 'react';
import "../../styles/containerStyle.css";
import "../../styles/tyStyle.css"

const TyPage = function () {
    return (
        <div>
            <div className="container">
                <div className="tyElements">
                    <img src={require('../../img/gifLogo.gif')} alt="#"/>
                    <h1>Спасибо за заказ</h1>
                    <p>Наш менеджер скоро свяжется с вами!</p>
                    <a href="/MainPage">
                        <button>Вернуться в магазин</button>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default TyPage;