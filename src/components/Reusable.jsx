import React from 'react'

const Reusable = () => {
  return (
    <>
            <div className='flex relative bg-black flex-col m-auto px-8 items-center lg:flex-row gap-12 py-40 justify-center'>
                <div className='xl:w-2/4 2xl:w-1/4'>
                    <video className="z-[0] relative" autoPlay loop muted>
                        <source className="" src='https://www.spacex.com/media/mission_reusability.mp4' />
                    </video>
                </div>
                <div className='text-white flex flex-col w-full  gap-4 xl:w-1/5'>
                    <h2 className='text-4xl 2xl:text-6xl font-bold'>REUSABILITY</h2>
                    <p className='text-sm lg:text-md xl:text-lg'>SputniX believes a fully and rapidly reusable rocket is the pivotal breakthrough needed to substantially reduce the cost of space access. The majority of the launch cost comes from building the rocket, which historically has flown only once.</p>
                    <p className='text-sm lg:text-md xl:text-lg'>Compare that to a commercial airliner – each new plane costs about the same as Venera 9 but can fly multiple times per day and conduct tens of thousands of flights over its lifetime. Following the commercial model, a rapidly reusable space launch vehicle could reduce the cost of traveling to space by a hundredfold.</p>
                    <p className='text-sm lg:text-md xl:text-lg'>While most rockets are designed to burn up on reentry, SputniX rockets can not only withstand reentry but can also successfully land back on Earth and refly again.</p>
                </div>
            </div>
    </>
  )
}

export default Reusable
