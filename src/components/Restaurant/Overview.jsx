import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import Slider from 'react-slick';
import ReactStars from 'react-rating-stars-component';

// components
import { NextArrow, PrevArrow } from '../CarouselArrow';
import MenuCollection from './MenuCollection';
import MenuSimilarRestaurantCard from './MenuSimilarRestaurantCard';
import ReviewCard from "./Reviews/ReviewCard";
import MapView from './MapView';

function Overview() {
  const [menuImages, setMenuImages] = useState({
    images: [
      "https://b.zmtcdn.com/data/menus/797/19476797/da46002982ebb9219965bcd1476e6719.jpg",
    "https://b.zmtcdn.com/data/menus/797/19476797/fc0edddd756052ddf981121c45859fc5.jpg",
    "https://b.zmtcdn.com/data/menus/797/19476797/3d57398e0a602a70d98c3bace34d77a6.jpg",
    "https://b.zmtcdn.com/data/menus/797/19476797/1e74ad89be4ef9ea76cb61999f7e7e4a.jpg",
    "https://b.zmtcdn.com/data/menus/797/19476797/dbf983c6cf4964cdc6cf8f7804a16d18.jpg"
    ]
  });
  const [reviews, setReviews] = useState([]);
  const [cuisine, setCuisine] = useState(["South Indian", "Fast Food"]);
  const averageCost = 200;

  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  }

  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <>
      <div className='flex flex-col gap-5 md:flex-row relative'>
        <div className='w-full md:w-8/12'>
          <h2 className='font-semibold text-lg md:text-xl my-4'>
            About this Place
          </h2>

          <div className='flex justify-between items-center'>
            <h4 className='text-lg font-medium'>Menu</h4>

            <Link to={`/restaurant/${id}/menu`}>
              <span className='flex items-center gap-1 text-zomato-500'>
                see all Menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>

          <div className='flex flex-wrap gap-3 my-4'>
            <MenuCollection
              menuTitle="Menu"
              pages="5"
              image={menuImages.images}
            />
          </div>

          <h4 className='text-lg font-medium my-4'>
            Cuisines
          </h4>

          <div className="flex flex-wrap gap-2">
            {cuisine.map((cusineName, index) => (
              <span key={index} className='border border-gray-600 text-blue-600 px-2 py-1 rounded-full'>
                {cusineName}
              </span>
            ))}
          </div>

          <div className='my-4'>
            <h4 className='text-lg font-medium'>
              Average Cost
            </h4>

            <h6 className='text-sm text-zomato-500'>
              Rs. {averageCost} for one order (approx).
            </h6>

            <small>
              Exclusive of applicable taxes and cahrges, if any
            </small>
          </div>

          <div className='flex flex-col-reverse'>
            <div className='my-4'>
              <h4 className='text-lg font-medium '>
                Rate your Delivery Experience
              </h4>

              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700" />

              {reviews.map((review, index) => (
                <ReviewCard {...review} key={index} />
              ))}
            </div>

            <div className='my-4'>
              <h4 className='text-lg font-medium'>
                Similar Restaurants
              </h4>

              <div>
                <Slider {...settings}>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/3/19295433/30843f1444a81494b238045a413643e9.jpg"
                    title="Hotel Delhi Darbar"
                  />

                  <MenuSimilarRestaurantCard
                    image="https://www.tastingtable.com/img/gallery/18-must-try-indian-mithai/intro-1670865737.webp"
                    title="Rathi Pedhewala"
                  />

                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/0/20650530/1a3a3a05260862161c43379065552d6d_o2_featured_v2.jpg"
                    title="Namaste Thali"
                  />

                  <MenuSimilarRestaurantCard
                    image="https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/FotoJetcoverindianrest.jpg"
                    title="Old Kundan Dhaba"
                  />

<MenuSimilarRestaurantCard
                    image='https://b.zmtcdn.com/data/pictures/chains/6/10506/a0c3bcc09b1448a7138beda386f8db21.jpg'
                    title="Domino's Pizza"
                  />

                  <MenuSimilarRestaurantCard
                    image='https://b.zmtcdn.com/data/pictures/chains/6/10506/1adb116d088669540c89150836d668f9.jpg'
                    title='Oven Story Pizza'
                  />

                  <MenuSimilarRestaurantCard
                    image='https://b.zmtcdn.com/data/pictures/chains/4/10624/4086898465d448b1e467b06bbbca471f.jpg'
                    title='KFC'
                  />

                  <MenuSimilarRestaurantCard
                    image='https://b.zmtcdn.com/data/pictures/chains/3/18315713/a36a833360d29ab3a31a9711ca92a890.jpg'
                    title='Crazy Cheesy'
                  />
                </Slider>
              </div>
            </div>

            <div className='my-4 w-full md:hidden flex flex-col gap-4'>
              <MapView
                title="Meera Restro"
                phno="+91 8787878789"
                mapLocation={getLatLong("28.64435706075414, 77.11929960209767")}
                address="Shop 52, Plot 8, 9 & 10, G-8, Ground Floor, DDA Market, J-Block, Community Centre, Rajouri Garden, New Delhi"
              />
            </div>
          </div>
        </div>

        <aside
          style={{ height: "fit-content" }}
          className='hidden md:flex md:w-4/12 sticky rounded-xl top-10 bg-white p-3 shadow-md flex-col gap-4'>
          <MapView
            title="Meera Restro"
            phno="+91 8787878789"
            mapLocation={getLatLong("28.64435706075414, 77.11929960209767")}
            address="Shop 52, Plot 8, 9 & 10, G-8, Ground Floor, DDA Market, J-Block, Community Centre, Rajouri Garden, New Delhi"
          />
        </aside>
      </div>
    </>
  )
}

export default Overview
