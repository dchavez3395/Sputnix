import React from 'react'

const Suit = () => {
  return (
    <div className='relative'>
      <div className='relative'>
        <img className=' h-screen object-cover' src="https://www.spacex.com/static/images/spacesuit/HelmetShot_Desktop.webp" alt="" />
      </div>
      <div className='absolute top-[4rem] lg:top-[20rem] text-white lg:left-[20%] flex flex-col gap-4 lg:w-[35rem] px-4'>
        <h2 className='text-5xl font-medium'>THE SUIT</h2>
        <p className='lg:text-lg'>Designed in-house by SputniX, each custom-tailored suit can provide a pressurized environment for all crew members aboard Dragon in atypical situations.</p>
        <p className='lg:text-lg'>This suit also routes communications and cooling systems to the astronauts aboard Dragon during regular flight. Key features include:</p>
        <div className='w-full'>
            <p className='lg:text-lg border-b-2 border-gray-500 py-4 md:py-[12px]'>3D printed spacesuit helmet</p>
            <p className='lg:text-lg border-b-2 border-gray-500 py-4 md:py-[12px]'>Touchscreen compatible gloves</p>
            <p className='lg:text-lg border-b-2 border-gray-500 py-4 md:py-[12px]'>Flame resistant outer layer</p>
            <p className='lg:text-lg border-b-2 border-gray-500 py-4 md:py-[12px]'>Hearing protection during ascent and reentry</p>
        </div>
      </div>
    </div>
  )
}

export default Suit
