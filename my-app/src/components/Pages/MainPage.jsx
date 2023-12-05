import React from 'react';
import HorizontallyBanner from "../Banners/HorizontallyBanner";
import Carousel from "../Banners/Carousel";
import Books from "../Books/Books";

const MainPage = function () {
    return (
        <div>
           <HorizontallyBanner/>
           <Carousel/>
           <Books/>
        </div>
    );
};

export default MainPage;