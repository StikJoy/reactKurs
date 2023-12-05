import React from 'react';
import "../../styles/textStyle.css"

const DeliveryPage = function () {
    return (
        <div className="container">
            <div className="text">
                <h1>Доставка</h1>

                 <pre>
<span>Курьерская доставка</span>  г. Санкт-Петербург <br/>
Ближайшая дата доставки: 6 декабря <br/>
Заказ на сумму от 3000 р. доставляется бесплатно. <br/>
 <br/>
<span>Тарифы службы доставки Лен.Область</span> <br/>
Тарифы на доставку курьером и в пункты самовывоза ЛО зависят от дальности доставки. <br/>
Доставка расчитывается индивидуально. <br/>
 <br/>
<span>Все способы доставки. Россия и мир</span> <br/>
Курьерская доставка по России, региональные пункты самовывоза, Почта России, DHL. <br/>
                 </pre>
            </div>
        </div>
    );
};

export default DeliveryPage;