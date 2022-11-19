import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const VeneraCount = () => {
  return (
    <div>
        <div className='bg-black text-white py-12 flex flex-col md:flex-row md:gap-8 2xl:gap-48 m-auto justify-center '>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={190} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL LAUNCHES</p>
              </div>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={205} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL LANDINGS</p>
              </div>
              <div className='text-center'>
              <CountUp duration={2} start={0} end={193} redraw={false}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <span className='text-[5rem] 2xl:text-[8rem]' ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
              <p className='mt-[-5%] md:mt-[-13%] xl:text-xl 2xl:text-2xl'>TOTAL REFLIGHTS</p>
              </div>
        </div>
    </div>
  )
}

export default VeneraCount
