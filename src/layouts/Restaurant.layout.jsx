import React, { useEffect, useState } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import { useParams } from "react-router-dom";


// components
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButton from "../components/Restaurant/InfoButton";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import Tabs from "../components/Restaurant/Tabs";

function RestaurantLayout({ children }) {
    const [restaurant, setRestaurant] = useState({
        images: [
            "https://as1.ftcdn.net/v2/jpg/02/74/56/92/1000_F_274569206_m5ZaXzmkozpRwUGagSgHvkeGGj2jy2Wb.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmWedQPViF4uDU7aqhD2LdPCcAs2fXiBuzpQcIbBgACwbfTzt-sK7CWQmULeSzD5iKOg&usqp=CAU",
            "https://b.zmtcdn.com/data/pictures/5/13295/3d187310c6b76f19b9b75896a91dbdb5.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQ8IFtd-AqSWJmhbdE5OtWs5gv6puA8-3rQ&usqp=CAU"
        ],
        name: "Hotel Meera",
        cuisine: "North Indian,South Indian,Chinese,Fast Food,Street Food,Beverages,Shake",
        address: "Shivganga complex, near Khandelwal jewellers-3, Gandhi road, Akola, Maharashtra 444001",
        restaurantRating: 4.1,
        deliveryRating: 3.2,
    });

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
                <ImageGrid images={restaurant?.images} />
                <RestaurantInfo
                    name={restaurant?.name}
                    restaurantRating={restaurant?.restaurantRating || 0}
                    deliveryRating={restaurant?.deliveryRating || 0}
                    cuisine={restaurant?.cuisine}
                    address={restaurant?.address}
                />
                <div className="my-4 flex flex-wrap gap-3 mx-auto">
                    <InfoButton isActive={true}>
                        <TiStarOutline /> Add Review
                    </InfoButton>
                    <InfoButton>
                        <RiDirectionLine /> Direction
                    </InfoButton>
                    <InfoButton>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButton>
                    <InfoButton>
                        <RiShareForwardLine /> Share
                    </InfoButton>
                </div>
                <div className="my-10">
                    <Tabs />
                </div>
                {children}
            </div>
        </>
    )
}

export default RestaurantLayout
