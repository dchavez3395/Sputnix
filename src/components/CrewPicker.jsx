import React, { useState } from 'react'
import { crew } from "../data/data";
import { BsCircle } from "react-icons/bs";




const CrewPicker = () => {
    const [value, setValue] = useState(0);
    const { id, img, name, role, bio} = crew[value];
  return (
    <div className="relative h-screen">
    <video
      className="z-[0] w-full brightness-75 absolute h-full object-cover "
      autoPlay
      loop
      muted
    >
      <source src='https://www.nasa.gov/specials/orionfirstflight/videos/sls-videos/video.mp4' />
    </video>
    <div className="px-12 sm:px-8 flex py-12  items-center m-auto 2xl:pt-[8%] justify-center overflow-hidden flex-col lg:grid grid-cols-2 md:gap-5 md:items-center lg:max-w-7xl xl:max-w-[100rem] lg:mx-auto">
          <article className="z-[10000] flex flex-col gap-2 pb-4 text-left lg:text-left">
            <h1
              className=" font-extralight text-gray-300 text-xl sm:text-3xl uppercase"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              02<span className="ml-5 font-bold">Meet the crew</span>
            </h1>
            <h4
              className="md:text-2xl uppercase text-gray-400"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {role}
            </h4>
            <h2
              className="font-bold text-2xl md:text-5xl text-white uppercase tracking-widest"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              {name}
            </h2>
            <p
              className=" text-gray-400 text-sm sm:text-lg lg:text-xl xl:text-2xl"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              {bio}
            </p>
            <div className="flex">
              {crew.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`uppercase h-5 rounded-full text-2xl text-white mx-2 pb-2 ${
                    index === value && "bg-white"
                  }`}
                >
                  <BsCircle className="w-5 h-5" />
                </button>
              ))}
            </div>
          </article>
          <article className=" relative px-4 h-[20rem] lg:h-auto">
              <img className="lg:w-[60%] h-full" src={img} alt="image" />
            </article>
        </div>
  </div>
  )
}

export default CrewPicker
