import React, {useState} from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function DiningCarousel() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }; const [nightLife] = useState([
        {
            image:
                "https://images.unsplash.com/photo-1560187839-af980ee37cec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHJlc3RhdXJhbnRzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            title: "Best Insta-worthy Places",
            places: "11 Places",
        },
        {
            image:
                "https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
            title: "Best Cafeteria",
            places: "15 Places",
        },
        {
            image:
                "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
            title: "Newly Opened Restaurants",
            places: "20 Places",
        },
        {
            image:
                "https://images.unsplash.com/photo-1514537099923-4c0fc7c73161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBTYWxhZHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
            title: "Great Buffets",
            places: "8 Places",
        },
        {
            image:
                "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            title: "Reception Halls",
            places: "30 Places",
        },
        {
            image:
                "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
            title: "Places for World Cuisines",
            places: "10 Places",
        },
        {
            image:
                "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VhZm9vZHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
            title: "Places for Superb Seafood",
            places: "17 Places",
        },
        {
            image:
                "https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2QlMjByZXN0YXVyYW50fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            title: "Best Luxury Dining Places",
            places: "12 Places",
        },
    ]);

    return (
        <div className="w-full h-60">
            <Slider {...settings}>
                {nightLife.map((nightLife, index) => (
                    <PictureCarouselCard {...nightLife} key={index} />
                ))}
            </Slider>
        </div>
    );
}

export default DiningCarousel;