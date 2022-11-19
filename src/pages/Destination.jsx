import React, { useEffect } from "react";
import DestinationPicker from "../components/DestinationPicker";
import Destinations from "../components/Destinations";
import DestinationSlider from "../components/DestinationSlider";
import PageHero from "../components/PageHero";
import marsVid from '../data/Assets/mars.mp4'
import RocketSlider from '../components/RocketSlider'


const Destination = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <div className="bg-black">
        <PageHero
          title="Explore the cosmos"
          subtitle="Reach beyond the stars"
          image="https://www.spacex.com/static/images/backgrounds-2021/hls-resized-2.webp"
        />
        <DestinationPicker />
        <Destinations />
        {/* mars break */}
        <section className="relative !h-screen">
          <video
            className="z-[0] w-full brightness-75 absolute h-full object-cover "
            autoPlay
            loop
            muted
          >
            <source src={marsVid} />
          </video>{" "}
          <div className="relative px-8 lg:px-[20%] lg:w-[60%]  md:w-2/3 pt-40 lg:pt-60 text-white">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Taking Humans to space
            </h2>
            <p className="text-sm md:text-md pt-2">
            In 2020, Sputnik returned the people's ability to fly to and from the International Space Station, The Moon, Mars, and More by NASA astronauts on the most advanced space vehicles for the first time since 2011. Book your Space Vacation Now!
            </p>
          </div>
        </section>
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
