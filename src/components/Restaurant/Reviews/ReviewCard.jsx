import React, { useState } from 'react';
import { TiStarFullOutline } from 'react-icons/ti';
import dayjs from 'dayjs';

function ReviewCard(props) {
  const [user, setUser] = useState("");
  console.log(props);
  return (
    <>
      <div className='my-3 flex flex-col gap-3'> 
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-full'>
            <img
                src={props.avatar}
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold'>
                {props.fullName}
              </h3>

              <small className='text-gray-600'>
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>

          <button className='text-zomato-500 border border-zomato-500 py-2 rounded-lg px-4'>
            Follow
          </button>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-3'>
            <span className='text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1'>
              {props.rating} <TiStarFullOutline />
            </span>

            <h5 className='font-regular uppercase'>
              {props.isRestaurantReview ? "Dining" : "Delivery"}
            </h5>

            <small>
              {dayjs(props.createAt).format("DD-MM-YYYY")}
            </small>
          </div>

          <div className='w-full'>
            <p className='w-full text-gray-800 font-light taxt-base'>
              {props.reviewText}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewCard
