import React from 'react';
import "../../styles/textStyle.css"

const DeliveryPage = function () {
    return (
        <div className="container">
            <div className="text">
                <h1>Реквизиты организации</h1>

                <pre>
ООО «Bookly.РУ»ИНН 7728644571 / КПП 771701001,129 626, <br/>
г. Санкт-Петербург, ул. Большая морская, д. 67, стр. 1, этаж цокольный, пом. 1, <br/>
ком 62. Тел./факс: +7 495 733-77-74р/с <br/>
<br/>
40702810338000075568 в банке ПАО СБЕРБАНК г. Москва к/с 30101810400000000225, <br/>
БИК: 044525225, ОКВЭД 47.91.2, <br/>
ОКПО 84179607,ОГРН 1077764644264br
                 </pre>
            </div>
        </div>
    );
};

export default DeliveryPage;