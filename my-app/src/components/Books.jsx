import React, {useState} from 'react';
import Book from "./Book";

const Books = function () {

    const [books] = useState([
        {id: 1,image: "../imgCards/1.webp", name:"Кто-то просит прощения", author:"Вадим Панов", janre:"детектив", price:349},
        {id: 2,image: "../imgCards/1.webp", name:"Свет мой тишина", author:"Татьяна Полякова", janre:"детектив", price:329},
        {id: 3,image: "../imgCards/1.webp", name:"Дневник служанки", author:"Лорет Энн Уайт", janre:"детектив", price:329},
        {id: 4,image: "../imgCards/1.webp", name:"Тьма после рассвета", author:"Александра Маринина", janre:"детектив", price:519},
        {id: 5,image: "../imgCards/1.webp", name:"Нити жизни", author:"Наталья Тимошенко", janre:"детектив", price:199},
        {id: 6,image: "../imgCards/1.webp", name:"Смерть приходит в Марлоу", author:"Роберт Торогуд", janre:"детектив", price:459 },
        {id: 7,image: "../imgCards/1.webp", name:"Княгиня Серебряная", author:"Наталья Андреева", janre:"детектив", price:349},
        {id: 8,image: "../imgCards/1.webp", name:"Квартира в раю", author:"Татьяна Устинова", janre:"детектив", price:329 },
        {id: 9,image: "../imgCards/1.webp", name:"Выстрел мимо цели", author:"Ричард Осман", janre:"детектив", price:549 },
        {id: 10,image: "../imgCards/1.webp", name:"Дом огней", author:"Донато Карризи", janre:"детектив", price:408},

        {id: 11,image: "../imgCards/1.webp", name:"Атлант расправил плечи", author:"Айн Рэнд", janre:"классическая литература", price:599},
        {id: 12,image: "../imgCards/1.webp", name:"Мастер и Маргарита", author:"Михаил Булгаков", janre:"классическая литература", price:344},
        {id: 13,image: "../imgCards/1.webp", name:"Вино из одуванчиков", author:"Рэй Брэдбери", janre:"классическая литература", price:339},
        {id: 14,image: "../imgCards/1.webp", name:"Лолита", author:"Владимир Набоков", janre:"классическая литература", price:349},
        {id: 15,image: "../imgCards/1.webp", name:"Тихий Дон", author:"Михаил Шолохов", janre:"классическая литература", price:408},
        {id: 16,image: "../imgCards/1.webp", name:"Финансист. Титан. Стоик", author:"Теодор Драйзер", janre:"классическая литература", price:439 },
        {id: 17,image: "../imgCards/1.webp", name:"К востоку от Эдема", author:"Джон Эрнст ", janre:"классическая литература", price:179},
        {id: 18,image: "../imgCards/1.webp", name:"Искусство войны", author:"Сунь-цзы", janre:"классическая литература", price:299 },
        {id: 19,image: "../imgCards/1.webp", name:"Доктор Живаго", author:"Борис Пастернак", janre:"классическая литература", price:99 },
        {id: 20,image: "../imgCards/1.webp", name:"Наедине с собой. Размышления", author:"Марк Аврелий", janre:"классическая литература", price:229},

        {id: 21,image: "../imgCards/1.webp", name:"Родная кровь", author:"Anne Dar", janre:"любовные романы", price:490},
        {id: 22,image: "../imgCards/1.webp", name:"Жизнь №2", author:"Anne Dar", janre:"любовные романы", price:490},
        {id: 23,image: "../imgCards/1.webp", name:"Хрупкое сердце", author:"Янина Логвин", janre:"любовные романы", price:249},
        {id: 24,image: "../imgCards/1.webp", name:"Ломаные линии судьбы", author:"Татьяна Алюшина", janre:"любовные романы", price:229},
        {id: 25,image: "../imgCards/1.webp", name:"Семь дней до Мегиддо", author:"Сергей Лукьяненко", janre:"любовные романы", price:379},
        {id: 26,image: "../imgCards/1.webp", name:"Тысяча свадебных платьев", author:"Барбара Дэвис", janre:"любовные романы", price:449 },
        {id: 27,image: "../imgCards/1.webp", name:"Когда трещит лед", author:"Алеся Кузнецова", janre:"любовные романы", price:249},
        {id: 28,image: "../imgCards/1.webp", name:"Совершенные", author:"Марина Суржевская", janre:"любовные романы", price:349 },
        {id: 29,image: "../imgCards/1.webp", name:"Пополам", author:"Маша Трауб", janre:"любовные романы", price:319 },
        {id: 30,image: "../imgCards/1.webp", name:"Венецианский контракт", author:"Марина Фиорато", janre:"любовные романы", price:359},
    ])

    return (
        <div>
            <div className="bookList container">
                {books.map(post =>
                    <Book post={post} key={post.id}/>)}
            </div>
        </div>
    );
};

export default Books;