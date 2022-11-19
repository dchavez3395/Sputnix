import React, { useEffect } from 'react'
import MothershipCarousell from '../components/MothershipCarousell'
import MothershipCount from '../components/MothershipCount'
import MothershipSlider from '../components/MothershipSlider'
import PageHero from '../components/PageHero'
import Raptor from '../components/Raptor'

const Mothership = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='bg-black'>
      <PageHero
          title="MOTHERSHIP"
          subtitle="SPACE LUXURY AT YOUR REACH"
          image="https://www.spacex.com/static/images/backgrounds/mission_humans.webp"
        /> 
        <MothershipCount />
        <MothershipSlider />
        <Raptor />
        <MothershipCarousell />
    </div>
  )
}

export default Mothership