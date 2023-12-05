import React from 'react';
import "../../styles/containerStyle.css";
import "./bookCard.css";
import name from "./img/book.png";

const Book = function (props) {
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
                    <button>В КОРЗИНУ</button>
                </div>
            </div>
        </div>
    );
};

export default Book;