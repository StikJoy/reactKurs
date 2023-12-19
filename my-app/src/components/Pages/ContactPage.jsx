import React from 'react';
import "../../styles/textStyle.css"
import mapContact from "../../img/mapContact.png"
import HorizontallyBanner2 from "../Banners/HorizontallyBanner2";

const DeliveryPage = function () {
    return (
        <div className="container">
            <HorizontallyBanner2/>
            <div className="text">
                <h1>Наши контакты</h1>

                <pre>
<span>
+7 (999) 999 99 99 <br/>
shop@booklymail.ru <br/>
</span>
<br/>
Книжный интернет-магазин «Букля» 192168, Санкт-Петербург, ул. Большая морская, дом 67. <br/>
Электронная почта: shop@booklymail.ru <br/>
График работы операторской службы: Ежедневно, круглосуточно. <br/>
 <br/>
Бесплатный звонок по России (с мобильных и городских): <span>+7 (999) 999 99 99</span> <br/>
 <br/>
Все вопросы, касающиеся судьбы заказа: его комплектацию, прохождение платежа, <br/>
сроки формирования, время доставки — вы можете обсудить с оператором <br/>
в «Личном пространстве». Оставьте сообщение через электронную почту. <br/>
По каждому из заказов ведется отдельная переписка. <br/>
Вся переписка сохраняется в архиве «История сообщений». <br/>
                 </pre>

                <div className="textImage">
                    <img src={mapContact} alt="#"/>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPage;