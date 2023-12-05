import React from 'react';
import "../../styles/containerStyle.css";
import "../../styles/orderStyle.css";

const OrderPage = function () {
    return (
        <div>
          <div className="container">
              <div className="orderElements">
                  <div className="title">
                      <h1>Оформление заказа</h1>
                  </div>
                  <form action="my-app/src/components/Pages/OrderPage#">
                      <div className="orderForm">
                          <div className="orderInputBlock">
                              <div className="orderInput">
                                  <h2>Данные покупателя</h2>
                                  <div className="orderInputElements">
                                      <div className="fio">
                                          <input type="text" placeholder={"Имя*"}/>
                                          <input type="text" placeholder={"Фамилия"}/>
                                      </div>
                                      <input type="text" placeholder={"Телефон*"}/>
                                      <input type="text" placeholder={"Почта"}/>
                                  </div>
                              </div>

                              <div className="orderInput">
                                  <h2>Адрес доставки</h2>
                                  <div className="orderInputElements">
                                      <input type="text" placeholder={"Адрес*"}/>
                                      <input type="text" placeholder={"Почта"}/>
                                  </div>
                              </div>
                          </div>

                          <div className="orderInfo">
                              <p>В заказе N товар</p>

                              <div className="orderInfoPrice">
                                  <div className="cost">
                                      <p>Цена</p>
                                      <p>N руб.</p>
                                  </div>

                                  <div className="discount">
                                      <p>Скидка</p>
                                      <p>N руб.</p>
                                  </div>
                              </div>

                              <div className="agree">
                                  <input type="checkbox" name="checkbox" id="checkbox"/>
                                  <label htmlFor="checkbox">Согласие с обработкой данных</label>
                              </div>
                          </div>
                      </div>

                      <hr/>

                      <div className="submitButton">
                          <button>Оформить</button>

                          <div className="finalPrice">
                              <p>Итог</p>
                              <p>N руб</p>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
        </div>
    );
};

export default OrderPage;