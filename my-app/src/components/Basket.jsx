import React, {useEffect, useState} from 'react';
import "../styles/containerStyle.css";
import "../styles/basketStyle.css";
import {Link} from "react-router-dom";
import BasketProduct from "./BasketProduct";

import bookList, {clearList, removeItemIfExists} from "./BookList";

const Basket = function () {

    const [products] = useState([
        {id: 1,image: "../img/book.png", name:"Кто-то просит прощения", author:"Вадим Панов", janre:"детектив", price:349},
        {id: 2,image: "../img/book.png", name:"Свет мой тишина", author:"Татьяна Полякова", janre:"детектив", price:329},
        {id: 3,image: "../img/book.png", name:"Дневник служанки", author:"Лорет Энн Уайт", janre:"детектив", price:329},
        {id: 4,image: "../img/book.png", name:"Тьма после рассвета", author:"Александра Маринина", janre:"детектив", price:519},
        {id: 5,image: "../img/book.png", name:"Нити жизни", author:"Наталья Тимошенко", janre:"детектив", price:199},
        {id: 6,image: "../img/book.png", name:"Смерть приходит в Марлоу", author:"Роберт Торогуд", janre:"детектив", price:459 },
        {id: 7,image: "../img/book.png", name:"Княгиня Серебряная", author:"Наталья Андреева", janre:"детектив", price:349},
        {id: 8,image: "../img/book.png", name:"Квартира в раю", author:"Татьяна Устинова", janre:"детектив", price:329 },
        {id: 9,image: "../img/book.png", name:"Выстрел мимо цели", author:"Ричард Осман", janre:"детектив", price:549 },
        {id: 10,image: "../img/book.png", name:"Дом огней", author:"Донато Карризи", janre:"детектив", price:408},

        {id: 11,image: "../img/book.png", name:"Атлант расправил плечи", author:"Айн Рэнд", janre:"классическая литература", price:599},
        {id: 12,image: "../img/book.png", name:"Мастер и Маргарита", author:"Михаил Булгаков", janre:"классическая литература", price:344},
        {id: 13,image: "../img/book.png", name:"Вино из одуванчиков", author:"Рэй Брэдбери", janre:"классическая литература", price:339},
        {id: 14,image: "../img/book.png", name:"Лолита", author:"Владимир Набоков", janre:"классическая литература", price:349},
        {id: 15,image: "../img/book.png", name:"Тихий Дон", author:"Михаил Шолохов", janre:"классическая литература", price:408},
        {id: 16,image: "../img/book.png", name:"Финансист. Титан. Стоик", author:"Теодор Драйзер", janre:"классическая литература", price:439 },
        {id: 17,image: "../img/book.png", name:"К востоку от Эдема", author:"Джон Эрнст ", janre:"классическая литература", price:179},
        {id: 18,image: "../img/book.png", name:"Искусство войны", author:"Сунь-цзы", janre:"классическая литература", price:299 },
        {id: 19,image: "../img/book.png", name:"Доктор Живаго", author:"Борис Пастернак", janre:"классическая литература", price:99 },
        {id: 20,image: "../img/book.png", name:"Наедине с собой. Размышления", author:"Марк Аврелий", janre:"классическая литература", price:229},

        {id: 21,image: "../img/book.png", name:"Родная кровь", author:"Anne Dar", janre:"любовные романы", price:490},
        {id: 22,image: "../img/book.png", name:"Жизнь №2", author:"Anne Dar", janre:"любовные романы", price:490},
        {id: 23,image: "../img/book.png", name:"Хрупкое сердце", author:"Янина Логвин", janre:"любовные романы", price:249},
        {id: 24,image: "../img/book.png", name:"Ломаные линии судьбы", author:"Татьяна Алюшина", janre:"любовные романы", price:229},
        {id: 25,image: "../img/book.png", name:"Семь дней до Мегиддо", author:"Сергей Лукьяненко", janre:"любовные романы", price:379},
        {id: 26,image: "../img/book.png", name:"Тысяча свадебных платьев", author:"Барбара Дэвис", janre:"любовные романы", price:449 },
        {id: 27,image: "../img/book.png", name:"Когда трещит лед", author:"Алеся Кузнецова", janre:"любовные романы", price:249},
        {id: 28,image: "../img/book.png", name:"Совершенные", author:"Марина Суржевская", janre:"любовные романы", price:349 },
        {id: 29,image: "../img/book.png", name:"Пополам", author:"Маша Трауб", janre:"любовные романы", price:319 },
        {id: 30,image: "../img/book.png", name:"Венецианский контракт", author:"Марина Фиорато", janre:"любовные романы", price:359},
    ])

    const [filteredProducts, setFilteredProducts] = useState(
        products.filter(post => bookList.includes(post.id))
    );

    const [totalCost, setTotalCost] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    const calculateTotals = (selectedProducts) => {
        const totalCost = selectedProducts.reduce((total, product) => total + (product.price * catchProductCount),0);
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

    const [catchProductCount, setCatchProductCount] = useState(1);

    const catchCountChange = (newCount) => {
        setCatchProductCount(newCount);
    };

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

                                <Link to="/OrderPage" className="basketButtonNext">
                                    <button>Перейти к оформлению</button>
                                </Link>
                            </div>
                        </div>

                        <div className="products">
                            {filteredProducts.map(post =>
                                <BasketProduct
                                    key={post.id}
                                    post={post}
                                    deleteBook={deleteBook}
                                    onCatchCauntChange = {catchCountChange}
                                />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;