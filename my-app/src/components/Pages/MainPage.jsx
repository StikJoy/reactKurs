import React from 'react';
import HorizontallyBanner from "../Banners/HorizontallyBanner";
import Carousel from "../Banners/Carousel";
import Books from "../Books";
import CarouselCards from "../CarouselCards";

const MainPage = function () {
    return (
        <div>
           <HorizontallyBanner/>
           <Carousel/>
            <CarouselCards/>
           <Books/>
        </div>
    );
};

export default MainPage;