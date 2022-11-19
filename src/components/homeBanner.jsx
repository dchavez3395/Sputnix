import React from 'react'
import { homeBanner } from '../data/data'

const HomeBanner = () => {
  return (
    <div className='bg-black  w-full flex flex-col px-12 sm:px-20 md:px-8 m-auto items-center lg:flex-row gap-8  lg:gap-12 2xl:gap-28  md:pt-[20%] lg:pt-0 justify-center h-screen lg:h-[25rem] '>
        {homeBanner.map((item, index) => {
          const {img, title, paragraph} = item;
          return (
            <div className='md:w-[20rem] h-[10rem] text-white text-left' key={index}>
                <div className='flex py-2 md:py-4 gap-4  md:gap-1 lg:gap-2 flex-row'>
                    <img src={img} className='w-[5rem] sm:w-[5rem]' alt="" />
                    <h2 className='m-auto text-2xl font-bold'>{title}</h2>
                </div>
                <p className='text-md  block'>{paragraph}</p>
            </div>
          )
        })}    </div>
  )
}

export default HomeBanner