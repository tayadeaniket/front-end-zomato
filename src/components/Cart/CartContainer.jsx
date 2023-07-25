import React, { useState } from 'react';
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdArrowDropup
} from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

// component
import FoodItem from './FoodItem';

function CartSM({ toggle }) {
  return (
    <>
      <div className='md:hidden flex items-center justify-between'>
        <div className='flex flex-col items-center'>
          <small className='flex items-center gap-1' onClick={toggle}>
            1 Item <IoMdArrowDropup />
          </small>

          <h4>
            Rs. 300
            <sub>(including all taxes)</sub>
          </h4>
        </div>

        <button className='flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg'>
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
};

function CartLG({ toggle }) {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center'>
          <small className='flex items-center gap-1' onClick={toggle}>
            1 Item <IoMdArrowDropup />
          </small>

          <h4>
            Rs. 300
            <sub>(including all taxes)</sub>
          </h4>
        </div>

        <button className='flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg'>
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  )
}

function CartContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [foods, setFoods] = useState([
    {
      name: "Paav Bhaji",
      rating: "150.60",
      descript: "Paav Bhaji with Extra Paav and with Extra Cheese",
      price: 200,
      quantity: 2,
    },
    {
      name: "Samosa",
      rating: "180.20",
      descript: "Samosa with Ketchups and some spices",
      price: 149,
      quantity: 3,
    },
  ]);

  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className='fixed w-full overflow-y-scroll h-48 bg-white z-10 p-2 bottom-14 px-3'>
          <div className='flex items-center justify-between md:px-20'>
            <h3 className='text-xl font-semibold'>Your Orders</h3>
            <IoCloseSharp onClick={closeCart} />
          </div>

          <hr className='my-2' />

          <div className='flex flex-col gap-2 md:px-20'>
            {foods.map((food) => (
              <FoodItem key={food._id} {...food} />
            ))}
          </div>
        </div>
      )}

      <div className='fixed w-full bg-white z-10 p-2 px-3 bottom-0 mx-auto lg:px-20'>
        <CartSM toggle={toggleCart} />
        <CartLG toggle={toggleCart} />
      </div>
    </>
  )
}

export default CartContainer;
