import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Yellow from '../../img/Yellow.jpg'
import Capital from '../../img/capital.jpg'
import Kenai from '../../img/kenai.jpg'

const PopularTrip = () => {
  return (
    <div className="popularTrip">
      <div className="populartriptext">
        <h3>Porular group trips</h3>
        <h3 className="seeall">See all</h3>
      </div>
      <div className="Container py-4 px-4 justify-content-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={2.3}
          spaceBetween={15}
        >
          <div >
            <SwiperSlide className="tripslider">
             <img src={Yellow} height={100} width={180}  className="trippic"/>
             <h5>Yellowstone National Park</h5>
             <p>Salt Lake City,USA</p>
            </SwiperSlide>
            <SwiperSlide className="tripslider">
             <img src={Capital} height={100} width={180}  className="trippic"/>
             <h5>Capital Reef National Park</h5>
             <p>Grand canyon,USA</p>
            </SwiperSlide> <SwiperSlide className="tripslider">
             <img src={Kenai} height={100} width={180}  className="trippic"/>
             <h5>Kenai National Park</h5>
             <p>Salt Lake City,USA</p>
          </SwiperSlide>
            

           
            
          </div>
        </Swiper>
      </div>

      
    </div>
  );
};

export default PopularTrip;
