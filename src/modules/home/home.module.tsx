import React, {useEffect, useReducer, useState} from 'react'
import Slides from "../../modules/home/components/Slides";
import CategoryBanner from "../../modules/home/components/CategoryBanner";
import HomeBanner from "../../modules/home/components/HomeBanner";
import Brands from "../../modules/home/components/Brands";
import {staticService} from "../../services/static.service";
import {async} from "q";

export default function HomeModule() {

    const [brands, setBrands] = useState([]);
    const [slides, setSlides] = useState([]);

    async function getBrands() {
        let brands = await staticService.getBrands();
        setBrands(brands);
    }

    async function getSlides() {
        let slides = await staticService.getSlides();
        setSlides(slides);
    }

    useEffect(() => {
        getBrands();
    }, []);

    useEffect(() => {
        getSlides();
    }, []);

    return (<div>
        <Slides slides={slides}/>
        <CategoryBanner/>
        <HomeBanner/>
        <Brands brands={brands}/>
    </div>)
}
