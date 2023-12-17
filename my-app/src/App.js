import React from "react";
import "./styles/App.css";
import Header from "./components/Header/Header"

import Footer from "./components/Footer/Footer";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./components/Pages/MainPage";
import BasketPage from "./components/Pages/BasketPage";
import OrderPage from "./components/Pages/OrderPage";
import TyPage from "./components/Pages/TyPage";
import DeliveryPage from "./components/Pages/DeliveryPage";
import RequisitePage from "./components/Pages/RequisitePage";
import ContactPage from "./components/Pages/ContactPage";
import AboutPage from "./components/Pages/AboutPage";

import { BasketProvider } from './components/BasketContext';

function App() {


  return (
      <BasketProvider>
          <BrowserRouter>
              <div className="App">
                <Header/>

                <Routes>
                    <Route path="*" element={<Navigate to="/MainPage" replace />} />

                    <Route path={"/MainPage"} element={<MainPage/>}/>

                    <Route path={"/BasketPage"} element={<BasketPage/>}/>

                    <Route path={"/OrderPage"} element={<OrderPage/>}/>

                    <Route path={"/TyPage"} element={<TyPage/>}/>

                    <Route path={"/DeliveryPage"} element={<DeliveryPage/>}/>

                    <Route path={"/RequisitePage"} element={<RequisitePage/>}/>

                    <Route path={"/ContactPage"} element={<ContactPage/>}/>

                    <Route path={"/AboutPage"} element={<AboutPage/>}/>
                </Routes>

                <Footer/>
              </div>
          </BrowserRouter>
      </BasketProvider>
  );
}

export default App;
