import React, {useState} from 'react';
import "../styles/containerStyle.css";
import "../styles/basketStyle.css";
import {Link} from "react-router-dom";
import BasketProduct from "./BasketProduct";

import { useBasketContext } from './BasketContext';

const Basket = function () {

    const { products } = useBasketContext();


    // const [products1, setProducts] = useState([
    //     {id: 1,image: "../img/book.png", name:"Книга1", author:"Автор1", price:111},
    //     {id: 2,image: "../img/book.png", name:"Книга2", author:"Автор2", price:222},
    //     {id: 3,image: "../img/book.png", name:"Книга3", author:"Автор3", price:333},
    //     {id: 4,image: "../img/book.png", name:"Книга4", author:"Автор4", price:444},
    //     {id: 5,image: "../img/book.png", name:"Книга5", author:"Автор5", price:555},
    //     {id: 6,image: "../img/book.png", name:"Книга6", author:"Автор6", price:666},
    //     {id: 7,image: "../img/book.png", name:"Книга7", author:"Автор7", price:777},
    //     {id: 8,image: "../img/book.png", name:"Книга8", author:"Автор8", price:888},
    //     {id: 9,image: "../img/book.png", name:"Книга9", author:"Автор9", price:999},
    // ])

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

                                <Link to="/OrderPage">
                                    <button>Перейти к оформлению</button>
                                </Link>
                            </div>
                        </div>

                        <div className="products">
                            {products.map(post =>
                                <BasketProduct post={post} key={post.id}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;