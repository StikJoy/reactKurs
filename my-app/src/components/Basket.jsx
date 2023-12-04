import React from 'react';
import "../styles/containerStyle.css";
import "../styles/basketStyle.css";

const Basket = function () {
    return (
        <div>
            <div className="container">
                <div className="basketElements">
                    <div className="basketTitle">
                        <h1>Ваш заказ</h1>
                        <p>Очистить корзину</p>
                    </div>

                    <div className="basketBody">
                        <div className="basketInfo">
                            <p>В корзине:</p>

                            <div className="basketInfoPrice">
                                <div className="basketCost">
                                    <p>Кол-во товара N <br/> на сумму</p>
                                    <p>N руб.</p>
                                </div>

                                <div className="basketDiscount">
                                    <p>Скидка</p>
                                    <p>N руб.</p>
                                </div>

                                <div className="basketPrice">
                                    <p>Итог</p>
                                    <p>N руб.</p>
                                </div>

                                <button>Перейти к оформлению</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Basket;