import React from 'react'

const CommonPage = (props) => {
  return (
    <section className='relative !h-screen'>
            <img src={props.image} className='absolute h-full w-full object-cover' alt="" />
            <div className='relative px-8 lg:px-[20%] lg:w-[60%]  md:w-2/3 pt-40 lg:pt-52 text-white'>
                <h2 className='text-4xl lg:text-6xl font-bold'>{props.title}</h2>
                <p className='text-md lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda error dolorem sapiente, aut dignissimos consequatur? Totam doloremque, earum aliquid culpa accusamus quibusdam voluptatibus, deserunt expedita laboriosam praesentium ullam. Modi?</p>
            </div>
            
    </section>
  )
}

export default CommonPage
