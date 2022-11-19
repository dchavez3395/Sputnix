import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation, Autoplay} from 'swiper';
import '../data/swiper.css';
import { destinationSlider } from '../data/data'


const DestinationSlider = () => {
  return (
    <>
    <Swiper 
    className=' heroSlider'
    modules={[Pagination, Navigation, Autoplay]} 
    autoplay={false}
    loop={true}
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
    navigation={true}
    >
    <div>
        {/*Carrousell */}
        {destinationSlider.map((slide, index) => {
          const {title, background, paragraph} = slide;
          return (
            <SwiperSlide key={index}>
              <div>
                <div className='py-8 bg-black'>
                <div className='z-0 h-[30vh] md:h-[50vh]'>
                    <img src={background} className='w-full h-full object-cover' alt="" />
                </div>
              {/* rocket info */}
          <div className="md:absolute w-full py-8 px-8 md:w-3/5 lg:w-2/5 2xl:w-1/6 z-[10000] md:px-12 lg:px-0 text-white text-left top-[10%]  lg:top-[20%] xl:top-[15%] 2xl:top-[10%] md:right-[40%] lg:right-0  lg:left-[10%] 2xl:left-[20%]">
            <h3 className='md:text-xl' data-aos='fade-left' data-aos-delay='400'>MOTHERSHIP USES</h3>
            <h1 className="text-2xl md:text-[40px] 2xl:text-5xl  font-medium uppercase" data-aos='fade-left' data-aos-delay='600'>{title}</h1>
            <p className='text-sm  pt-2 block w-full lg:text-[16px]' data-aos='fade-left' data-aos-delay='800'>{paragraph}</p>
            {/* table */}
          </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
    </div>
    </Swiper>
    </>
  )
}

export default DestinationSlider