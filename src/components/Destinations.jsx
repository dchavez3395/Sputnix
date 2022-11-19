import React from 'react'
import { Link } from 'react-router-dom'

const Destinations = () => {
  return (
    <>
      <div className='bg-black text-white h-screen lg:h-[94vh] pb-40 lg:pb-0 lg:py-20 py-8 justify-center text-center'>
        <h2 className='py-2  pb-20 text-4xl font-bold'>DESTINATIONS</h2>
        <div  className=' justify-center relative items-center object-center'>
            <Link to='mars'>
            <img className='w-[320px] h-[218px] absolute right-0 top-0 lg:left-[60%] cursor-pointer'  src="https://www.spacex.com/human-spaceflight/assets/images/destination-mars.svg" alt="" />
            </Link>
            <Link to='moon'>
            <img className='w-[189px] h-[147px] absolute right-0 left-[20%] lg:left-[52%] top-[15rem] lg:top-[23rem] cursor-pointer' src="https://www.spacex.com/human-spaceflight/assets/images/destination-moon.svg" alt="" />
            </Link>
            <Link to='earth'>
            <img className='w-[190px] h-[218px] absolute top-[22rem] lg:top-[28rem] left-0 lg:left-[39%] right-0 bottom-0 cursor-pointer' src="https://www.spacex.com/human-spaceflight/assets/images/destination-dragon.svg" alt="" />
            </Link>
            <Link to='iss'>
            <img className='w-[170px] h-[218px] absolute top-[26rem] lg:top-[37rem] left-0 lg:left-[35%] lg:right-0 bottom-0 cursor-pointer' src="https://www.spacex.com/human-spaceflight/assets/images/destination-iss.svg" alt="" />
            </Link>
            <img className='w-[350px] h-[218px] m-auto absolute top-[40rem] lg:top-[53rem] left-0 right-0 bottom-0' src="https://www.spacex.com/human-spaceflight/assets/images/Earth.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Destinations
