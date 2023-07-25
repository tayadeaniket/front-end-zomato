import React, { useState } from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function NightLifeCarousel() {
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
          dots: true,
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
  };

  const [nightLife] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1619229725920-ac8b63b0631a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbmNlcnR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Lit Party Places",
      places: "30 Places",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582819509237-d5b75f20ff7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFyJTIwY291bnRlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Best Bars & Pubs",
      places: "15 Places",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533219057257-4bb9ed5d2cc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFydHl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Best Fireworks Station",
      places: "5 Places",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Best Open Pub",
      places: "9 Places",
    },
    {
      image:
        "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Best Night Club",
      places: "15 Places",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573055592760-a1427683e07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBhcnR5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Best Bachelor's Club",
      places: "3 Places",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516458464372-eea4ab222b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rcyUyMHBhcnR5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Best Bear Motel",
      places: "1 Places",
    },
    
  ]);

  return (
    <div className="w-full">
      <Slider {...settings}>
        {nightLife.map((nightLife, index) => (
          <PictureCarouselCard {...nightLife} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default NightLifeCarousel;