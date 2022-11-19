import React, { useEffect } from 'react'
import PageHero from '../components/PageHero'
import Reusable from '../components/Reusable'
import Landing from '../components/Landing'
import CapsuleVid from '../components/CapsuleVid'
import RocketSlider from '../components/RocketSlider'

const Technology = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='bg-black'>
         <PageHero
          title="The Future Is Now"
          subtitle="SPUTNIX. OFFERS THE LATEST IN INTERPLANETARY TECHNOLOGY"
          image="https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/technology/moonbase.webp"
        />
        <Reusable />
        <Landing />
        <CapsuleVid />
        <RocketSlider />

    </div>
  )
}

export default Technology