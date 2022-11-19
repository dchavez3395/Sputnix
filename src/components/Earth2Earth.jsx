import React from 'react'
import { Link } from 'react-router-dom'

const Earth2Earth = () => {
  return (
    <div className='relative overflow-hidden'>
      <div>
        <img className='h-screen object-cover' src="https://www.spacex.com/static/images/content/EarthTransportation_Still_Desktop.webp" alt="" />
      </div>
      <div className='lg:absolute right-0 top-[35%] flex flex-col gap-4 left-[60%] text-white px-4 py-8 lg:w-1/5'>
        <h2 className='text-4xl lg:text-5xl font-bold'>EARTH TO EARTH TRANSPORTATION</h2>
        <p className='text-lg'>With Starship and Super Heavy, most international long distance trips would be completed in 30 minutes or less. In addition to vastly increased speed, one great benefit to traveling in space outside of Earth’s atmosphere is the lack of friction as well as turbulence and weather. Imagine most journeys taking less than 30 minutes with access to anywhere in the world in an hour or less.</p>
        <Link to='/mothership'>
            <button className="border-solid transition ease-in-out delay-150 mt-4 border-2 px-8 py-3 hover:bg-white hover:text-black uppercase text-sm font-bold border-white duration-300 ... ">LEARN MORE ABOUT MOTHERSHIP</button>
        </Link>
      </div>
    </div>
  )
}

export default Earth2Earth
