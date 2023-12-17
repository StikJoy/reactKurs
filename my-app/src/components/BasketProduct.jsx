// BasketProduct.jsx
import React from 'react';
import "../styles/basketProductStyle.css";
import img from "../img/22.jpeg";
import Counter from "./Counter";
import bookList, {removeItemIfExists} from "./BookList";

const BasketProduct = function (props) {

    function delBook() {
        console.log(bookList);

        removeItemIfExists(props.post.id);
    }

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
                        <Counter />
                        <h1>X</h1>
                        <p>{props.post.price} руб.</p>
                    </div>
                    <div className="delete" onClick={delBook}>
                        <p>Удалить</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketProduct;
