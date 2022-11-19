import React from "react";
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';


const DracarysCounter = () => {
  return (
    <div className="bg-black text-white py-12 flex flex-col md:flex-row md:gap-8 2xl:gap-48 m-auto justify-center ">
      <div className="text-center">
        <CountUp duration={2} start={0} end={390} redraw={false}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span className="text-[5rem] 2xl:text-[8rem]" ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <p className="mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl">
          TOTAL LAUNCHES
        </p>
      </div>
      <div className="text-center">
        <CountUp duration={2} start={0} end={375} redraw={false}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span className="text-[5rem] 2xl:text-[8rem]" ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <p className="mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl">
          TOTAL LANDINGS
        </p>
      </div>
      <div className="text-center">
        <CountUp duration={2} start={0} end={369} redraw={false}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span className="text-[5rem] 2xl:text-[8rem]" ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        <p className="mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl">
          TOTAL REFLIGHTS
        </p>
      </div>
    </div>
  );
};

export default DracarysCounter;
