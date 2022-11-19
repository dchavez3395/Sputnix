import React, { useState } from 'react'
import {dracos} from "../data/data"

const Dracos = () => {
    const [value, setValue] = useState(0)
    const {img, bottom1, button, first, firstData, firstSpan, second, secondData, secondSpan} = dracos[value]
  return (
    <div>
        <div>
            <div className='relative py-8 bg-black overflow-hidden'>
                <div className='z-[0]'>
                    <img src={img} className='w-full h-[50vh] lg:h-screen object-cover' alt=""  />
                </div>
                    {/* rocket info */}
                <div className="lg:absolute z-[0] px-4 md:px-32 lg:px-0 py-12 text-white text-center lg:text-left top-[15%] lg:left-[10%] xl:left-[20%]">
                    <h3 className='text-2xl '>Dracarys</h3>
                    <h1 className="text-[40px] 2xl:text-5xl py-2  font-bold uppercase">{button}</h1>
                    {/* table */}
                    <div>
                    {dracos.map((item, index) => {
                    const {button} = item;
                    return (
                        <button
                            key={index}
                            onClick={() => setValue(index)}
                            className={`uppercase z-[1000] py-8 text-sm md:text-[1rem] pr-4  font-bold text-[#D1D1D1] ${
                                index === value && "underline underline-offset-4 ..."
                            }`} >
                        {item.button} 
                        </button>
                    )
                })}
                    <div className='lg:w-2/4 text-left xl:w-[35%] z-50 2xl:w-1/4'>
                        {bottom1}
                        <table className="my-4 w-full">
                            <tbody className="pt-16 text-[15.5px] font-[600] ">
                                <tr className="border-b border-gray-500  " >
                                    <td className="text-[14px] font-[600]  py-[20px]">{first}</td>
                                    <td className="text-right">{firstData}<span className="text-[#868686]">{firstSpan}</span></td>
                                </tr>
                                <tr className="border-b border-gray-500" >
                                    <td className="text-[14px] font-[600]  py-[20px]">{second}</td>
                                        <td className="text-right">{secondData} <span className="text-[#868686]">{secondSpan}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dracos