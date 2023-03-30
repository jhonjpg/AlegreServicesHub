import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const SlickCarousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const liftImage = ["https://images.pexels.com/photos/5327478/pexels-photo-5327478.jpeg?auto=compress&cs=tinysrgb&w=1200","https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/4164759/pexels-photo-4164759.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/5327465/pexels-photo-5327465.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/5327531/pexels-photo-5327531.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/3838706/pexels-photo-3838706.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/14335658/pexels-photo-14335658.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/4162445/pexels-photo-4162445.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/14623627/pexels-photo-14623627.jpeg?auto=compress&cs=tinysrgb&w=1200", "https://images.pexels.com/photos/13965336/pexels-photo-13965336.jpeg?auto=compress&cs=tinysrgb&w=1200"]
    return (
        <div className=" w-75 ">
            <Slider {...settings}>


            {liftImage.map((item, index) => (
        <div key={index} className="  w-75 h-100">
          <img src={item} className="w-100 h-100 object-fit-cover"/>
        </div>
      ))}




            </Slider>
        </div>
    )
}

export default SlickCarousel