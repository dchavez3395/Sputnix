import React, { useEffect } from 'react'
import PageHero from '../components/PageHero'
import VostokCount from '../components/VostokCount'
import VostokSlider from '../components/VostokSlider'
import Reusable from '../components/Reusable'
import Rasputin from '../components/Rasputin'
import VostokCarrousel from '../components/VostokCarrousel'


const Vostok = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='bg-black'>
      <PageHero
          title="VOSTOK X"
          subtitle="FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT"
          image="https://github.com/dchavez3395/sputnik-v2/blob/main/assets/technology/technology-top.jpg?raw=true"
        /> 
        <VostokCount />
        <VostokSlider />
        <Reusable />
        <Rasputin  />
        <VostokCarrousel />
    </div>
  )
}

export default Vostok
