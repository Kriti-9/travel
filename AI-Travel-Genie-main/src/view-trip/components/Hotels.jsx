import React from 'react'
import { Link } from 'react-router-dom'
import HotelCardItem from './HotelCardItem'

function Hotels({trip}) {
  return (
    <div>
         <h2 className='font-bold trxt-xl mt-5'> Hotel Recommendation </h2>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {trip?.TripData?.hotelOptions?.map((hotel,index) =>(
                        <HotelCardItem hotel={hotel} />
                    ))}
                </div>
              
    </div>
  )
}

export default Hotels