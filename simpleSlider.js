import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './main.module.css';

function SimpleSlider(){
    const settings = {
        dots: true,
        arrow: true,
        speed: 500,
        infinite: true,
        slideToScroll: 1,
        autoplay: true,
        cssEase: 'liner',
        centerPadding: "0px"
        
    };
    return(
        <div className={styles.banner}>
            <Slider {...settings}>
                <div>
                    <img src="https://media.bunjang.co.kr/images/nocrop/985610203_w3087.jpg"/>
                </div>
                <div>
                    <img src="https://media.bunjang.co.kr/images/nocrop/986784329_w2058.jpg"/>
                </div>
                <div>
                    <img src="https://media.bunjang.co.kr/images/nocrop/926900341_w2058.jpg"/>
                </div>
                <div>
                    <img src="https://media.bunjang.co.kr/images/nocrop/986784584_w2058.jpg"/>
                </div>
            </Slider>
        </ div>
    );
}

export default SimpleSlider;