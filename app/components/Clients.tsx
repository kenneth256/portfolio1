import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-card'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='projects'>
    <h1 className='heading'>
        Kind words from {' '} <span className='text-purple'>Clients</span>
    </h1>
    <div className='flex flex-col items-center max-lg:mt-10'>
        {/* infinity moving cards  */}
        {/* <div className='flex flex-col antialiased items-center overflow-hidden rounded-md h-[50vh] md:h-[30rem]'> */}
        <InfiniteMovingCards  items={testimonials}  direction='right' speed='slow'/>
        {/* </div> */}
        
        </div>
    </div>
  )
}

export default Clients
