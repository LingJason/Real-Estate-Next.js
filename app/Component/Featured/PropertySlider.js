import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function PropertySlider(props) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      loop={true}
      loopFillGroupWithBlank={true}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      pagination={{ dynamicBullets: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {/* {props.featuredProperties.map((property) => (
        <SwiperSlide key={property.id}>
          <PropertyCard {...property} />
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
}

export default PropertySlider;
