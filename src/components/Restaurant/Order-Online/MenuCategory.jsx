import React from 'react';
import classnames from 'classnames';

function MenuCategory(props) {
  return (
    <>
        <div
        className={classnames("py-2 px-1", {
            "text-zomao-500 bg-zomato-50 border-r-4 border-zomato-500" : props.isActive, })}>
            <h3 className='text-lg text-gray-900 font-medium' id={props.name} onClick={props.onClickHandler}>
                {props.name}  ({props.items.length})
            </h3>
        </div>
    </>
  )
}

export default MenuCategory
