import VostokOvEn from "../components/VostokOvEn"
import VostokTable from "../components/VostokTable"
import VeneraTable from "../components/VeneraTable"




export const rocketSlider =[
    {
        id: 1,
        image: "https://www.spacex.com/media/WebsiteF9Fairings_Anim_Render_Desktop.mp4",
        title: "Vostok X",
        first: 'HEIGHT',
        firstData: '70 m',
        firstSpan: '/ 229.6 ft',
        second: 'DIAMETER',
        secondData: '3.7 m',
        secondSpan: '12 ft',
        third: 'MASS',
        thirdData: '549,054 kg',
        thirdSpan: '/ 1,207,920 lb',
        fourth: 'PAYLOAD TO LEO',
        fourthData: '549,054 kg',
        fourthSpan: '/ 1,207,920 lb',
        fifth: 'PAYLOAD TO GTO',
        fifthData: '8,300 kg',
        fifthSpan: '/ 18,300 lb',
        sixth: 'PAYLOAD TO MARS',
        sixthData: '4,020 kg',
        sixthSpan: '/ 8,860 lb',
        href: "/vostok"
    },
    {
        id: 2,
        image: "https://www.spacex.com/media/WebsiteFHFairings_Anim_Render_Desktop.mp4",
        title: "Venera Heavy",
        first: "HEIGHT",
        firstData: '70 m',
        firstSpan: '/ 229.6 ft',
        second: 'WIDTH',
        secondData: '12.2 m',
        secondSpan: '39.9 ft',
        third: 'MASS',
        thirdData: '1,420,788 kg',
        thirdSpan: '/ 3,125,735 lb',
        fourth: 'PAYLOAD TO LEO',
        fourthData: '22,800 kg',
        fourthSpan: '/ 50,265 lb',
        fifth: 'PAYLOAD TO GTO',
        fifthData: '26,700 kg',
        fifthSpan: '/ 58,860 lb',
        sixth: 'PAYLOAD TO MARS	',
        sixthData: '16,800 kg',
        sixthSpan: '/ 37,040 lb',
        href: "/venera-heavy"
    },
    {
        id: 3,
        image: "https://www.spacex.com/media/WebsiteStarshipStack_Anim_Render_Desktop.mp4",
        title: "Mothership",
        first: 'HEIGHT',
        firstData: '120 m',
        firstSpan: '/ 394 ft',
        second: 'DIAMETER',
        secondData: '9 m',
        secondSpan: '/ 30 ft',
        third: 'PAYLOAD TO LEO',
        thirdData: '100+ t',
        thirdSpan: '/ 220+ klb',
        fourth: 'PAYLOAD MASS',
        fourthData: '549,054 kg',
        fourthSpan: '/ 1,207,920 lb',
        fifth: 'PAYLOAD TO GTO',
        fifthData: '8,300 kg',
        fifthSpan: '/ 18,300 lb',
        sixth: 'PAYLOAD TO MARS',
        sixthData: '4,020 kg',
        sixthSpan: '/ 8,860 lb',
        href: "/mothership"
    },
    {
        id: 4,
        image: "https://www.spacex.com/media/DragonTrunk_Animation_Render_Desktop.mp4",
        title: "Dracarys X",
        first: 'HEIGHT',
        firstData: '8.1 m',
        firstSpan: '/ 26.7 ft',
        second: 'DIAMETER',
        secondData: '12.2 m',
        secondSpan: '39.9 ft',
        third: 'CAPSULE VOLUME',
        thirdData: '1,420,788 kg',
        thirdSpan: '/ 3,125,735 lb',   
        fourth: 'TRUNK VOLUME',
        fourthData: '37 m³',
        fourthSpan: '/  1300 ft³',
        fifth: 'LAUNCH PAYLOAD MASS',
        fifthData: '6,000 kg',
        fifthSpan: '/ 13,228 lb',
        sixth: 'RETURN PAYLOAD MASS	',
        sixthData: '3,000 kg',
        sixthSpan: '/ 6,614 lb',
        href: "/dracarys"
    }
]


export const destinationSlider = [
    {
        id: "1",
        background: "https://www.spacex.com/static/images/starship/CAPABILITIES__SATELLITE.gif",
        title: 'SELF-DRIVING PODS',
        paragraph: 'Mothership is designed to deliver satellites further and at a lower marginal cost per launch than our current Falcon vehicles. With a payload compartment larger than any fairing currently in operation or development, Mothership creates possibilities for new missions, including space telescopes even larger than the James Webb.'
    },
    {
        id: "2",
        background: "	https://www.spacex.com/static/images/starship/CAPABILITIES__ISS.gif",
        title: 'SPACE STATION',
        paragraph: 'Mothership can deliver both cargo and people to and from the ISS. Mothership’s fairing provides significant capacity for in-space activities. The aft cargo containers can also host a variety of payloads.        '
    },
    {
        id: "3",
        background: "https://www.spacex.com/static/images/starship/CAPABILITIES__MOON.gif",
        title: 'MOON MISSIONS',
        paragraph: 'Developing bases to support future space exploration requires the transport of large amounts of cargo to the Moon for research and human spaceflight development. Mothership is designed to carry these building blocks.'
    },
    {
        id: "4",
        background: "https://www.spacex.com/static/images/starship/CAPABILITIES__INTERPLANETARY.gif",
        title: 'AI CONTROLLED LANDING',
        paragraph: 'Mothership is designed to deliver satellites further and at a lower marginal cost per launch than our current Falcon vehicles. With a payload compartment larger than any fairing currently in operation or development, Mothership creates possibilities for new missions, including space telescopes even larger than the James Webb.'
    },
]

// export const vostokSlider = [
//     {
//         key: "1",
//         title: "OVERVIEW",
//         bottom: <VostokTable/>,
//         image: "./assets/Vostok/Vostok-still.webp"
//       },
// ]


export const vostokSliderButtons = [
      {
        key: "1",
        title: "FIRST STAGE",
        button: "OVERVIEW",
        bottom: <VostokOvEn />,
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/Vostok-02.webp",
        bottom1: "Vostek 9’s first stage incorporates nine Rasputin engines and aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant.",
        bottom2: "Vostek 9 generates more than 1.7 million pounds of thrust at sea level."
      },
      {
        key: "2",
        button: "ENGINES",
        title: "PAYLOAD",
        bottom1: "The nine Rasputin engines on the first stage are gradually throttled near the end of first-stage flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel. These engines are also used to reorient the first stage prior to reentry and to decelerate the vehicle for landing.",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/engine-bottom.webp",
        bottom2: <VostokTable/>
      },
      {
        key: "3",
        button: "LANDING LEGS",
        title: "FIRST STAGE",
        bottom1: "The Vostok 9 first stage is equipped with four landing legs made of state-of-the-art carbon fiber with aluminum honeycomb.",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/body-legs.webp",
        bottom2: "Placed symmetrically around the base of the rocket, they are stowed at the base of the vehicle and deploy just prior to landing."
   }
]

export const payload = [
    {
      key: "1",
      bottom1: "Made of a carbon composite material, the fairing protects satellites on their way to orbit. The fairing is jettisoned approximately 3 minutes into flight, and  Sputnik continues to recover fairings for reuse on future missions.",
      button: "FAIRING",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/fairing.webp",
      height: "13.1 m",
      heightSpan: "/ 43 ft",
      diameter: '5.2 m',
      diameterSpan: " / 17.1 ft"
    },
    {
      key: "2",
      button: "DRACARYS",
      bottom1: "Dracarys is capable of carrying up to 7 people and/or cargo in the spacecraft’s pressurized section. In addition, Dracarys can carry cargo in the spacecraft’s unpressurized trunk, which can also accommodate secondary payloads.",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/dracarys-head.webp",
      height: "8.1 m",
      heightSpan: "/ 26.6 ft",
      diameter: '3.7 m',
      diameterSpan: " / 12 ft"
    },
]

export const engines = [
    {
      key: "1",
      bottom1: "Rasputin is a family of rocket engines developed by Sputnik for use on its Vostok 1, Vostok X, and Venera Heavy launch vehicles. Rasputin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.",
      button: "SEA LEVEL",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/engine-01.webp",
      height: "13.1 m",
      heightSpan: "/ 43 ft",
      diameter: '5.2 m',
      diameterSpan: " / 17.1 ft",
      thrust: "845 kN ",
      thrustSpan: '/ 190,000 lbf'
    },
    {
      key: "2",
      button: "VACCUMM",
      bottom1: "Rasputin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/engine-02.webp",
      height: "LOX",
      heightSpan: "/ RP-1",
      diameter: '981 kN',
      diameterSpan: "/ 220,500 lbf",
      thrust: "981 kN ",
      thrustSpan: '/ 220,500 lbf'
    },
]

export const VostokCarousell = [
    {
      key: "1",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/F9_7.webp"
    },
    {
      key: "2",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/F9_4.webp"
    },
    {
        key: "3",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/F9_3.webp"
      },
      {
        key: "4",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/vostok-01.webp"
      },
      {
        key: "5",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/Vostok-lift.webp"
      },
      {
        key: "6",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/F9_10.webp"
      },
      {
          key: "7",
          img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/f9_video.webp"
        },
        {
          key: "8",
          img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Vostok/F9_9.webp"
        },
]


export const veneraSliderButtons = [
  {
    key: "1",
    title: "FIRST STAGE",
    button: "OVERVIEW",
    bottom: <VostokOvEn />,
    img: "https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHS1_Render_Desktop.webp",
    bottom1: "Three cores make up the first stage of Falcon Heavy. The side cores, or boosters, are connected on the nosecone, the interstage, and on the octaweb. Shortly after liftoff the center core engines are throttled down. After the side cores separate, the center core engines throttle back up to full thrust.",
    bottom2: "Venera Heavy generates more than 1.7 million pounds of thrust at sea level."
  },
  {
    key: "2",
    button: "ENGINES",
    title: "PAYLOAD",
    bottom1: "The nine Merlin engines on the first stage are gradually throttled near the end of first-stage flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel. These engines are also used to reorient the first stage prior to reentry and to decelerate the vehicle for landing.",
    img: "https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHEngines_Render_Desktop.webp",
    bottom2: <VeneraTable />
  },
  {
    key: "3",
    button: "LANDING LEGS",
    title: "FIRST STAGE",
    bottom1: "The Venera Heavy first stage is equipped with four landing legs made of state-of-the-art carbon fiber with aluminum honeycomb.",
    img: "https://www.spacex.com/static/images/falcon-heavy/desktop/WebsiteFHS1Legs_Render_Desktop.webp",
    bottom2: "All 12 landing legs are stowed along the side of each booster until just prior to landing."
}
]

export const VeneraCarousellData = [
  {
    key: "1",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Venera/FH_1.webp"
  },
  {
    key: "2",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Venera/FH_2.webp"
  },
  {
      key: "3",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Venera/FH_3.webp"
    },
    {
      key: "4",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Venera/FH_5.webp"
    },
    {
      key: "5",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Venera/FH_6.webp"
    },
    {
      key: "6",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Venera/FH_9.webp"
    },
    {
        key: "7",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Venera/FH_8.webp"
      },
      {
        key: "8",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Venera/FH_7.webp"
      },
]

export const mothershipPayload = [
  {
    key: "1",
    button: "CREW",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/WebsiteStarshipShowcase_Render_Desktop.webp",
  },
  {
    key: "2",
    button: "CARGO",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/WebsiteStarshipShowcaseCargo_Render_Desktop.webp",
  },
]

export const MothershipCarousellData = [
  {
    key: "1",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/mothership-saturn.webp"
  },
  {
    key: "2",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/concert.webp"
  },
  {
      key: "3",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/mothership-thrust.webp"
    },
    {
      key: "4",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/STARSHIP_SN15_Desktop.webp"
    },
    {
      key: "5",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/starship_video.webp"
    },
    {
      key: "6",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/STR_10.webp"
    },
    {
        key: "7",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/mothership-spiral.webp"
      },
      {
        key: "8",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/mars-colony.webp"
      },
      {
        key: "9",
        img: "https://github.com/dchavez3395/sputnik-v2/blob/main/assets/Mothership/PolarisAnnouncement_Starship_Desktop.jpg?raw=true"
      },
      {
        key: "10",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Mothership/mothership-exhaust.webp"
      },
]

export const dracarysSliderButtons = [
  {
    key: "1",
    title: "FIRST STAGE",
    button: "OVERVIEW",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Dracarys/Dragon_Render_Desktop.webp",
    bottom1: "The Dracarys capsule, also known as the pressurized section, allows for the transport of people as well as environmentally sensitive cargo. Dracarys is equipped with Drako thrusters that allow Dracarys to maneuver while on orbit and 8 SuperDrakos that power the spacecraft’s launch escape system.",
    first: "VOLUME",
    firstData: "9.3 m³",
    firstSpan: "  / 328 ft³",
  },

  {
    key: "2",
    button: "LAUNCH",
    title: "PAYLOAD",
    bottom1: "The nine Merlin engines on the first stage are gradually throttled near the end of first-stage flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel. These engines are also used to reorient the first stage prior to reentry and to decelerate the vehicle for landing.",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Dracarys/DragonEscape_Desktop.webp",
    first: "NUMBER OF ENGINES	",
    firstData: "8",
    second: "ESCAPE THRUST",
    secondData: "71 kN",
    secondSpan: " / 16,000 lbf"
  },

  {
    key: "3",
    button: "ALTITUDE CONTROL",
    title: "FIRST STAGE",
    bottom1: "The Venera Heavy first stage is equipped with four landing legs made of state-of-the-art carbon fiber with aluminum honeycomb.",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Dracarys/DragonDraco_Desktop.webp",
    first: "NUMBER OF ENGINES	",
    firstData: "16",
    second: "THRUST IN VACUUM	",
    secondData: "400N",
    secondSpan: " / 90 lbf"
  }

]

export const dracos = [
  {
    key: "1",
    bottom1: "The Dracarys spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.",
    button: "DRACO",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Dracarys/Draco.webp",
    first: "NUMBER OF ENGINES",
    firstData: "16",
    second: "THRUST IN VACUUM	",
    secondData: '5.2 m',
    diameterSpan: " / 17.1 ft",
    secondData: "845 kN ",
    secondSpan: '/ 190,000 lbf'
  },
  {
    key: "2",
    button: "SUPERDRACO",
    bottom1: "An array of eight SuperDraco engines provide fault-tolerant propulsion for Dracary's launch escape system. In the unlikely event of an emergency, the eight SuperDraco engines can power Dracary's half a mile away from the launch vehicle in less than eight seconds.",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Dracarys/SuperDraco.webp",
    first: "NUMBER OF ENGINES",
    firstData: "8",
    second: "ESCAPE THRUST",
    secondData: '981 kN',
    diameterSpan: "/ 220,500 lbf",
    secondData: "981 kN ",
    secondSpan: '/ 220,500 lbf'
  },
]

export const DracarysCarousellData = [
  {
    key: "1",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Dracarys/DRAGON_CRS-22_3840x2560_Desktop.webp"
  },
  {
    key: "2",
    img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Dracarys/DRAGON_DM2_LC39A_3840x2560.webp"
  },
  {
      key: "3",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Dracarys/DRAGON_DRAGON%2BF9_3840x2560.webp"
    },
    {
      key: "4",
      img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Dracarys/DR_6.webp"
    },
    {
      key: "5",
      img: "https://github.com/dchavez3395/sputnik-v2/blob/main/assets/Dracarys/capsule-landscape.jpg?raw=true"
    },
    {
      key: "6",
      img: "https://github.com/dchavez3395/sputnik-v2/blob/main/assets/Dracarys/Launches_Dragon_Docking_ISS_Desktop.jpg?raw=true"
    },
    {
        key: "7",
        img: "https://raw.githubusercontent.com/dchavez3395/sputnik-v2/main/assets/Dracarys/DRAGON_DRAGON%2BISS_3840x2025.webp"
      },
]


export const homeBanner = [
  {
    key: "1",
    img: "https://www.spacex.com/static/images/rideshare/billing_icon.png",
    title: "PAY AS LOW AS 1 BTC",
    paragraph: "1 BTC for 200kg to SSO with additional mass at 1.5k BTC/kg."
  },
  {
    key: "2",
    img: "https://www.spacex.com/static/images/rideshare/calendar_icon.png",
    title: "SCHEDULE CERTAINTY",
    paragraph: "Frequent launches for SSO missions approximately every 4 months."
  },
  {
      key: "3",
      img: "https://www.spacex.com/static/images/rideshare/contract_icon.png",
      title: "CONTRACT FLEXIBILITY",
      paragraph: "Apply 100% of monies paid toward the cost of rebooking on a future mission."
    },
]


export const destinations = [
  {
    key: "1",
    img: "https://assets.stickpng.com/images/580b585b2edbce24c47b270b.png",
    name: "Moon",
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: '384,400 km',
    travel: '3 days'
  },
  {
    key: "2",
    img: "https://i.pinimg.com/originals/f8/d6/88/f8d688b8b4c45922162154b35763e04c.png",
    name: "Mars",
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: '225 mil. km',
    travel: '9 months'
  },
  {
    key: "3",
    img: "https://github.com/dchavez3395/sputnik-v2/blob/main/assets/destination/europa.png?raw=true",
    name: "Europa",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: '628 mil. km',
    travel: '3 years'
    },
    {
      key: "4",
      img: "https://github.com/dchavez3395/sputnik-v2/blob/main/assets/destination/titan.png?raw=true",
      name: "Titan",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: '1.6 bil. km',
      travel: '7 years'
      }
]

export const crew = [
  {
    key: "1",
    img: "https://github.com/dchavez3395/sputnik-v2/blob/main/assets/crew/image-douglas-hurley.png?raw=true",
    name: "Douglas Hurley",
    role: "Commander",
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
  },
  {
    key: "2",
    img: "https://github.com/dchavez3395/sputnik-v2/blob/main/assets/crew/image-mark-shuttleworth.png?raw=true",
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist',
  },
  {
    key: "3",
    img: "https://github.com/dchavez3395/sputnik-v2/blob/main/assets/crew/image-victor-glover.png?raw=true",
    name: "Victor Glover",
    role: "Pilot",
    bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
      key: "4",
      img: "https://github.com/dchavez3395/sputnik-v2/blob/main/assets/crew/image-anousheh-ansari.png?raw=true",
      name: "Anousheh Ansari",
      role: "Flight Engineer",
      bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      },
]

export const missions = [
  {
    id: "1",
    title: "Space Station",
    first: "ORBIT FREQUENCY",
    firstData: 'Every 30 minutes',
    second: "FLIGHT DURATION",
    secondData: "3-6 days",
    third: "ALTITUDE",
    thirdData: "300-500 km",
    fourth: "SEATING",
    fourthData: "2-4 passengers",
    fifth: "CUPOLA",
    fifthData: "46” diameter / 360° views",
    sixth: "CARGO / SCIENCE",
    sixthData: "Up to 192 kg cargo Power / Data / Comm available",
  },
  {
    id: "2",
    title: "Moon",
    first: "ORBIT FREQUENCY",
    firstData: 'Every 90 minutes',
    second: "MISSION DURATION",
    secondData: "10 days",
    third: "ALTITUDE",
    thirdData: "~400 km",
    fourth: "SEATING",
    fourthData: "4 passengers",
    fifth: "CARGO / SCIENCE",
    fifthData: "Up to 192 kg cargo Power / Data / Comm available",
    sixth: "CUPOLA",
    sixthData: "76” diameter / 360° views",
  },
  {
    id: "3",
    title: "Mars",
    first: "FLIGHT DURATION",
    firstData: '7 days',
    second: "ALTITUDE",
    secondData: "384,400 km from Earth",
    third: "SEATING",
    thirdData: "Up to 12 passengers, with private quarters",
    fourth: "VOLUME",
    fourthData: "1,000 m3 Nosecone area available for entertainment, manufacturing, and scientific opportunities",
    fifth: "CARGO / SCIENCE",
    fifthData: "Up to 192 kg cargo Power / Data / Comm available",
    sixth: "CUPOLA",
    sixthData: "109” diameter / 360° views",
  },
  {
    id: "4",
    title: "Venus",
    first: "DAY LENGTH",
    firstData: '24 hrs 37 min',
    second: "FORCE OF GRAVITY",
    secondData: "38% of Earth",
    third: "AVG DISTANCE FROM EARTH",
    thirdData: "225 Mkm / 140 Mmi",
    fourth: "SEATING",
    fourthData: "Up to 25 passengers, with private quarters",
    fifth: "PAYLOAD TO GTO",
    fifthData: "8,300 kg",
    sixth: "CUPOLA",
    sixthData: "160” diameter / 360° views",
  },
]

export const landingData = [
  {
    id: "1",
    button: "DRONESHIP",
    image: "https://www.spacex.com/static/images/infographics/F9_AUTONOMOUS_DRONESHIP_DESKTOP.jpg",
  },
  {
    id: "2",
    button: "LANDING ZONE",
    image: "https://www.spacex.com/static/images/infographics/F9_LANDING_ZONE_MOBILE.jpg",
  },
]