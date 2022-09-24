import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


function DetailsImg({imgList}) {
    return (
        <>
        <Swiper
           cssMode={true}
           loop={true}
           navigation={true}
           pagination={true}
           mousewheel={true}
           keyboard={true}
           modules={[Navigation, Pagination, Mousewheel, Keyboard]}
           className="mySwiper"
        >
            {
                imgList.map( (img,index) => 
                    <SwiperSlide key={index}>
                        <img src={img} alt="Details Image" />
                    </SwiperSlide>
                )
            }
        </Swiper>
      </>
    );
}

export default DetailsImg;