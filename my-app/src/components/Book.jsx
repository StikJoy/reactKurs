import React, { useState } from 'react';
import "../styles/containerStyle.css";
import "./Books/bookCard.css";
import name from "./imgCards/1.webp"

import bookList, { addItemIfNotExists } from "./BookList";

const Book = function (props) {

    const [isButtonActive, setButtonActive] = useState(false);

    function addBook() {
        console.log(bookList);

        addItemIfNotExists(props.post.id);

        setButtonActive(!isButtonActive);
    }

    return (
        <div >
            <div className="bookCard">
                <div className="bookImage">
                    <img src={name} alt="#"/>
                </div>

                <div className="bookDescription">
                    <div className="nameAuthor">
                        <h3>{props.post.name}</h3>
                        <p>{props.post.author}</p>
                    </div>
                    <div className="price">
                        <p>{props.post.price} руб</p>
                    </div>
                </div>

                <div className="bookButton">
                    <button className={`add ${isButtonActive ? 'activeMyButton' : ''}`} onClick={addBook} >В КОРЗИНУ</button>
                </div>
            </div>
        </div>
    );
};

export default Book;