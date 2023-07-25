import React, { useState } from 'react';
import { AiOutlineCompass } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';

// components
import FloatMenuBtn from './Order-Online/FloatMenuBtn';
import FoodList from './Order-Online/FoodList';
import MenuListContainer from './Order-Online/MenuListContainer';

function OrderOnline() {
  const [menu, setMenu] = useState([
    {
      name: "Recommended",
      items: [
        {
        name: "Palak Paneer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8enuFy1g1v5YJVTZ7ld4coiJMs2giWgq-g&usqp=CAU",
        isAddedToCart: false,
        price: 249,
        desciption: "Best Palak Paneer",
        rating: 5
      },
      {
        name: "Veg Thali",
        image: "https://b.zmtcdn.com/data/dish_photos/f89/7c4c81e8b1caba51dbaffd1013b0ff89.jpg",
        isAddedToCart: false,
        price: 149,
        desciption: "3 Chapati+2 Sabji+Dal+Rice+Papad+Salad [Sabji, Dal and Salad-Subject to Availability]",
        rating: 4,
      },
      {
        name: "Paneer Butter Masala",
        image: "https://b.zmtcdn.com/data/dish_photos/929/d597e94204ea944f0745eb2e34706929.jpg",
        isAddedToCart: false,
        price: 215,
        desciption: "3 Chapati+2 Sabji+Dal+Rice+Papad+Salad [Sabji, Dal and Salad-Subject to Availability]",
        rating: 5,
      },
      {
        name: "Veg Kolhapuri",
        image: "https://b.zmtcdn.com/data/dish_photos/8f4/bf16db4ec9c93a268d8bf015f18e68f4.jpg",
        isAddedToCart: false,
        price: 268,
        desciption: "A crunchy Indian style Veg Kolhapuri made with rice and lentils served with spicy",
        rating: 5
      },
      {
        name: "",
        image: "",
        isAddedToCart: false,
        price: 249,
        desciption: "",
        rating: 4 
      },
    ]
    },
    {
      name: "South Indian",
      items: [
        {
          name: "Masala Dosa",
          image: "https://b.zmtcdn.com/data/dish_photos/fe3/677fe18cd9fa3cb0acd3cbdd19cf8fe3.jpg",
          isAddedToCart: false,
          price: 148,
          desciption: "A crunchy Indian style pancake made with rice and lentils served with spicy",
          rating: 4
        },
        {
          name: "Rava Masala Dosa",
          image: "https://b.zmtcdn.com/data/dish_photos/f03/2a0b108cd60e1e3960024fe90ec84f03.jpg",
          isAddedToCart: false,
          price: 162,
          desciption: "A crunchy dosa made with rawa (Semolina)and spiced dry potato mix inside.",
          rating: 4
        },
        {
          name: "Spring Dosa",
          image: "https://b.zmtcdn.com/data/dish_photos/0a2/edb005969fc1a5836e871388a07150a2.jpg",
          isAddedToCart: false,
          price: 184,
          desciption: "A fusion South Indochinese prepartion with cabbage onion capsicum and carrot inside",
          rating: 5
        },
        {
          name: "Steamed Idli",
          image: "https://b.zmtcdn.com/data/dish_photos/7c3/a01fa853bd59f0fa161892c9c1ce47c3.jpg",
          isAddedToCart: false,
          price: 108,
          desciption: "South Indian mini savoury soft and fluffy cakes made with fermented rice steamed,",
          rating: 4
        },
        {
          name: "Medu Vada",
          image: "https://b.zmtcdn.com/data/dish_photos/7ce/547805f3d41bf80a77ce4da99eeaa7ce.jpg",
          isAddedToCart: false,
          price: 125,
          desciption: "A South Indian deep fried crunchy and soft centered donut shaped snack served",
          rating: 5
        },
      ]
    },
    {
      name: "North Indian",
      items: [
        {
          name: "Deluxe Garlic Tadka Khichdi Thali",
          image: "https://b.zmtcdn.com/data/dish_photos/4a5/b595b82c439be175722bba94281714a5.jpg",
          isAddedToCart: false,
          price: 279,
          desciption: "An exclusive Garlic flavoured Khichdi served with scrumptious marwadi aloo sabzi, Punjabi Kadhi ",
          rating: 5
        },
        {
          name: "Shahjis Special Thali",
          image: "https://b.zmtcdn.com/data/dish_photos/4f8/95c01c0a53f1a4247ab0565ea13e84f8.jpg",
          isAddedToCart: false,
          price: 425,
          desciption: "Chosen from the rustic banarasi cuisine which is known from its flavours, banarasi ",
          rating: 5
        },
      ]
    },
    {
      name: "Salads",
      items: [
        {
          name: "Veggie Delight Salad",
          image: "https://b.zmtcdn.com/data/pictures/5/19764645/7e14844611cb8df6cf612ed3c914f21d.jpg",
          isAddedToCart: false,
          price: 89,
          desciption: "Perfect balance of nutritious veggies like lettuce, hydroponically grown cherry tomato, zucchini, pepper",
          rating: 5
        },
        {
          name: "Salad Green Meal",
          image:"https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FsYWR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
          isAddedToCart: false,
          price: 125,
          desciption: "This chopped salad recipe will amaze everyone around the table! Italian dressing, crunchy veggies",
          rating: 5
        },
        {
          name: "Protein Rich Salad Meal",
          image: "https://images.unsplash.com/photo-1604497181015-76590d828b75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fFNhbGFkfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          isAddedToCart: false,
          price: 105,
          desciption: "This chopped salad recipe gets a boost of protein from the chicken. Enjoy this filling and colorful",
          rating: 5
        },
        {
          name: "Veg Barbique Salad",
          image: "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFNhbGFkfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          isAddedToCart: false,
          price: 179,
          desciption: "This chopped salad recipe gets a boost of protein from the Vegies. Enjoy this filling and colorful"
        },
        {
          name: "Chicken Barbique Salad",
          image: "https://images.unsplash.com/photo-1543339318-b43dc53e19b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fFNhbGFkfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          isAddedToCart: false,
          price: 199,
          desciption: "This chopped salad recipe gets a boost of protein from the chicken. Enjoy this filling and colorful"
        },
      ]
    },
    {
      name: "Cakes",
      items: [
        {
          name: "Eggless Dutch Truffle Cake [1/2kg]",
          image: "https://b.zmtcdn.com/data/dish_photos/f60/d95599b2a36038dcf6a3129c1b20ff60.jpg",
          isAddedToCart: false,
          price: 575,
          desciption: "Dark chocolate ganache with chocolate sponge.",
          rating: 5
        },
        {
          name: "Eggless Red Velvet Cake [1/2kg]",
          image: "https://b.zmtcdn.com/data/dish_photos/686/cfab1cfd6fefa5db5bbdd47ff10db686.jpg",
          isAddedToCart: false,
          price: 675,
          desciption: "Red velvet sponge layered with cream cheese frosting enhanced with lime juice.",
          rating: 5
        },
        {
          name: "Chocoholic Cake [1/2kg]",
          image: "https://b.zmtcdn.com/data/dish_photos/5e7/e24e30aee6c0bacd2b68d10b396a55e7.jpg",
          isAddedToCart: false,
          price: 700,
          desciption: "Three layers of chocolate mousse: white, milk and dark chocolate mousse layered in",
          rating: 5
        },
        {
          name: "Eggless After Nine Cake [400g]",
          image: "https://b.zmtcdn.com/data/dish_photos/c95/b871ea2730dca2e0f510979182e86c95.jpg",
          isAddedToCart: false,
          price: 600,
          desciption: "Mint flavoured white chocolate Chantilly and rich dark chocolate mousse layered on dark ",
          rating: 5
        },
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Tiramisu Cup [110g]",
          image: "https://b.zmtcdn.com/data/dish_photos/27a/b33c420f40bc6c83b799f05f46b3f27a.jpg",
          isAddedToCart: false,
          price: 125,
          desciption: "Traditional mascarpone cream layered on a coffee-flavored vanilla cake, topped with Belgian cocoa",
          rating: 5
        },
        {
          name: "Chocolate Tart [1 Piece]",
          image: "https://b.zmtcdn.com/data/dish_photos/947/9f0cf1b1e47f81a064f0153fb4fdd947.jpg",
          isAddedToCart: false,
          price: 140,
          desciption: "Thick chocolate ganache in a tart.",
          rating: 4
        },
        {
          name: "Banofee High [1 Piece]",
          image: "https://b.zmtcdn.com/data/dish_photos/460/67eb1ec5be532931b7647f88de074460.jpg",
          isAddedToCart: false,
          price: 140,
          desciption: "Banana and toffee pie with cream and banana cake croutons.",
          rating: 3
        },
        {
          name: "Lemon Tart [1 Piece]",
          image: "https://b.zmtcdn.com/data/dish_photos/995/362107bf1be389ff119b7d9b0afbe995.jpg?fit=around|130:130&crop=130:130;*,*",
          isAddedToCart: false,
          price: 110,
          desciption: "Golden brown shortbread crust filled with rich lemon filling.",
          rating: 4
        },
      ]
    },
    {
      name: "Fast Food",
      items: [
        {
          name: "Chat Samosa",
          image: "https://images.unsplash.com/photo-1601050690294-397f3c324515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftb3NhfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          isAddedToCart: false,
          price: 99,
          desciption: "2 Chat Samosa with Green Chillie & Tomato Ketchup",
          rating: 5
        },
        {
          name: "Kachodi",
          image: "https://images.unsplash.com/photo-1591465619339-60fce055bc82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2FjaG9yaXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          isAddedToCart: false,
          price: 99,
          desciption: "2 Kachori with Tomato Ketchup",
          rating: 5
        },
        {
          name: "Missal Paav",
          image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFkYSUyMHBhdnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          isAddedToCart: false,
          price: 125,
          desciption: "Testy Missal with 4 Paav",
          rating: 5
        },
        {
          name: "Pakode",
          image: "https://images.unsplash.com/photo-1631788012420-a0d6a3cfcdfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmFkYSUyMHBhdnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          isAddedToCart: false,
          price: 49,
          desciption: "Testy Pakode with Tomato Ketchup",
          rating: 4
        },
        {
          name: "Pasta",
          image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFzdGF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
          isAddedToCart: false,
          price: 100,
          desciption: "Italian Pasta",
          rating: 4
        },
        {
          name: "Noodles",
          image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFzdGF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
          isAddedToCart: false,
          price: 115,
          desciption: "Testy Noodles",
          rating: 3,
        },
      ]
    },
  ]);
  const [selected, setSelected] = useState("");

  const onClickHandler = (e) => {
    if(e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  return (
    <>
      <div className='w-full h-screen flex'>
        <aside className='hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gary-300 h-screen w-1/4'>
          {menu.map((item, index) => (
            <MenuListContainer
            {...item}
            key={index}
            onClickHandler={onClickHandler}
            selected={selected} />
          ))}
        </aside>

        <div className='w-full px-3 md:w-3/4'>
          <div className='pl-3 mb-4'>
            <h2 className='text-2xl font-medium'>Order Online</h2>
            <h4 className='flex items-center gap-2 font-light text-gary-600'>
              <AiOutlineCompass />  Live track Your Order | <BiTimeFive /> 45 Min 
            </h4>
          </div>

          <section className='flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5'>
            {menu.map((item, index) => (
              <FoodList key={index} {...item} />
            ))}
          </section>
        </div>
      </div>

      <FloatMenuBtn
      menu={menu}
      onClickHandler={onClickHandler}
      selected={selected} />
    </>
  )
}

export default OrderOnline
