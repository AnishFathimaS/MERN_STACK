// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Swiper_Package = () => {
  return (
    <Swiper
      // spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt="" height='600' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" alt="" height='600' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" height='600' width='100%'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://st.depositphotos.com/1010305/4589/i/450/depositphotos_45893775-stock-photo-sakura-flowers-blooming-beautiful-pink.jpg" alt="" height='600' width='100%'/>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swiper_Package