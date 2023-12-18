// BasketProduct.jsx
import React, {useState} from 'react';
import "../styles/basketProductStyle.css";
import img from "../img/22.jpeg";
import Counter from "./Counter";

const BasketProduct = function (props, deleteBook) {

    const [productCount, setProductCount] = useState(1);

    const handleCountChange = (newCount) => {
        setProductCount(newCount);
    };

    return (
        <div className="basketProduct">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div className="basketProductInfo">
                <div className="nameAuthor">
                    <h3>{props.post.name}</h3>
                    <p>{props.post.author}</p>
                </div>

                <div className="basketProductCost">
                    <div className="basketProductCostInfo">
                        <Counter onCountChange={handleCountChange}/>
                        <h1>X</h1>
                        <p>{props.post.price * productCount} руб.</p>
                    </div>
                    <div className="delete" onClick={() => props.deleteBook(props.post)}>
                        <p>Удалить</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketProduct;
