import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/images/slider_1.jpg';
import img2 from '../../assets/images/slider_2.jpg';
import img3 from '../../assets/images/slider_3.jpg';
import img4 from '../../assets/images/slider_4.jpg';
import img5 from '../../assets/images/slider_5.jpg';
import img6 from '../../assets/images/slider_6.jpg';
import img7 from '../../assets/images/slider_7.jpg';
import './PhotoSlider.css';

class PhotoSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const settings = {
            dots: true, // Enable dots for better navigation
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            fade: false,
            arrows: true, 
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };

        const photos = [
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
        ];

        return (
            <div className="photo-slider">
                <Slider {...settings}>
                    {photos.map((photo, index) => (
                        <div key={index} className="slider-item">
                            <img src={photo} alt={`Slide ${index + 1}`} className="slider-image" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

// Custom arrow components for the slider
const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow custom-next" onClick={onClick}>
            &#10095; 
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow custom-prev" onClick={onClick}>
            &#10094; 
        </div>
    );
};

export default PhotoSlider;