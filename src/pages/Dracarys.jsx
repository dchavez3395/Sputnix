import React, { useEffect } from 'react'
import DracarysCarousell from '../components/DracarysCarousell'
import DracarysCounter from '../components/DracarysCounter'
import DracarysSlider from '../components/DracarysSlider'
import Dracos from '../components/Dracos'
import PageHero from '../components/PageHero'
import Parachute from '../components/Parachute'
import dracarysCall from '../data/Assets/SpinningDragon_I4_Web_Callouts_Reloop.mp4';


const Dracarys = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
         <PageHero
          title="DRACARYS"
          subtitle="SENDING HUMANS AND CARGO INTO SPACE"
          image="https://www.spacex.com/static/images/backgrounds/dragon_feature.webp"
        /> 
        <DracarysCounter />
        <DracarysSlider />
        <Parachute />
        <video className="z-[0] w-full relative h-[50vh] object-left lg:h-screen object-cover " autoPlay loop muted>
            <source className="w-full" src={dracarysCall} />
        </video>
        <Dracos />
        <DracarysCarousell />
    </div>
  )
}

export default Dracarys