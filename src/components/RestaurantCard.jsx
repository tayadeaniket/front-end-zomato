import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

function RestaurantCard(props) {
    const [image, setImage] = useState({
        images: [],
    });

    return (
        <Link
            to={`/restaurant/${props._id}`}
            className="w-full h-5/6 md:w-1/2 lg:w-1/3"
        >
            <div className="bg-white p-4 mb-4 w-full h-full lg:h-5/6 rounded-2xl transition duration-700 ease-in-out hover:shadow-2xl ">
                <div className="w-full relative">
                    <div className="w-full bottom-4 flex items-end justify-between">
                        <div className="flex flex-col gap-2 items-start absolute">
                            {props.isPro && (
                                <span className="bg-zomato-400 text-white px-1 py-0.5 rounded text-xs">
                                   {props.proValue}
                                </span>
                            )}
                            {props.isOff && (
                                <span className="bg-blue-600 text-white px-1 py-0.5 rounded text-xs">
                                    {props.offvalue}
                                </span>
                            )}
                        </div>
                        <img
                            src={props.image.images.length && props.image.images[0].location}
                            alt="food"
                            className="w-full h-full lg:h-52 object-cover rounded-2xl"
                        />
                    </div>
                    <div className="my-2 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-medium">{props.name}</h4>
                            <span className="bg-green-800 text-white text-xs p-0.5 rounded flex items-center">
                                {props.restaurantReviewValue} <AiTwotoneStar />
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-gray-500 text-sm">
                            <p>{props.cuisine.join(", ")}</p>
                            <p>Rs. {props.averageCost} for one</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RestaurantCard;
