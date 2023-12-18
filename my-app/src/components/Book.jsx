import "../styles/containerStyle.css";
import "./Books/bookCard.css";
import name from "../img/22.jpeg";

import bookList, { addItemIfNotExists } from "./BookList";

const Book = function (props) {

    function addBook() {
        console.log(bookList);

        addItemIfNotExists(props.post.id);
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
                    <button className="del" onClick={addBook} >В КОРЗИНУ</button>
                </div>
            </div>
        </div>
    );
};

export default Book;