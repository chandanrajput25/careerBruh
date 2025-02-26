import React from "react";
import Marquee from "react-fast-marquee";
import TestiminialCard from "./TestiminialCard";
import MainHeading from "../Headings/MainHeading/MainHeading";


const Testimonial = () => {
  const myData = [
    {
      img: "/images/testimonial/10_Saheb Pal_B.COM_MANIPAL.png",
      name: "Saheb Pal",
      designation: "Data Analysis",
    },
    {
      img: "/images/testimonial/14_ROHIT KUMAR SINGH_BCA_CU.png",
      name: "Jaspreet Singh",
      designation: "Data Analysis",
    },
    {
      img: "/images/testimonial/12_Rushikesh Balasaheb Bagal_MTech_SVU.png",
      name: "Rahul Singh",
      designation: "Data Analysis",
    },
    {
      img: "/images/testimonial/14_ROHIT KUMAR SINGH_BCA_CU.png",
      name: "Pooja Saini",
      designation: "Data Analysis",
    },
    {
      img: "/images/testimonial/14_ROHIT KUMAR SINGH_BCA_CU.png",
      name: "Pradeep Kumar",
      designation: "Data Analysis",
    },
    {
      img: "/images/testimonial/10_Saheb Pal_B.COM_MANIPAL.png",
      name: "Priya Kapoor",
      designation: "Data Analysis",
    },
    {
      img: "/images/testimonial/14_ROHIT KUMAR SINGH_BCA_CU.png",
      name: "Ramesh Kishore",
      designation: "Data Analysis",
    },
    {
      img: "/images/testimonial/10_Saheb Pal_B.COM_MANIPAL.png",
      name: "Ranjith Kumar",
      designation: "Data Analysis",
    },
    {
      img: "/images/testimonial/18_Rahul Sharma_MCA_Manipal.png",
      name: "Rajesh Kumar",
      designation: "Data Analysis",
    },
  ];
  return (
    <div className="mb-5">
      {" "}
      <MainHeading title={"Ambitious People ❤️ CareerBruh"} className="text-center" />
      <Marquee pauseOnHover="true" speed={50} loop={0} autoFill={true} direction="left" className="mb-3">
        <TestiminialCard myData={myData} />
      </Marquee>
      <Marquee pauseOnHover="true" speed={50} loop={0} autoFill={true} direction="right">
        <TestiminialCard myData={myData} />
      </Marquee>
    </div>
  );
};

export default Testimonial;
