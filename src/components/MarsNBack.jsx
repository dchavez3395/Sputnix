import React from 'react'

const MarsNBack = () => {
  return (
    <div className='m-auto justify-center  flex bg-black flex-col py-8 gap-8 px-4 items-center '>
      <div className='lg:w-1/5 relative pt-40 lg:right-[20rem] text-white '>
        <h2 className='text-4xl lg:text-6xl font-bold'>TO MARS AND BACK</h2>
        <p>Together the Mothership spacecraft and Venera 9 rocket create a reusable transportation system capable of on orbit refueling and leveraging Mars’ natural H2O and CO2 resources to refuel on the surface of Mars.</p>
      </div>
        <img className='m-auto' src="https://github.com/dchavez3395/sputnik-v2/blob/main/assets/Mars.png?raw=true" alt="" />
        <div className='text-white py-20'>
            <ul className='flex flex-col lg:flex-row lg:gap-4'>
                <li className='flex flex-col lg:gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>01.LAUNCH & BOOSTER RETURN</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>Mothership launches with Mothership Super Heavy booster. Booster separates, returning to Earth.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>02.SHIP ARRIVES IN EARTH ORBIT</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>Mothership enters Earths orbit while a refilling tanker launches to mate with Mothership in orbit.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>03.TANKERS REFILL SHIP AND RETURN TO EARTH</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>Tanker ship docks with Mothership, refilling Mothership and returning to Earth.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>04.REFILLED SHIP TRAVELS TO MARS</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>Once Mothership has been fully refueled, it will begin its journey from Earth orbit, around the Sun and onward to Mars.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[10rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>05.SHIP REFILLED ON MARS USING LOCAL RESOURCES</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>When Mothership lands on Mars it will be refueled using Mars local resources of H20 and CO2.</p>
                </li>
                <li className='flex flex-col gap-4 w-[14rem] h-[10rem] lg:h-[20rem] group'>
                    <h2 className='text-sm font-medium cursor-pointer'>06.SHIP PERFORMS MARS ASCEND & DIRECT RETURN TO EARTH</h2>
                    <p className='text-gray-400 text-sm hidden group-hover:block'>When Mothership is fully refueled it will begin Mars ascent and direct return to Earth.</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MarsNBack
