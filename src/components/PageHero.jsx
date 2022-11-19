import React from 'react'

const PageHero = (props) => {
  return (
    <div className='relative h-screen w-full '>
      <img src={props.image} className='h-full brightness-75 w-full object-cover' alt="" />
      <div className=' text-white text-center px-4 absolute top-[40%] right-0 left-0 m-auto  '>
        <h2 className='text-4xl xl:text-6xl uppercase font-bold '>{props.title}</h2>
        <p className='text-sm lg:text-xl uppercase'>{props.subtitle}</p>
      </div>
    </div>
  )
}

export default PageHero
