import "../styles/containerStyle.css";
import "./Books/bookCard.css";
import name from "../img/22.jpeg";

import { useBasketContext } from './BasketContext';


const Book = function (props) {

    const { addToBasket } = useBasketContext();

    function addProduct() {
        const newProduct = {
            id: props.post.id,
            image: props.post.image,
            name: props.post.name,
            author: props.post.author,
            price: props.post.price
        }

        console.log(newProduct)

        addToBasket(newProduct);
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
                    <button onClick={addProduct} >В КОРЗИНУ</button>
                </div>
            </div>
        </div>
    );
};

export default Book;