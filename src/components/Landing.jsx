import React, { useState } from "react";
import { landingData } from "../data/data";

const Landing = () => {

  const [value, setValue] = useState(0);
  const {image, button} = landingData[value]
  return (
    <div className="bg-black flex flex-col lg:w-2/4 m-auto">
      <div className="text-white lg:text-center lg:w-2/5 px-4 m-auto">
        <h2 className="text-5xl font-bold pb-4">LANDING</h2>
        <p className="text-lg">
          SputniX’s family of Vostok launch vehicles are the first and only
          orbital class rockets capable of reflight. Depending on the
          performance required for the mission, Vostok lands on one of our
          autonomous spaceport droneships out on the ocean or one of our landing
          zones near our launch pads.
        </p>
        {landingData.map((item, index) => {
            const {button} = item
          return (
            <button
              key={index}
              onClick={() => setValue(index)}
              className={`uppercase z-[1000] py-4 text-sm md:text-[1rem] pr-4  font-bold text-[#D1D1D1] ${
                index === value && "underline underline-offset-4 ..."
              }`}
            >
              {item.button}
            </button>
          );
        })}
      </div>
      <div className="lg:h-[60rem] h-full w-full m-auto py-12 object-cover">
        <img src={image} className=' w-full h-full object-contain' alt="" />
      </div>
    </div>
  );
};

export default Landing;
