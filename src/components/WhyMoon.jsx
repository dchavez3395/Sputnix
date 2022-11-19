import React from 'react'

const WhyMoon = () => {
  return (
    <div className='flex flex-col lg:flex-row m-auto bg-black'>
      <div className=''>
        <img className='w-full h-screen lg:h-auto object-cover' src="https://www.spacex.com/static/images/backgrounds/moon_why.webp" alt="" />
      </div>
      <div className='lg:w-1/5 pt-[10%] flex flex-col px-4  gap-4 lg:absolute right-0 left-[60%] text-white' >
        <h2 className='text-5xl font-bold'>WHY THE MOON?</h2>
        <p>The Moon is one of Earth’s closest habitable neighbors and provides an opportunity to gain valuable experience for missions to Mars and beyond.</p>
        <table className="my-4 w-full">
                          <tbody className="pt-16 font-[600] ">
                            <tr className="border-b text-sm border-gray-500 " >
                              <td className="text-[14px] py-4  font-[600]  md:py-[20px]">Diameter</td>
                              <td className="text-right" >3,475 km <span className="text-[#7F7C82]"> / 2,159 mi</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500"  >
                              <td className="font-[600] py-4  md:py-[20px]" >DAY LENGTH		</td>
                              <td className="text-right" >29.5 Earth days</td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500 " >
                              <td className="font-[600] py-4  md:py-[20px]" >GRAVITY	</td>
                              <td className="text-right" >16.6% of Earth </td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500"  >
                              <td className="font-[600] py-4  md:py-[20px]" >AVG DISTANCE FROM EARTH</td>
                              <td className="text-right" >384,400 km <span className="text-[#7F7C82]"> / 238,855 m</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500 ">
                              <td className="font-[600] py-4  md:py-[20px]" >AGE</td>
                              <td className="text-right">4.51 billion years</td>
                            </tr>
                          </tbody>
                        </table>
      </div>
    </div>
  )
}

export default WhyMoon
