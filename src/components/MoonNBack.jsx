import React from 'react'

const MoonNBack = () => {
  return (
    <div className='m-auto justify-center  flex bg-black flex-col py-8 gap-8 px-4 items-center '>
      <div className='lg:w-1/5 relative lg:pt-40 lg:right-[20rem] text-white'>
        <h2 className='text-6xl font-bold'>TO THE MOON AND BACK</h2>
        <p>The infographic below outlines a typical approach to a mission around the Moon. Lunar missions such as the one depicted here would typically last 6-7 days.</p>
      </div>
        <img className='m-auto' src="https://github.com/dchavez3395/sputnik-v2/blob/main/assets/Moon.png?raw=true" alt="" />
        <div className='text-white lg:py-20'>
            <ul className='flex flex-col lg:flex-row gap-4'>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>01.LAUNCH</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>Liquid oxygen and methane are loaded onto the Mothership-Super Heavy system. Mothership-SuperHeavy lifts off.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>02.BOOSTER SEPARATION</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>After burning for approx. 3 minutes, Super Heavy separates from Mothership and returns back to Earth. Mothership continues into orbit.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>03.TRANS LUNAR INJECTION</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>Mothership performs a lunar transfer burn using the three Raptor vacuum engines.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>04.LUNAR FLYBY</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>Mothership performs small trim maneuvers to target close approach.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[10rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>05.PERILUNE</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>As Mothership comes close to the Moon, the surface will be in plain view for close inspection.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>06.END LUNAR FLYBY</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>As Mothership begins a return to Earth, the Moon recedes away as Earth grows bigger.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>07.ENTRY INTERFACE</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>Mothership uses its heatshield to safely reenter Earth’s atmosphere.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>08.LANDING</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>Mothership executes a final series of control burns to get into a vertical orientation and land at the landing pad</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MoonNBack
