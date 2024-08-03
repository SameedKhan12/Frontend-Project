import React from "react";
import { useEffect, useState } from "react";
import Next from "./icon/Next.jsx";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import useIsMobile from "./useIsMobile";
import useIsLaptop from "./useIsLaptop.jsx";

const Slider = () => {
  // ${
  //   isNext ? "opacity-100 w-[319px] h-[622px]" : "opacity-50 w-[245px] h-[532px]"
  // }
  const [a, setA] = React.useState(0);
  const isMobile = useIsMobile();
  const isLaptop = useIsLaptop()
  return (
    <>
      <div className="flex items-center relative sm:mt-[60px] mt-10">
        <button data-mob={isLaptop} className="data-[mob=true]:hidden prev absolute z-10 left-0 w-[84px] h-[84px] rounded-full rotate-180 flex items-center justify-center bg-royal-blue -ml-3">
          <Next className="w-[50px] h-[50px] text-white" />
        </button>
        <Swiper
          // onSlideChange={()=>setA(a===4?0:a+1)}
          onSlideNextTransitionStart={() => setA(a === 4 ? 0 : a + 1)}
          onSlidePrevTransitionStart={() => setA(a === 0 ? 4 : a - 1)}
          modules={[Navigation, Scrollbar, A11y,FreeMode]}
          spaceBetween={5}
          // slidesPerView={isMobile ? 1:3}
          slidesPerView={isMobile? 1 : 3}
          FreeMode={isLaptop}
          navigation={!isLaptop?{ nextEl: ".next", prevEl: ".prev" }:false}
          loop={true}
          //   scrollbar={{ draggable: true }}
          // onSwiper={}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            {({ isNext }) => (
              <div className="flex justify-center items-center h-[622px]">
                <img
                  data-next={isNext}
                  className={` transition-all w-[227px] h-[444px]
                sm:data-[next=true]:opacity-100  sm:data-[next=true]:w-[227px] sm:data-[next=true]:h-[444px] sm:opacity-50 sm:w-[163px] sm:h-[354px]
                lg:data-[next=true]:opacity-100  lg:data-[next=true]:w-[319px] lg:data-[next=true]:h-[622px] lg:opacity-50 lg:w-[245px] lg:h-[532px]
                
                `}
                  src="/m0.png"
                  alt=""
                />
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isNext }) => (
              <div className="flex justify-center  items-center h-[622px]">
                <img
                  data-next={isNext}
                  className={` transition-all w-[227px] h-[444px]
                sm:data-[next=true]:opacity-100  sm:data-[next=true]:w-[227px] sm:data-[next=true]:h-[444px] sm:opacity-50 sm:w-[163px] sm:h-[354px]
                lg:data-[next=true]:opacity-100  lg:data-[next=true]:w-[319px] lg:data-[next=true]:h-[622px] lg:opacity-50 lg:w-[245px] lg:h-[532px]
                
                `}
                  src="/m1.png"
                  alt=""
                />
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isNext }) => (
              <div className="flex justify-center  items-center h-[622px]">
                <img
                  data-next={isNext}
                  className={` transition-all w-[227px] h-[444px]
                sm:data-[next=true]:opacity-100  sm:data-[next=true]:w-[227px] sm:data-[next=true]:h-[444px] sm:opacity-50 sm:w-[163px] sm:h-[354px]
                lg:data-[next=true]:opacity-100  lg:data-[next=true]:w-[319px] lg:data-[next=true]:h-[622px] lg:opacity-50 lg:w-[245px] lg:h-[532px]
                
                `}
                  src="/m2.png"
                  alt=""
                />
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isNext }) => (
              <div className="flex justify-center  items-center h-[622px]">
                <img
                  data-next={isNext}
                  className={` transition-all w-[227px] h-[444px]
                sm:data-[next=true]:opacity-100  sm:data-[next=true]:w-[227px] sm:data-[next=true]:h-[444px] sm:opacity-50 sm:w-[163px] sm:h-[354px]
                lg:data-[next=true]:opacity-100  lg:data-[next=true]:w-[319px] lg:data-[next=true]:h-[622px] lg:opacity-50 lg:w-[245px] lg:h-[532px]
                
                `}
                  src="/m3.png"
                  alt=""
                />
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isNext }) => (
              <div className="flex justify-center  items-center h-[622px]">
                <img
                  data-next={isNext}
                  className={` transition-all w-[227px] h-[444px]
                sm:data-[next=true]:opacity-100  sm:data-[next=true]:w-[227px] sm:data-[next=true]:h-[444px] sm:opacity-50 sm:w-[163px] sm:h-[354px]
                lg:data-[next=true]:opacity-100  lg:data-[next=true]:w-[319px] lg:data-[next=true]:h-[622px] lg:opacity-50 lg:w-[245px] lg:h-[532px]
                
                `}
                  src="/m4.png"
                  alt=""
                />
              </div>
            )}
          </SwiperSlide>
        </Swiper>
        <button data-mob={isLaptop} className="data-[mob=true]:hidden next absolute z-10 right-0 w-[84px] h-[84px] rounded-full  flex items-center justify-center bg-royal-blue -mr-3">
          <Next className="w-[50px] h-[50px] text-white" />
        </button>
      </div>
      <div className="flex justify-center mt-[42px] sm:mt-[62px] lg:mt-[42px]">
        <span className="flex gap-4">
          <span
            data-page={a === 0}
            className="p-[4px]  flex justify-center items-center rounded-full border data-[page=true]:border-royal-blue"
          >
            <div className="bg-royal-blue w-[10px] h-[10px] rounded"></div>
          </span>
          <span
            data-page={a === 1}
            className="p-[4px]  flex justify-center items-center rounded-full border data-[page=true]:border-royal-blue"
          >
            <div className="bg-royal-blue w-[10px] h-[10px] rounded"></div>
          </span>
          <span
            data-page={a === 2}
            className="p-[4px]  flex justify-center items-center rounded-full border data-[page=true]:border-royal-blue"
          >
            <div className="bg-royal-blue w-[10px] h-[10px] rounded"></div>
          </span>
          <span
            data-page={a === 3}
            className="p-[4px]  flex justify-center items-center rounded-full border data-[page=true]:border-royal-blue"
          >
            <div className="bg-royal-blue w-[10px] h-[10px] rounded"></div>
          </span>
          <span
            data-page={a === 4}
            className="p-[4px] flex justify-center items-center rounded-full border data-[page=true]:border-royal-blue"
          >
            <div className="bg-royal-blue w-[10px] h-[10px] rounded"></div>
          </span>
        </span>
      </div>
    </>
  );
};

export default Slider;
