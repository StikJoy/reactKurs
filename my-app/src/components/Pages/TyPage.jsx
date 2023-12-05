import React from 'react';
import "../../styles/containerStyle.css";
import "../../styles/tyStyle.css"

const TyPage = function () {
    return (
        <div>
            <div className="container">
                <div className="tyElements">
                    <img src="my-app/src/components/Pages/TyPage#" alt="#"/>
                    <h1>Спасибо за заказ</h1>
                    <p>Наш менеджер скоро свяжется с вами!</p>
                    <button>Вернуться в магазин</button>
                </div>
            </div>
        </div>
    );
};

export default TyPage;