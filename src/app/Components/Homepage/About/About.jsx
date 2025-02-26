import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import WhiteButton from "../../UI/Button/WhiteButton";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";
import ContainerLayout from "../../UI/ContainerLayout";
import Affordability from "../../../../../public/images/icons/Affordability";
import GreatCareerOutcomes from "../../../../../public/images/icons/GreatCareerOutcomes";
import MakingLearners from "../../../../../public/images/icons/MakingLearners";
import KnowledgeBase from "../../../../../public/images/icons/KnowledgeBase";
import PracticalApproach from "../../../../../public/images/icons/PracticalApproach";
import HolisticStudent from "../../../../../public/images/icons/HolisticStudent";
import MainHeading from "../../Global/Headings/MainHeading/MainHeading";

const About = () => {
   const whyData = [
      {
         title: "Affordability",
         description:
            "No matter your financial circumstances, our goal is to reduce cost as a barrier to higher education.",
         icon: <Affordability />,
      },
      {
         title: "Great Career Outcomes",
         description:
            "An education at Birchwood has limitless possibilities. Our courses are taught by esteemed faculty members.",
         icon: <GreatCareerOutcomes />,
      },
      {
         title: "Making Learners Career-Ready",
         description:
            "Providing industry-level experience to carve a strong place for themselves in the job market and climb the professional success ladder.",
         icon: <MakingLearners />,
      },
      {
         title: "Knowledge Base",
         description:
            "The complete course material is broken down into smaller units. Students have to appear for the evaluation after completion of each unit.",
         icon: <KnowledgeBase />,
      },
      {
         title: "Practical Approach",
         description:
            "With the help of customised software tools students are exposed to real business situations and they have to take strategic decisions.",
         icon: <PracticalApproach />,
      },
      {
         title: "Holistic Student Development",
         description:
            "Birchwood University aims to (re)build an academically focused education system to support holistic student development.",
         icon: <HolisticStudent />,
      },
   ];
   return (
      <div className="py-5 mb-5">
         <ContainerLayout>
            <Row>
               <Col className="col-8">
                  <p className="fs-14">Skill Up, Scale Up</p>
                  <MainHeading
                     title={
                        <>
                           Upskill your Team:{" "}
                           <span className="text-primary">Upscale your Skill</span>
                        </>
                     }
                  />

                  <p className="fs-14 mb-5">
                     Elevate your teams skills to fuel efficiency and ongoing
                     innovation for sustained business growth.
                  </p>
               </Col>
               <Col className="col-4 d-flex align-items-center justify-content-end">
                  <Link href="about-university">
                     <WhiteButton title={"About Association"} />
                  </Link>
               </Col>
            </Row>
            <p className="fw-bolder mb-4">Why learn with Birchwood University?</p>
            <Row className="row-cols-2">
               {whyData.map((list, index) => (
                  <Col key={index} className="mb-5">
                     <div className="d-flex align-items-center gap-4">
                        <div
                           className="p-3"
                           style={{ backgroundColor: "#030a210d", borderRadius: "12px" }}
                        >
                           {list.icon}
                        </div>
                        <div>
                           <p className="fw-bold mb-1">{list.title}</p>
                           <p className="m-0 fs-14">{list.description}</p>
                        </div>
                     </div>
                  </Col>
               ))}
            </Row>
            <Row>
               <p className="fw-bold">Licensure & Associations</p>
               <ul className="list-unstyled d-flex align-items-center gap-3">
                  <li>
                     <Image
                        src="/images/association/fapsc.jpg"
                        width={70}
                        height={70}
                        alt=""
                        objectFit="contain"
                     />
                  </li>
                  <li>
                     <Image
                        src="/images/association/cecu.png"
                        width={110}
                        height={50}
                        alt=""
                        objectFit="contain"
                     />
                  </li>
                  <li>
                     <Image
                        src="/images/association/CIE.png"
                        width={150}
                        height={45}
                        alt=""
                        objectFit="contain"
                     />
                  </li>
               </ul>
               <Link
                  href="/licensure-associations"
                  className="fs-14 text-primary text-decoration-underline"
               >
                  View All Licensure & Associations{" "}
                  <ArrowRight className="text-primary " size={20} />
               </Link>
            </Row>
         </ContainerLayout>
      </div>
   );
};

export default About;
