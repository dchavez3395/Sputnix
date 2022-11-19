import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MoonNBack from '../components/MoonNBack'
import PageHero from '../components/PageHero'
import WhyMoon from '../components/WhyMoon'

const Moon = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='bg-black'>
      <PageHero
          title="THE MOON"
          subtitle="RETURNING HUMANS TO LUNAR MISSIONS"
          image="https://www.spacex.com/static/images/backgrounds/moon_feature.webp"
        />
        <div className='relative'>
            <img className='h-screen object-cover' src="https://www.spacex.com/static/images/backgrounds/moon_humans.webp" alt="" />
            <div className='absolute text-white lg:w-1/3 m-auto top-[20%] text-center left-0 right-0'>
                <p className='lg:text-2xl'>ONLY 24 HUMANS HAVE BEEN TO THE MOON IN HISTORY.</p>
                <p className='lg:text-2xl'> NO ONE HAS BEEN BACK SINCE 1972.</p>
            </div>
        </div>
        <WhyMoon />
        <div>
            <div className='relative'>
                <video className="z-[0] w-full relative h-[50vh] lg:h-screen object-cover " autoPlay loop muted>
                    <source className="w-full" src='https://www.spacex.com/media/WebsiteStarshipStack_Anim_Render_Desktop.mp4' />
                </video>
              {/* rocket info */}
                <div className="lg:absolute z-[0] px-8 md:px-32 py-8 lg:px-0 text-white text-center lg:w-1/5 lg:text-left top-[15%] lg:top-[25%] 2xl:top-[20%] lg:left-[15%] 2xl:left-[25%]">
                    <h3 className='text-xl ' data-aos='fade-right' data-aos-delay='400'>VEHICLE</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase" data-aos='fade-right' data-aos-delay='600'>MOTHERSHIP</h1>
                    {/* table */}
                    <p className='text-lg mb-4'>Mothership will be the world’s most powerful launch vehicle ever developed, with the ability to carry in excess of 100 metric tonnes to Earth orbit. Drawing on an extensive history of launch vehicle and engine development programs, SputniX has been rapidly iterating on the design of Mothership with orbital-flight targeted for 2020.</p>
                    <Link to='/mothership'>
                        <button className="border-solid transition ease-in-out delay-150 mt-4 border-2 px-8 py-3 hover:bg-white hover:text-black uppercase text-sm font-bold border-white duration-300 ... ">LEARN MORE ABOUT STARSHIP</button>
                    </Link>
                </div>
            </div>
        </div>
        <MoonNBack />
    </div>
  )
}

export default Moon
