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
            <a name="sale">
                <CarouselCards/>
            </a>
            <a name="catalog">
                <Books/>
            </a>
        </div>
    );
};

export default MainPage;