import React, { useEffect } from 'react'
import PageHero from '../components/PageHero'
import Performance from '../components/Performance'
import VeneraCount from '../components/VeneraCount'
import VeneraSlider from '../components/VeneraSlider'
import Rasputin from '../components/Rasputin'
import VeneraCarousell from '../components/VeneraCarousell'
import DracarysSlider from '../components/DracarysSlider'


const Venera = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='bg-black'>
        <PageHero
          title="VENERA 9"
          subtitle="THE WORLD’S MOST POWERFUL ROCKET"
          image="https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Venera/FH_7.webp"
        /> 
        <VeneraCount />
        <VeneraSlider />
        <Performance />
        <Rasputin />
        <DracarysSlider />
        <VeneraCarousell />
    </div>
  )
}

export default Venera
