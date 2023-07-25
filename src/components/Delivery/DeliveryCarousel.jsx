import React from "react";
import Slider from "react-slick";

// components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function DeliveryCarousel() {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title: "Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      title: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
      title: "Cakes",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      title: "Burger",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
      title: "Thali",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
      title: "Idali",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
      title: "Fried Rice",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
      title: "Paneer",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
      title: "Dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title: "Paratha",
    }
  ];

  const settings = {
    className: "center",
    centerMode: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-xl mb-4 md:text-2xl font-medium lg:mb-10">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Slider {...settings} >
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default DeliveryCarousel;