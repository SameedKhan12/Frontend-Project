import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css'
// import required modules
import { EffectCards } from 'swiper/modules';

const Swiper2 = () => {
  return (
    <div className='overflow-clip'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[90%] sm:w-[514px] lg:w-[771px] overflow-hidden mt-[32px] sm:mt-[40px] lg:mt-[60px]"
      >
        <SwiperSlide className="">
            <div className="bg-white py-[40px] px-[18px] sm:px-[32px] lg:px-[62px] rounded-[10px] text-black w-[90%] sm:w-fit mx-auto">
            <img className="w-[96px] h-[96px] mx-auto" src="/Profile1.png" alt="" />
            <h5 className="text-center uppercase font-semibold lg:font-bold text-2xl lg:text-3xl mt-3 lg:mt-5 w-fit mx-auto">Ann Lubin</h5>
            <h6 className="lg:text-xl lg:font-semibold text-center uppercase">CO-FOUNDER</h6>
            <p className="w-[95%] sm:w-[450px] lg:w-[647px] text-center text-[#6C6C72] mx-auto mt-[18px] lg:mt-[8px] line-clamp-3 sm:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className="bg-white py-[40px] px-[18px] sm:px-[32px] lg:px-[62px] rounded-[10px] text-black w-[90%] sm:w-fit mx-auto">
            <img className="w-[96px] h-[96px] mx-auto" src="/Profile1.png" alt="" />
            <h5 className="text-center uppercase font-semibold lg:font-bold text-2xl lg:text-3xl mt-3 lg:mt-5 w-fit mx-auto">Ann Lubin</h5>
            <h6 className="lg:text-xl lg:font-semibold text-center uppercase">CO-FOUNDER</h6>
            <p className="w-[95%] sm:w-[450px] lg:w-[647px] text-center text-[#6C6C72] mx-auto mt-[18px] lg:mt-[8px] line-clamp-3 sm:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="">
            <div className="bg-white py-[40px] px-[18px] sm:px-[32px] lg:px-[62px] rounded-[10px] text-black w-[90%] sm:w-fit mx-auto">
            <img className="w-[96px] h-[96px] mx-auto" src="/Profile1.png" alt="" />
            <h5 className="text-center uppercase font-semibold lg:font-bold text-2xl lg:text-3xl mt-3 lg:mt-5 w-fit mx-auto">Ann Lubin</h5>
            <h6 className="lg:text-xl lg:font-semibold text-center uppercase">CO-FOUNDER</h6>
            <p className="w-[95%] sm:w-[450px] lg:w-[647px] text-center text-[#6C6C72] mx-auto mt-[18px] lg:mt-[8px] line-clamp-3 sm:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
            </div>
        </SwiperSlide>
       
        
        
      </Swiper>
    </div>
  )
}

export default Swiper2
