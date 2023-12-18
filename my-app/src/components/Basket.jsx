import React, {useEffect, useState} from 'react';
import "../styles/containerStyle.css";
import "../styles/basketStyle.css";
import {Link} from "react-router-dom";
import BasketProduct from "./BasketProduct";

import bookList, {clearList, removeItemIfExists} from "./BookList";

const Basket = function () {

    const [products] = useState([
        {id: 1,image: "../img/book.png", name:"Книга1", author:"Автор1", price:111},
        {id: 2,image: "../img/book.png", name:"Книга2", author:"Автор2", price:222},
        {id: 3,image: "../img/book.png", name:"Книга3", author:"Автор3", price:333},
        {id: 4,image: "../img/book.png", name:"Книга4", author:"Автор4", price:444},
        {id: 5,image: "../img/book.png", name:"Книга5", author:"Автор5", price:555},
        {id: 6,image: "../img/book.png", name:"Книга6", author:"Автор6", price:666},
        {id: 7,image: "../img/book.png", name:"Книга7", author:"Автор7", price:777},
        {id: 8,image: "../img/book.png", name:"Книга8", author:"Автор8", price:888},
        {id: 9,image: "../img/book.png", name:"Книга9", author:"Автор9", price:999},
    ])

    const [filteredProducts, setFilteredProducts] = useState(
        products.filter(post => bookList.includes(post.id))
    );

    const [totalCost, setTotalCost] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    const calculateTotals = (selectedProducts) => {
        const totalCost = selectedProducts.reduce((total, product) => total + product.price, 0);
        const discount = selectedProducts.reduce((total, product) => total + (product.discount || 0), 0);
        const finalPrice = totalCost - discount;

        return { totalCost, discount, finalPrice };
    };

    useEffect(() => {
        const selectedProducts = products.filter(post => bookList.includes(post.id));
        const totals = calculateTotals(selectedProducts);

        setFilteredProducts(selectedProducts);
        setTotalCost(totals.totalCost);
        setDiscount(totals.discount);
        setFinalPrice(totals.finalPrice);
    }, [bookList, products]);

    function clearBasket() {
        setFilteredProducts([]);

        clearList();

        // Пересчитываем сумму после удаления
        const selectedProducts = products.filter(post => bookList.includes(post.id));
        const totals = calculateTotals(selectedProducts);

        setFilteredProducts(selectedProducts);
        setTotalCost(totals.totalCost);
        setDiscount(totals.discount);
        setFinalPrice(totals.finalPrice);
    }

    const deleteBook = (product) => {
        setFilteredProducts(filteredProducts.filter(p => p.id !== product.id))

        removeItemIfExists(product.id);

        // Пересчитываем сумму после удаления
        const selectedProducts = products.filter(post => bookList.includes(post.id));
        const totals = calculateTotals(selectedProducts);

        setFilteredProducts(selectedProducts);
        setTotalCost(totals.totalCost);
        setDiscount(totals.discount);
        setFinalPrice(totals.finalPrice);
    }

    return (
        <div>
            <div className="container">
                <div className="basketElements">
                    <div className="basketTitle">
                        <h1>Ваш заказ</h1>
                        <p onClick={clearBasket}>Очистить корзину</p>
                    </div>

                    <div className="basketBody">
                        <div className="basketInfo">
                            <p>В корзине:</p>

                            <div className="basketInfoPrice">
                                <div className="basketCost">
                                    <p>Кол-во товара N <br/> на сумму</p>
                                    <p>{totalCost} руб.</p>
                                </div>

                                <div className="basketDiscount">
                                    <p>Скидка</p>
                                    <p>{discount} руб.</p>
                                </div>

                                <div className="basketPrice">
                                    <p>Итог</p>
                                    <p>{finalPrice} руб.</p>
                                </div>

                                <Link to="/OrderPage">
                                    <button>Перейти к оформлению</button>
                                </Link>
                            </div>
                        </div>

                        <div className="products">
                            {filteredProducts.map(post =>
                                <BasketProduct
                                    deleteBook={deleteBook}
                                    post={post}
                                    key={post.id}
                                />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;