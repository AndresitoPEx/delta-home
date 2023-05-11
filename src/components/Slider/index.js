import './customSlider.css'
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

export const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="./img/d1.jpg" alt="1" className="slider-image"/>
            </div>
            <div>
                <img src="./img/d2.jpg" alt="2" className="slider-image"/>
            </div>
            <div>
                <img src="./img/d3.jpg" alt="3" className="slider-image"/>
            </div>
            <div>
                <img src="./img/d4.png" alt="4" className="slider-image"/>
            </div>
            <div>
                <img src="./img/d5.jpg" alt="5" className="slider-image"/>
            </div>
            <div>
                <img src="./img/d6.jpg" alt="6" className="slider-image"/>
            </div>

        </Slider>
    )
}

