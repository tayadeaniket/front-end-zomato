import React, { useState } from 'react';

function AddReviewCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3 className='text-xl font-medium'>
        Rate your Experience
      </h3>

      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-2'>
          <input type='radio' id='dining' name='review' />
          <label htmlFor='dining'>Dining</label>
        </div>

        <div className='flex items-center gap-2'>
          <input type='radio' id='delivery' name='review' />
          <label htmlFor='delivery'>Delivery</label>
        </div>
      </div>
      <button className='text-zomato-500'>
        Write a Review
      </button>
    </>
  )
}

export default AddReviewCard
