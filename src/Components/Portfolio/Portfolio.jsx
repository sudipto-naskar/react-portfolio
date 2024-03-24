import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Dex from "../../img/Dex.jpg"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './swiper.css'
import { themeContext } from '../../Context';
import { useContext } from "react";

const Portfolio = () => {

    const theme  = useContext(themeContext);

    const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 350,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        pagination={{clickable:true}}
        navigation={true}
        autoplay={{delay: 2500}}
        loop={true}
        className='portfolio-swiper'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Dex} alt="" />
            </SwiperSlide>

        </Swiper>

        {/* mobile slider */}
        <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        pagination={{clickable:true}}
        navigation={true}
        autoplay={{delay: 2500}}
        loop={true}
        className='mobile-swiper'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Dex} alt="" />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio