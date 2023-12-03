import "./styles/App.css";
import Counter from "./components/Counter";
import Header from "./components/Header"
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
        <Header/>
        <Counter/>
        <Carousel/>
        <Footer/>
    </div>
  );
}

export default App;
