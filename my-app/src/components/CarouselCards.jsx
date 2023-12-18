import React, { useState } from 'react';
import Book from './Book';
import "./Books/bookCard.css";

const CarouselCards = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [cards] = useState([
        { id: 1, image: "../img/book.png", name: "Книга1", author: "Автор1", price: 111 },
        { id: 2, image: "../img/book.png", name: "Книга2", author: "Автор2", price: 222 },
        { id: 3, image: "../img/book.png", name: "Книга3", author: "Автор3", price: 333 },
        { id: 4, image: "../img/book.png", name: "Книга4", author: "Автор4", price: 444 },
        { id: 5, image: "../img/book.png", name: "Книга5", author: "Автор5", price: 555 },
        { id: 6, image: "../img/book.png", name: "Книга6", author: "Автор6", price: 666 },
        { id: 7, image: "../img/book.png", name: "Книга7", author: "Автор7", price: 777 },
        { id: 8, image: "../img/book.png", name: "Книга8", author: "Автор8", price: 888 },
        { id: 9, image: "../img/book.png", name: "Книга9", author: "Автор9", price: 999 },
        { id: 10, image: "../img/book.png", name: "Книга10", author: "Автор10", price: 999 },
    ]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + cards.length) % cards.length);
    };

    return (
        <div className="cardFon" style={{ backgroundColor: '#58746E', width: '100%'}}>
            <div className="container" style={{ backgroundColor: '#58746E', padding: '20px', margin: '20px auto' }}>

                <div className="row">
                    {cards.slice(currentSlide, currentSlide + 4).map((card) => (
                        <div key={card.id} className="col-md-3">
                            <Book post={card} />
                        </div>
                    ))}
                </div>

                <div className="mt-3">
                    <button className="carouselButt" onClick={prevSlide} disabled={currentSlide === 0}>
                        Назад
                    </button>
                    <button className="carouselButt" onClick={nextSlide} disabled={currentSlide + 4 >= cards.length}>
                        Вперед
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarouselCards;