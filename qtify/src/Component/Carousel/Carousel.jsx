import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
// import "swiper/css;
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return <></>;
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        // style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPreview={"auto"}
        slidesPerView={3}
        // navigation={true}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        <div style={{ display: "flex" }}>
          {data.map((ele) => (
            <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
