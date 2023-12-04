import React from 'react';
import "../styles/basketStyle.css";

const BasketProduct = function () {
    return (
        <div>
             <div className="basketProduct">
                 <div className="img"></div>
                 <div className="basketProductInfo">
                     <div className="nameAuthor">
                         <p>Книга</p>
                         <p>Автор</p>
                     </div>

                     <div className="basketProductCost">

                     </div>
                 </div>
             </div>
        </div>
    );
};

export default BasketProduct;