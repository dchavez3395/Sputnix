import React, { useEffect } from 'react'
import CommonPage from './CommonPage'
import Hero from './Hero'
import HomeBanner from './homeBanner'
import Payload from './Payload'
import RocketSlider from './RocketSlider'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className=''>
      <Hero />
      <HomeBanner />
      <CommonPage title='RESERVE YOUR RIDE ONLINE' image='https://www.spacex.com/static/images/backgrounds/rideshare_pricing.webp' />
      <Payload />
      <RocketSlider />
    </div>
  )
}

export default Home