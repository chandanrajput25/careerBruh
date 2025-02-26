import React from "react";
import ContainerLayout from "../Components/UI/ContainerLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import PrimaryButton from "../Components/UI/Button/PrimaryButton";
import ReviewBar from "../Components/Global/Review/ReviewBar";
import { RocketTakeoff } from "react-bootstrap-icons";
import ExperSlider from "../Components/Homepage/Expert/ExperSlider";
import MainHeading from "../Components/Global/Headings/MainHeading/MainHeading";
import SimilarMentorSlider from "../Components/ExpertDetail/SimilarMentor/SimilarMentorSlider";
import ExpertHeroCard from "../Components/ExpertDetail/ExpertHeroCard/ExpertHeroCard";
import ExpertAbout from "../Components/ExpertDetail/ExpertAbout/ExpertAbout";
import SubHeading from "../Components/Global/Headings/SubHeading/SubHeading";

const Page = () => {
  return (
    <div className="mb-5">
      <ContainerLayout>
        <Row>
          <Col className="col-8">
            <ExpertHeroCard />
            <ExpertAbout />
            <div className="shadow-1 rounded p-4 mb-5">
              <SubHeading title={"What mentees say"} />
              <ReviewBar />
              <hr />
              <ReviewBar />
              <hr />
              <ReviewBar />
              <hr />
              <ReviewBar />
            </div>
          </Col>
          <Col className="col-4">
            <div className="shadow-1 rounded p-4 sticky-top">
              <p className="fw-bold">
                Book a Free 1:1 Trial : To Plan Your Mentorship with Jitu
                Chauhan
              </p>
              <p className="fs-14 mb-2">Starting from</p>
              <p className="h4">
                <span className="fw-bold text-primary"> $125.00</span>{" "}
                <sup className="fs-12 text-primary">/ Month</sup>
              </p>
              <p className="fw-bold fs-16">Every Month Of Mentorship</p>
              <ul className="custom-list fs-14">
                <li>1 session/week (1:1 Sessions)</li>
                <li>Within 12hours (Chat Support)</li>
                <li>Everyday (Tasks & Followup)</li>
              </ul>
              <PrimaryButton title={"Book a Consultation"} className="w-100" />
              <p className="fs-14 text-primary mt-3">
                Next Available: Tuesday June 05 2025
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="mb-4">
            {" "}
            <MainHeading title={"Similar mentors"} />
          </div>
          <SimilarMentorSlider />
        </Row>
      </ContainerLayout>
    </div>
  );
};

export default Page;
