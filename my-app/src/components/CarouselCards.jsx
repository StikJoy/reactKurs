import React, { useState } from 'react';
import Book from './Book';
import "./Books/bookCard.css";

const CarouselCards = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [cards] = useState([
        {id: 21,image: "../imgCards/1.webp", name:"Родная кровь", author:"Anne Dar", janre:"любовные романы", price:490},
        {id: 22,image: "../imgCards/1.webp", name:"Жизнь №2", author:"Anne Dar", janre:"любовные романы", price:490},
        {id: 23,image: "../imgCards/1.webp", name:"Хрупкое сердце", author:"Янина Логвин", janre:"любовные романы", price:249},
        {id: 24,image: "../imgCards/1.webp", name:"Ломаные линии судьбы", author:"Татьяна Алюшина", janre:"любовные романы", price:229},
        {id: 25,image: "../imgCards/1.webp", name:"Семь дней до Мегиддо", author:"Сергей Лукьяненко", janre:"любовные романы", price:379},
        {id: 26,image: "../imgCards/1.webp", name:"Тысяча свадебных платьев", author:"Барбара Дэвис", janre:"любовные романы", price:449 },
        {id: 27,image: "../imgCards/1.webp", name:"Когда трещит лед", author:"Алеся Кузнецова", janre:"любовные романы", price:249},
        {id: 28,image: "../imgCards/1.webp", name:"Совершенные", author:"Марина Суржевская", janre:"любовные романы", price:349 },
        {id: 29,image: "../imgCards/1.webp", name:"Пополам", author:"Маша Трауб", janre:"любовные романы", price:319 },
        {id: 30,image: "../imgCards/1.webp", name:"Венецианский контракт", author:"Марина Фиорато", janre:"любовные романы", price:359}
    ]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + cards.length) % cards.length);
    };

    return (
        <div className="cardFon" style={{ backgroundColor: '#58746E', width: '100%'}}>
            <div className="container" style={{ overflow: 'hidden', backgroundColor: '#58746E', margin: '20px auto' }}>

                <div className="row">
                    {cards.slice(currentSlide, currentSlide + 4).map((card) => (
                        <div key={card.id} className="col-md-3">
                            <Book post={card} />
                        </div>
                    ))}
                </div>

                <div>
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