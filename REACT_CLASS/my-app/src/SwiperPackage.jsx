// Text, SlidePerView 
// Image, SlidePerView, SpaceBetween
// Navigation
// Pagination
// Autoplay
// Loop
// Speed  

// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'

// import 'swiper/css'

// const SwiperPackage = () => {
//   return (
//     <>
//       <Swiper
//         slidesPerView = { 3 }
//       > 
//         <SwiperSlide>1</SwiperSlide>
//         <SwiperSlide>2</SwiperSlide>
//         <SwiperSlide>3</SwiperSlide>
//         <SwiperSlide>4</SwiperSlide>
//       </Swiper>
//     </>
//   )
// }

// export default SwiperPackage 

// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'

// import 'swiper/css'

// const SwiperPackage = () => {
//   return (
//     <>
//       <Swiper 
//         slidesPerView = {4}
//         spaceBetween = {30}
//       >
//         <SwiperSlide>
//           <img src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=" alt="" height='300' width='100%' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt=""  height='300' width='100%' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt=""  height='300' width='100%' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt=""  height='300' width='100%' />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   )
// }

// export default SwiperPackage


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperPackage = () => {
  return (
    <>
      <Swiper 
        slidesPerView = {2}
        spaceBetween = {30}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{clickable : true}}
        autoplay={{delay : 2000}}
        loop={true}
        speed={2000}
      >
        <SwiperSlide>
          <img src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=" alt="" height='300' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt=""  height='300' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt=""  height='300' width='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt=""  height='300' width='100%' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperPackage

// routes

// Pages Folder

// home page
// about page
// contact page
// faq page
// shop page
// cart page 
// product page
// error page