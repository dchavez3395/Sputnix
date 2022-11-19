import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MarsCounter from '../components/MarsCounter'
import MarsNBack from '../components/MarsNBack'
import PageHero from '../components/PageHero'
import WhyMars from '../components/WhyMars'

const Mars = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <PageHero
          title="MARS & BEYOND"
          subtitle="THE ROAD TO MAKING HUMANITY MULTIPLANETARY"
          image="https://www.spacex.com/static/images/backgrounds/mars_feature.webp"
        />
        <div className='relative'>
            <img className='h-screen object-cover' src="https://www.spacex.com/static/images/backgrounds/mars_humans.webp" alt="" />
            <div className='absolute text-white lg:w-1/3 m-auto top-[20%] text-center left-0 right-0'>
                <p className='lg:text-2xl'>“You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past"</p>
            </div>
        </div>
        <WhyMars />
        <MarsCounter />
        <div>
            <div className='relative bg-black'>
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
        <MarsNBack />
    </>
  )
}

export default Mars
