import React from 'react'

const Parachute = () => {
  return (
    <div className='flex relative bg-black flex-col m-auto px-8 items-center lg:flex-row gap-12 py-40 justify-center'>
    <div className='xl:w-2/4 2xl:w-1/4'>
        <img src="https://www.spacex.com/static/images/dragon/parachute.webp" alt="" />
    </div>
    <div className='text-white flex flex-col w-full  gap-4 xl:w-1/5'>
        <h2 className='text-4xl 2xl:text-6xl font-bold'>DRACARYS PARACHUTE SYSTEM</h2>
        <p className='text-sm lg:text-md xl:text-lg'>The Dracarys spacecraft is equipped with two drogue parachutes to stabilize the spacecraft following reentry and four main parachutes to further decelerate the spacecraft prior to landing.</p>
    </div>
</div>
  )
}

export default Parachute
