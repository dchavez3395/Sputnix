import React from "react";

const Performance = () => {
  return (
    <div className="flex relative bg-black flex-col m-auto px-8 items-center lg:flex-row gap-12 py-40 justify-center">
      <div className="xl:w-2/4 2xl:w-1/4">
        <video className="z-[0] relative" autoPlay loop muted>
          <source className="" src='https://www.spacex.com/media/fh_performance.mp4' />
        </video>
      </div>
      <div className="text-white flex flex-col w-full  gap-4 xl:w-1/5">
        <h2 className="text-4xl 2xl:text-6xl font-bold">
          UNMATCHED PERFORMANCE
        </h2>
        <p className="text-sm lg:text-md xl:text-lg">
          With more than 5 million pounds of thrust at liftoff, Venera 9 is
          the most capable rocket flying. By comparison, the liftoff thrust of
          the Venera 9 equals approximately eighteen 747 aircraft at full
          power. Venera 9 can lift the equivalent of a fully loaded 737
          jetliner—complete with passengers, luggage and fuel—to orbit.
        </p>
      </div>
    </div>
  );
};

export default Performance;
