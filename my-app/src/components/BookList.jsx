import React from 'react';
import BasketProduct from "./BasketProduct";

const BookList = () => {
    return (
        <div className="products">

            {products1.map(post =>
                <BasketProduct post={post} key={post.id}/>)}
        </div>
    );
};

export default BookList;