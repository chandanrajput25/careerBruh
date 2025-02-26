"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ExpertCard from "./ExpertCard";

const ExperSlider = () => {
  const expert = [
    {
      thumbnail: "/images/experts/mentor1.jpg",
      name: "Dr. John Doe",
      verified: "",
      experience: "8",
      companyThumbnail: "/images/Homepage/company/company1.svg",
      education: [
        {
          name: "Bca",
        },
        {
          name: "Mba",
        },
      ],
    },
    {
      thumbnail: "/images/experts/mentor2.jpg",
      name: "Dr. John Doe",
      verified: "",
      experience: "8",
      companyThumbnail: "/images/Homepage/company/company1.svg",
      education: [
        {
          name: "BBA",
        },
        {
          name: "Bcom",
        },
      ],
    },
    {
      thumbnail: "/images/experts/mentor3.jpg",
      name: "Dr. John Doe",
      verified: "",
      experience: "8",
      companyThumbnail: "/images/Homepage/company/company1.svg",
      education: [
        {
          name: "Bca",
        },
        {
          name: "Mba",
        },
      ],
    },
    {
      thumbnail: "/images/experts/mentor4.jpg",
      name: "Dr. John Doe",
      verified: "",
      experience: "8",
      companyThumbnail: "/images/Homepage/company/company1.svg",
      education: [
        {
          name: "Bca",
        },
        {
          name: "Mba",
        },
      ],
    },
    {
      thumbnail: "/images/experts/mentor1.jpg",
      name: "Dr. John Doe",
      verified: "",
      experience: "8",
      companyThumbnail: "/images/Homepage/company/company1.svg",
      education: [
        {
          name: "Bca",
        },
        {
          name: "Mba",
        },
      ],
    },
    {
      thumbnail: "/images/experts/mentor2.jpg",
      name: "Dr. John Doe",
      verified: "",
      experience: "8",
      companyThumbnail: "/images/Homepage/company/company1.svg",
      education: [
        {
          name: "Bca",
        },
        {
          name: "Mba",
        },
      ],
    },
    {
      thumbnail: "/images/experts/mentor3.jpg",
      name: "Dr. John Doe",
      verified: "",
      experience: "8",
      companyThumbnail: "/images/Homepage/company/company1.svg",
      education: [
        {
          name: "Bca",
        },
        {
          name: "Mba",
        },
      ],
    },
  ];

  return (
    <>
      <div className="mb-4 d-flex">
        <Swiper
          slidesPerView={5}
          spaceBetween={22}
          speed={20000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
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
            // 1336: {
            //   slidesPerView: 3,
            // },
            // 1920: {
            //   slidesPerView: 3,
            // },
            // 2560: {
            //   slidesPerView: 4,
            // },
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {expert.map((data, index) => (
            <SwiperSlide key={index}>
              <ExpertCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ExperSlider;
