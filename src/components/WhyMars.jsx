import React from 'react'

const WhyMars = () => {
  return (
    <div className='flex flex-col lg:flex-row m-auto bg-black'>
      <div className=''>
        <img className='w-full h-screen lg:h-auto object-cover' src="https://www.spacex.com/static/images/backgrounds/mars_why.webp" alt="" />
      </div>
      <div className='lg:w-1/5 pt-[10%] flex flex-col px-4  gap-4 lg:absolute right-0 left-[60%] text-white' >
        <h2 className='text-6xl font-bold'>WHY MARS?</h2>
        <p>At an average distance of 140 million miles, Mars is one of Earth's closest habitable neighbors. Mars is about half again as far from the Sun as Earth is, so it still has decent sunlight. It is a little cold, but we can warm it up. Its atmosphere is primarily CO2 with some nitrogen and argon and a few other trace elements, which means that we can grow plants on Mars just by compressing the atmosphere. Gravity on Mars is about 38% of that of Earth, so you would be able to lift heavy things and bound around. Furthermore, the day is remarkably close to that of Earth.</p>
        <table className="my-4 w-full">
                          <tbody className="pt-16 font-[600] ">
                            <tr className="border-b text-sm border-gray-500 " >
                              <td className="text-[14px] py-4  font-[600]  md:py-[20px]">Diameter</td>
                              <td className="text-right" >6,791 km <span className="text-[#7F7C82]">/ 4,220 m</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500"  >
                              <td className="font-[600] py-4  md:py-[20px]" >Day Length	</td>
                              <td className="text-right" >24 hrs <span className="text-[#7F7C82]"> 37 min</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500 " >
                              <td className="font-[600] py-4  md:py-[20px]" >Force of Gravity	</td>
                              <td className="text-right" >38% of Earth </td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500"  >
                              <td className="font-[600] py-4  md:py-[20px]" >Avg Distance from Earth</td>
                              <td className="text-right" >225Mkm <span className="text-[#7F7C82]"> / 140Mmi</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500 ">
                              <td className="font-[600] py-4  md:py-[20px]" >Age</td>
                              <td className="text-right">4.5 billion years</td>
                            </tr>
                          </tbody>
                        </table>
      </div>
    </div>
  )
}

export default WhyMars
