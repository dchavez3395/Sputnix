import React, { useEffect } from 'react'
import CommonPage from '../components/CommonPage'
import PageHero from '../components/PageHero'
import Suit from '../components/Suit'

const Iss = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <PageHero
          title="SPACE STATION"
          subtitle="TRANSPORTING HUMANS TO THE ORBITING LABORATORY IN THE SKY"
          image="https://www.spacex.com/static/images/backgrounds/iss_feature.webp"
        />
        <div className='relative'>
            <img className='h-screen object-cover' src="https://www.spacex.com/static/images/backgrounds/iss_humans.webp" alt="" />
            <div className='absolute text-white lg:w-1/3 m-auto top-[20%] text-center left-0 right-0'>
                <p className='lg:text-2xl'>SputniX has been delivering cargo to and from the International Space Station since 2012, and in 2020 SputniX began transporting people to the orbiting laboratory under NASA’s Commercial Crew Program.</p>
            </div>
        </div>
        <CommonPage title='CARGO MISSIONS' image='	https://www.spacex.com/static/images/dragon/refresh/DRAGON_CRS-22_3840x2560_Desktop.webp' />
        <Suit />
    </div>
  )
}

export default Iss
