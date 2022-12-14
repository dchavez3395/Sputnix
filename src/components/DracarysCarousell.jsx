import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Pagination, Navigation, Autoplay} from 'swiper';
import '../data/swiper.css';
import {DracarysCarousellData} from "../data/data"



const DracarysCarousell = () => {
    const [value, setValue] = useState(0)
    const {img} = DracarysCarousellData[value]
  return (
    <div className='text-white'>
    <Swiper 
    className=' heroSlider'
    modules={[Pagination, Navigation, Autoplay]} 
    loop={true}
    autoplay={true}
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
    navigation={true}
    >
    <div>
        {/*Carrousell */}
            <>
            {/* first slide */}

            {DracarysCarousellData.map((item, index) => {
                    const {img} = item;
                    return (
                        <SwiperSlide key={index}>
                          <div className='relative text-white'>
                              <div className='z-[0] h-screen'>
                                  <img src={img} className='w-full h-full object-cover' alt=""  />
                              </div>                
                          </div>
                      </SwiperSlide>
                    )
                })}
            </>
    </div>
    </Swiper>
    </div>
  )
}

export default DracarysCarousell
