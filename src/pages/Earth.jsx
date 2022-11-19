import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Earth2Earth from '../components/Earth2Earth'
import PageHero from '../components/PageHero'
import WhyEarth from '../components/WhyEarth'

const Earth = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='bg-black'>
      <PageHero
          title="EARTH ORBIT"
          subtitle="EXPERIENCE OUR HOME PLANET FROM OVER 300KM UP"
          image="https://www.spacex.com/static/images/backgrounds/earth_feature.webp"
        />
          <div className='relative'>
            <img className='h-screen object-cover' src="https://www.spacex.com/static/images/backgrounds/earth_humans.webp" alt="" />
            <div className='absolute text-white lg:w-1/3 m-auto top-[50%] text-center left-0 right-0'>
                <p className='lg:text-2xl'>“The view of Earth is absolutely spectacular, and the feeling of looking back and seeing your planet as a planet is just an amazing feeling. It's a totally different perspective, and it makes you appreciate, actually, how fragile our existence is."</p>
            </div>
        </div>
        <WhyEarth />
        <div>
            <div className='relative  bg-black'>
                <video className="z-[0] w-full relative h-[50vh] lg:h-screen object-cover " autoPlay loop muted>
                    <source className="w-full" src='https://www.spacex.com/media/DragonTrunk_Animation_Render_Desktop.mp4' />
                </video>
              {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 md:px-32 py-8 lg:px-0 text-white text-center lg:w-1/5 lg:text-left top-[15%] lg:top-[25%] 2xl:top-[20%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-xl ' data-aos='fade-right' data-aos-delay='400'>VEHICLE</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='600'>DRACARYS</h1>
                    {/* table */}
                    <p className='text-lg mb-4'>The Dracarys spacecraft is capable of carrying up to 7 passengers to and from Earth orbit and beyond. The pressurized section of the capsule is designed to carry both people and environmentally sensitive cargo. Toward the base of the capsule and contained within the nosecone are the Draco thrusters, which allow for orbital maneuvering.</p>
                    <Link to='/dracarys'>
                        <button className="border-solid transition ease-in-out delay-150 mt-4 border-2 px-8 py-3 hover:bg-white hover:text-black uppercase text-sm font-bold border-white duration-300 ... ">LEARN MORE ABOUT DRACARYS</button>
                    </Link>
                </div>
            </div>
        </div>
        <Earth2Earth />
    </div>
  )
}

export default Earth
