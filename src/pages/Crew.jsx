import React, { useEffect } from 'react'
import CommonPage from '../components/CommonPage'
import CrewPicker from '../components/CrewPicker'
import Missions from '../components/missions'
import PageHero from '../components/PageHero'
import Suit from '../components/Suit'

const Crew = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
        <PageHero
          title="Human Spaceflight"
          subtitle="THE WORLD'S FIRST COMMERCIAL INTERPLANETARY SPACE TRAVEL"
          image="https://github.com/dchavez3395/sputnik-v2/blob/main/assets/crew/space-crew.jpg?raw=true"
        />
        <CrewPicker />
        <CommonPage title='FLY WITH NASA ASTRONAUTS' image='https://www.spacex.com/static/images/updates/demo-2_article.webp' />
        <Missions />
        <Suit />
    </div>
  )
}

export default Crew
