import React, { useState } from 'react';

// components
import MenuCollection from '../MenuCollection';

function Menu() {
  const [menus, setMenu] = useState([
    "https://b.zmtcdn.com/data/menus/797/19476797/da46002982ebb9219965bcd1476e6719.jpg",
    "https://b.zmtcdn.com/data/menus/797/19476797/fc0edddd756052ddf981121c45859fc5.jpg",
    "https://b.zmtcdn.com/data/menus/797/19476797/3d57398e0a602a70d98c3bace34d77a6.jpg",
    "https://b.zmtcdn.com/data/menus/797/19476797/1e74ad89be4ef9ea76cb61999f7e7e4a.jpg",
    "https://b.zmtcdn.com/data/menus/797/19476797/dbf983c6cf4964cdc6cf8f7804a16d18.jpg"
  ]);

  return (
    <div className='flex flex-wrap gap-3'>
      <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
    </div>
  )
}

export default Menu
