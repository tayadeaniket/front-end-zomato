import React, { useState, useEffect } from "react";

// component
import DeliveryCarousel from './DeliveryCarousel';
import RestaurantCard from "../RestaurantCard";

function Delivery() {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: 123456,
      image: {
        images: [
          {
            location: "https://b.zmtcdn.com/data/pictures/3/20510123/97a0f94d1a1d514d3cc038662c23c9ed_o2_featured_v2.jpg"
          }
        ]
      },
      name: "Hotel Meera",
      cuisine: ["North Indian", "South Indian", "Chinese"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.2,
      proValue:" Pro extra 10% off",
      offvalue:"Rs.220 Off",
      averageCost:"150"
    },
    {
      _id: 123457,
      image: {
        images: [
          {
            location: "https://b.zmtcdn.com/data/pictures/chains/6/10506/a0c3bcc09b1448a7138beda386f8db21.jpg"
          }
        ]
      },
      name: "Domino's Pizza",
      cuisine: ["Pizza"," Italian","Pasta","Fast Food"," Desserts"],
      isPro: true,
      isOff: false,
      durationOfDelivery: 35,
      restaurantReviewValue: 3.8,
      proValue:" Pro extra 15% off",
      offvalue:"Rs.120 Off",
      averageCost:"100"
    },
    {
      _id: 123458,
      image: {
        images: [
          {
            location: "https://b.zmtcdn.com/data/pictures/chains/2/19706442/2c099d42a6a261ee208c2c1371665a58.jpg"
          }
        ]
      },
      name: "Greedy Momos",
      cuisine: ["Momos", "Fast Food", " Beverages"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.9,
      proValue:" Pro extra 21% off",
      offvalue:"Rs.60 Off",
      averageCost:"60"
    },
    {
      _id: 123459,
      image: {
        images: [
          {
            location: "https://b.zmtcdn.com/data/pictures/3/19295433/30843f1444a81494b238045a413643e9.jpg"
          }
        ]
      },
      name: "Hotel Delhi Darbar",
      cuisine: ["North Indian", "Biryani", "Mughlai","Seafood"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.0,
      proValue:" Pro extra 5% off",
      offvalue:"Rs.100 Off",
      averageCost:"90"
    },
    {
      _id: 1234510,
      image: {
        images: [
          {
            location: "https://b.zmtcdn.com/data/dish_photos/25a/b60cd0aa3331411e40c66dbcedfe825a.jpg"
          }
        ]
      },
      name: "Agrawal's Cafe",
      cuisine: ["South Indian","Chinese","Pizza","Sandwich","Kebab"],
      isPro: true,
      isOff: false,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.2,
      proValue:" Pro extra 10% off",
      offvalue:"Rs.100 Off",
      averageCost:"70"
    },
    {
      _id: 1234511,
      image: {
        images: [
          {
            location: "https://www.tastingtable.com/img/gallery/18-must-try-indian-mithai/intro-1670865737.webp"
          }
        ]
      },
      name: "Rathi Pedewala",
      cuisine: ["Mithai","Street Food","Fast Food","Desserts"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.7,
      proValue:" Pro extra 20% off",
      offvalue:"Rs.50 Off",
      averageCost:"80"
    },
    {
      _id: 1234512,
      image: {
        images: [
          {
            location: "https://b.zmtcdn.com/data/pictures/0/20650530/1a3a3a05260862161c43379065552d6d_o2_featured_v2.jpg"
          }
        ]
      },
      name: "Namaste Thali ",
      cuisine: ["North Indian"],
      isPro: true,
      isOff: false,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.2,
      proValue:" Pro extra 15% off",
      offvalue:"Rs.210 Off",
      averageCost:"150"
    },
    {
      _id: 1234513,
      image: {
        images: [
          {
            location: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/FotoJetcoverindianrest.jpg"
          }
        ]
      },
      name: "Old Kundan Dhaba",
      cuisine: ["North Indian, Chinese, Street Food, Roast Chicken"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 3.5,
      proValue:" Pro extra 25% off",
      offvalue:"Rs.100 Off",
      averageCost:"150"
    },
    {
      _id: 1234514,
      image: {
        images: [
          {
            location: "https://b.zmtcdn.com/data/pictures/4/2203474/7bcc33be3cf9cd0e4f04d33670f0e5ad_o2_featured_v2.jpg"
          }
        ]
      },
      name: "Story Of Burger",
      cuisine: ["Cafe, Burger, Wraps, Italian"],
      isPro: true,
      isOff: false,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.2,
      proValue:" Pro extra 17% off",
      offvalue:"Rs.50 Off",
      averageCost:"150"
    },
    
    {
      _id: 1234514,
      image: {
        images: [
          {
            location: "https://www.sassymamasg.com/wp-content/uploads/2020/10/pjimage.jpg"
          }
        ]
      },
      name: "Taste of South",
      cuisine: ["South Indian", "Fast Food"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.2,
      proValue:"",
      offvalue:"Rs. 149 Off",
      averageCost:"299"
    },

    {
      _id: 1234514,
      image: {
        images: [
          {
            location: "https://curlytales.com/wp-content/uploads/2019/08/north-indian-food-2-1-e1565350495328.jpg"
          }
        ]
      },
      name: "Spicy Grill Restro",
      cuisine: ["North Indian", "Panjabi Food"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.2,
      proValue:"",
      offvalue:"Rs. 199 Off",
      averageCost:"499"
    },

    {
      _id: 1234514,
      image: {
        images: [
          {
            location: "https://www.sassymamasg.com/wp-content/uploads/2022/06/indian-food.jpg"
          }
        ]
      },
      name: "Tiffin Room at Raffles Hotel",
      cuisine: ["North Indian", "Italian Food"],
      isPro: true,
      isOff: false,
      durationOfDelivery: 29,
      restaurantReviewValue: 3.9,
      proValue:"Pro extra 15% Off",
      offvalue:"Rs. 149 Off",
      averageCost:"349"
    },
    {
      _id: 1234514,
      image: {
        images: [
          {
            location: "https://www.sassymamasg.com/wp-content/uploads/2020/10/Copper-Chimney.jpg"
          }
        ]
      },
      name: "Chinese Food Corner",
      cuisine: ["Chinese Food"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.2,
      proValue:"",
      offvalue:"Rs. 149 Off",
      averageCost:"299"
    },
    {
      _id: 1234514,
      image: {
        images: [
          {
            location: "https://www.sassymamasg.com/wp-content/uploads/2020/10/indian-restaurants-singapore-Mr-Biryani.jpg"
          }
        ]
      },
      name: "Mr Biryani Hotel",
      cuisine: ["South Indian", "Fast Food"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.2,
      proValue:"",
      offvalue:"Rs. 149 Off",
      averageCost:"299"
    },
    {
      _id: 1234514,
      image: {
        images: [
          {
            location: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBpCr_T34k1kRtlqliNfbW7_gNfEjk2pVCQ&usqp=CAU"
          }
        ]
      },
      name: "A1 backery",
      cuisine: ["Cakes", "Cookies", "Donuts"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.2,
      proValue:"",
      offvalue:"Rs. 149 Off",
      averageCost:"299"
    },
    {
      _id: 1234514,
      image: {
        images: [
          {
            location: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxgU1OB6gGJIISoOl66VFxWq6wnS_MkI1PH1aV8an-0OubfmADMuWqpUahImRR-bIvM8&usqp=CAU"
          }
        ]
      },
      name: "Nirmal Sweets",
      cuisine: ["Sweets", "Fast Food"],
      isPro: false,
      isOff: true,
      durationOfDelivery: 45,
      restaurantReviewValue: 4.2,
      proValue:"",
      offvalue:"Rs. 149 Off",
      averageCost:"299"
    },
  ]);
  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mb-4 md:text-2xl font-medium lg:mb-10 mt-10">
        Delivery Restaurants in Akola
      </h1>
      <div className="flex justify-between flex-wrap mt-5">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  )
}

export default Delivery
