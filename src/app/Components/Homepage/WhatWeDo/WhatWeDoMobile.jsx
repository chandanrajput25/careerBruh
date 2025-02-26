"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import MainHeading from "../../Global/Headings/MainHeading/MainHeading";

const WhatWeDoMobile = ({ We_do, Other_do }) => {
  return (
    <div className="bg_gradient py-5">
      <MainHeading
        title="Hikes Vs Other Pplatform"
        className="text-center text-primary"
      />
      <div className="mt-4 mb-4 d-flex px-4">
        <Swiper
          slidesPerView={5}
          spaceBetween={22}
          loop={false}
          navigation={false}
          pagination={false}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1336: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 3,
            },
            2560: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation, Pagination]}
        >
          {We_do.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card border-radius-15 p-3 overflow-hidden h-100">
                <div className="h-50">
                  {" "}
                  <div className="fw-bold mb-1">{item.title}</div>
                  <div className="fs-14">{item.description}</div>
                </div>
                <div className="position-relative my-2">
                  <hr />
                  <span className="position-absolute top-50 start-50 translate-middle">
                    <Image
                      src={"/images/icons/vs.svg"}
                      width={35}
                      height={35}
                      alt="vs icon"
                    />
                  </span>
                </div>

                <div className="h-50">
                  <div className="fw-bold mb-1">{Other_do[index].title}</div>
                  <div className="fs-14">{Other_do[index].description}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhatWeDoMobile;
