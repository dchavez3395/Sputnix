import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen">
        <img
          className="w-full h-full object-cover brightness-75 absolute"
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
          alt=""
        />
      <div className="relative justify-center overflow-hidden flex lg:flex-row flex-col gap-8 md:px-32 lg:px-6 pt-[50%]  lg:pt-[20%] xl:py-[10%] 2xl:py-[20%]">
        <article className="z-100 flex flex-col gap-4 xl:w-1/4 lg:w-2/4 mr-0 text-white text-center lg:text-right relative ">
          <h2 className="text-[30px] text-center lg:text-right uppercase font-medium">
            A new age of tavel is here, welcome to:
          </h2>
          <span className="text-7xl leading-0 uppercase">Space</span>
          <span className="text-md">
            The World's first civilian Space Travel Agency. Sputnik offers the
            next big step in Human Travel. We offer affordable commercial
            flights to both Earth and Lunar orbit. Learn about our ambitious
            Mars Colonization Project.
          </span>
        </article>
        <article className="lg:pt-12 relative text-center">
          <button className="lg:h-[135px] h-[6rem] md:h-[8rem] w-auto  rounded-full bg-white text-gray-800 uppercase font-bold sm:text-2xl  lg:text-2xl px-4 animate-pulse">
            <Link to='/destination'>EXPLORE</Link>
          </button>
        </article>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
