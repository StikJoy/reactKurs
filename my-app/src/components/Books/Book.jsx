import "../../styles/containerStyle.css";
import "./bookCard.css";
import name from "../../img/22.jpeg";

const Book = function (props) {
    function addProduct() {
        const newProduct = {
            id: props.post.id,
            image: props.post.image,
            name: props.post.name,
            author: props.post.author,
            price: props.post.price
        }

        console.log(newProduct)
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