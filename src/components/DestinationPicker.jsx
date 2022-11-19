import React, { useState } from "react";
import { destinations } from "../data/data";

const DestinationPicker = () => {
  const [value, setValue] = useState(0);
  const { id, img, name, description, distance, travel } = destinations[value];
  return (
    <>
      <div className="relative h-screen">
        <video
          className="z-[0] w-full brightness-90 absolute h-full object-cover "
          autoPlay
          loop
          muted
        >
          <source src="https://www.spacex.com/media/Website_TankerDock.mp4" />
        </video>
        <div className="absolute lg:top-[30%] py-8 left-0 right-0">
          <div className=" flex flex-col lg:flex-row gap-12 m-auto justify-center relative">
            <article className="lg:h-[30rem] px-4">
              <img className="w-full h-full" src={img} alt="image" />
            </article>
            <article className="text-white  lg:pt-20 px-4 lg:w-1/5 flex flex-col gap-2">
              <ul className=" flex flex-row gap-4">
                {destinations.map((item, index) => {
                  const { name } = item;
                  return (
                    <button
                      key={index}
                      onClick={() => setValue(index)}
                      className={`uppercase font-semibold tracking-wider leading-6 text-gray-200  ${index === value && " border-white border-b-2"}`}
                    >
                      {name}
                    </button>
                  );
                })}
              </ul>
              <div className="">
                <h2 className="font-bold text-4xl lg:text-6xl uppercase tracking-widest mb-5">
                  {name}
                </h2>
                <p className="text-sm border-b border-gray-400 pb-5">
                  {description}
                </p>
                <ul className="flex flex-wrap items-center justify-between gap-4 pt-5" data-aos='fade-left'
              data-aos-delay='500'>
              <li className="uppercase text-gray-200 lg:text-xl">
                Avg. Distance<span className="lg:text-4xl block">{distance}</span>
              </li>
              <li className="uppercase text-gray-200 lg:text-xl">
                Est. travel time<span className="lg:text-4xl block">{travel}</span>
              </li>
            </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationPicker;
