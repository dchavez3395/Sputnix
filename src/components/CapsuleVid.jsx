import React from 'react'
import { Link } from 'react-router-dom'

const CapsuleVid = () => {
  return (
    <>
        <div className="flex relative flex-col lg:flex-row lg:px-0 ">
            <video className=" z-[0] opacity-60 w-full h-screen 2xl:h-auto object-cover " autoPlay loop muted>
                    <source className="w-full" src='https://www.spacex.com/human-spaceflight/assets/images/Dragon_Render_min.webm' />
            </video>
            <div className="absolute flex flex-col lg:flex-row z-[1000] justify-center lg:m-auto gap-4 xl:gap-8 text-sm text-right px-4 sm:left-[40%] lg:left-0 lg:text-left top-[50%] md:top-[50%] lg:top-[80%]">
              <div className="text-white w-full  lg:w-[40%]  2xl:w-1/5 2xl:px-8" data-aos='fade-right' data-aos-delay='400'>
                <h2 className="text-[#FD841F] xl:text-2xl 2xl:text-4xl">- <span className="font-bold text-white uppercase mb-2 md:text-md lg:text-xl 2xl:text-3xl">First Launch</span> -</h2>
                <p className="text-sm w-full  lg:w-full xl:text-lg 2xl:text-lg" >On Dec. 5, 2014, Dracarys launched atop a Vosktok IV Heavy rocket from Toronto Air Force Station's Space Launch Complex 37.</p>
              </div>
              <div className="text-white w-full  lg:w-[40%]  2xl:w-1/5 2xl:px-8" data-aos='fade-right' data-aos-delay='600'>
                <h2 className="text-[#FD841F] xl:text-2xl 2xl:text-4xl">- <span className="font-bold text-white uppercase mb-2 md:text-md lg:text-xl 2xl:text-3xl">FLIGHT TEST</span> -</h2>
                <p className="text-sm  w-full lg:w-full xl:text-lg 2xl:text-lg" >Loaded with over 1,200 sensors, Dracarys completed a two-orbit, 4.5-hour flight to test many of the systems most critical to safety before it carries astronauts.</p>
              </div>
              <div className="text-white w-full  lg:w-[40%]  2xl:w-1/5 2xl:px-8" data-aos='fade-right' data-aos-delay='800'>
                <h2 className="text-[#FD841F] xl:text-2xl 2xl:text-4xl">- <span className="font-bold text-white uppercase mb-2 md:text-md lg:text-xl 2xl:text-3xl">IN THE FUTURE</span> -</h2>
                <p className="text-sm  w-full lg:w-full xl:text-lg 2xl:text-lg">Dracarys will launch on NASA’s new heavy-lift rocket, the Space Launch System. More powerful than any other rocket ever built.</p>
              </div>
            </div>

            <div className="m-auto z-[0] w-full px-4 sm:w-1/3 2xl:w-1/5  absolute text-white overflow-hidden text-left top-[7%] md:top-[10%] lg:top-[20%] left-[50%] sm:left-[20%] md:left-[30%] lg:left-[25%] 2xl:left-[30%] -translate-x-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold pb-4" data-aos='fade-right' data-aos-delay='400'>Dracarys</h2>
            <p className="text-sm lg:text-lg 2xl:w-full" data-aos='fade-right' data-aos-delay='400'>The Dracarys spacecraft is capable of carrying up to 7 passengers to and from Earth orbit and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.</p>
            <Link className='flex' to='/dracarys'>
                <button className="border-solid transition ease-in-out delay-150 mt-4 border-2 px-8 py-3 hover:bg-white hover:text-black uppercase text-sm font-bold border-white duration-300 ... " data-aos='fade-right' data-aos-delay='600'>LEARN MORE</button>
            </Link>
            </div>
          </div>
    </>
  )
}

export default CapsuleVid
