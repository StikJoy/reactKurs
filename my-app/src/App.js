import React, {useState} from "react";
import "./styles/App.css";
import Header from "./components/Header"
import HorizontallyBanner from "./components/HorizontallyBanner";
import Carousel from "./components/Carousel";
import Book from "./components/Book";
import Footer from "./components/Footer";



function App() {
// , setBooks
    const [books] = useState([
        {id: 1,image: "../img/book.png", name:"Книга1", author:"Автор1", price:111},
        {id: 2,image: "../img/book.png", name:"Книга2", author:"Автор2", price:222},
        {id: 3,image: "../img/book.png", name:"Книга3", author:"Автор3", price:333},
        {id: 4,image: "../img/book.png", name:"Книга4", author:"Автор4", price:444},
        {id: 5,image: "../img/book.png", name:"Книга5", author:"Автор5", price:555},
        {id: 6,image: "../img/book.png", name:"Книга6", author:"Автор6", price:666},
        {id: 7,image: "../img/book.png", name:"Книга7", author:"Автор7", price:777},
        {id: 8,image: "../img/book.png", name:"Книга8", author:"Автор8", price:888},
        {id: 9,image: "../img/book.png", name:"Книга9", author:"Автор9", price:999},
        {id: 10,image: "../img/book.png", name:"Книга10", author:"Автор10", price:999},
    ])

  return (
    <div className="App">
        <Header/>
        <HorizontallyBanner/>
        <Carousel/>

        <div className="bookList container">
            {books.map(post =>
                <Book post={post} key={post.id}/>)}
        </div>
        <Footer/>
    </div>
  );
}

export default App;
