import React from 'react'

function Discountbox({data:{info:{header,couponCode,offerLogo}}}) {
  return (
    <>
      <div className='flex items-center gap-4 border border-gray-70 p-5 w-[330px] rounded-3xl'>
        <div>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offerLogo}`} alt="offer logo" />
        </div>
        <div>
            <h3 className='text-lg font-semibold'>{header}</h3>
            <h5 className='text-base font-medium text-gray-40'>{couponCode}</h5>
        </div>
      </div>
    </>
  )
}

export default Discountbox
