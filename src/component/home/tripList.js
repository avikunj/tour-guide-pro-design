import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Yellow from "../../img/Yellow.jpg";
import Capital from "../../img/capital.jpg";
import Kenai from "../../img/kenai.jpg";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import StarIcon from '@material-ui/icons/Star';
import { Link } from "react-router-dom";
const TripList = () => {
  return (
    <div className="Triplist">
      <div className="triplisttext">
        <h3>List</h3>
       
      </div>
      <div className="Container py-4 px-4 justify-content-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={1.1}
          spaceBetween={15}
        >
          <div>
            <SwiperSlide className="listslider">
                <Link to="/view" className="link">

              <img src={Kenai} height={150} width={400}className="listpic" />
              <h5>Kenai Fjords National Park</h5>
              <h1>$333</h1>
                </Link>
              
                
              

              
            </SwiperSlide>
            <SwiperSlide className="listslider">
              <img src={Yellow} height={150} width={400}className="listpic" />
              <h5>Kenai Fjords National Park</h5>
              <h1>$333</h1>
            </SwiperSlide>
            <SwiperSlide className="listslider">
              <img src={Capital} height={150} width={400}className="listpic" />
              <h5>Kenai Fjords National Park</h5>
              <h1>$333</h1>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TripList;
