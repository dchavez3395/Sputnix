import React from 'react'

const WhyEarth = () => {
  return (
    <div className='flex flex-col lg:flex-row m-auto bg-black'>
      <div className=''>
        <img className='w-full h-screen lg:h-auto object-cover' src="https://www.spacex.com/static/images/backgrounds/earth_orbit.webp" alt="" />
      </div>
      <div className='lg:w-1/5 pt-[10%] flex flex-col px-4  gap-4 lg:absolute right-0 left-[60%] text-white' >
        <h2 className='text-5xl font-bold'>ORBIT OUR HOME</h2>
        <p>Experience Earth’s wonders from space—from the Great Barrier Reef, Himalayas, Amazon River, and Giza’s Pyramids by day, to the glow of city lights, lightning storms, and the Aurora Borealis by night. Dragon fully orbits the Earth every 90 minutes, making a highly customized flight path possible. Fly over your hometown, famous landmarks and other places meaningful to you.</p>
        <table className="my-4 w-full">
                          <tbody className="pt-16 font-[600] ">
                            <tr className="border-b text-sm border-gray-500 " >
                              <td className="text-[14px] py-4  font-[600]  md:py-[20px]">DIAMETER</td>
                              <td className="text-right" >312,742 km <span className="text-[#7F7C82]"> / 7,918 mi</span></td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500"  >
                              <td className="font-[600] py-4  md:py-[20px]" >MASS</td>
                              <td className="text-right" >5.9722×1024 kg</td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500 " >
                              <td className="font-[600] py-4  md:py-[20px]" >GRAVITY	</td>
                              <td className="text-right" >16.6% of Earth </td>
                            </tr>
                            <tr className="border-b text-sm border-gray-500"  >
                              <td className="font-[600] py-4  md:py-[20px]" >AGE</td>
                              <td className="text-right" >4.543 billion years</td>
                            </tr>
                          </tbody>
                        </table>
      </div>
    </div>
  )
}

export default WhyEarth
