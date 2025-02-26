"use client";
import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PrimaryButton from "../../UI/Button/PrimaryButton";
import WhiteButton from "../../UI/Button/WhiteButton";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import SlotCounter from "react-slot-counter";
import Container from "react-bootstrap/Container";

const Banner = () => {
  return (
    <div className="mb-5">
      <Container>
        <Row style={{ backgroundColor:"#faebd761",borderRadius:"20px",padding:"30px"}}>
          <Col className="col-6 d-flex align-items-center">
            <div>
              {" "}
              <p className="fs-12 rounded-pill bg-secondary text-primary d-inline-block px-3 py-1">
                In Demand Courses
              </p>
              <h1 className="fw-bold mb-4">
                Explore Your Potential & Transform the{" "}
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    "future",
                    1000,
                    "Career",
                    1000,
                    "",
                    1000,
                    "future",
                    1000,
                  ]}
                  speed={10}
                  style={{}}
                  className="text-primary"
                  repeat={Infinity}
                />
              </h1>
              <p className="fs-14 mb-4">
                Join India’s #1 private university (QS World University
                Rankings, 2024) for a prestigious 1-year online MBA. Learn from
                IIM/IIT PhD faculty.
              </p>
              <div className="d-flex gap-3 mb-3">
                <Link href="/application">
                  {" "}
                  <PrimaryButton title="Start Your Application" />
                </Link>
                <Link href="/request-information">
                  {" "}
                  <WhiteButton title="Request Info" />
                </Link>
              </div>
              <p className="fs-13 text-primary d-inline-block rounded-pill mb-1 d-flex align-items-center gap-2">
                <span className="blink"></span> Limited seats available
              </p>
              <p className="fs-13 mb-0">
                <b>
                  Hurry!{" "}
                  <span className="text-primary">
                    {" "}
                    <SlotCounter value={323456} />
                  </span>
                </b>{" "}
                people have already applied in the last 1 month
              </p>
            </div>
          </Col>
          <Col className="col-6 p-0 text-center">
            <Image
              className="rounded-0"
              src={"/images/Homepage/banner/hero.png"}
              width={250}
              height={400}
              alt="banner"
              objectFit="contain"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
