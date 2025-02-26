import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Image from "next/image";
import MainHeading from "../../Global/Headings/MainHeading/MainHeading";

const WhatWeDoDesktop = ({ We_do, Other_do }) => {
  return (
    <div className="bg_gradient py-5">
      {" "}
      <Container>
        <Row>
          <Col className="col-10 mx-auto">
            <Row>
              <Col className="col-5">
                <MainHeading title="Career Bruh" className="text-center" />
                <div className="mt-4">
                  {" "}
                  {We_do.map((data, index) => (
                    <div key={index} className="mb-4">
                      {" "}
                      <p className="fw-bold h4 mb-2 text-primary">
                        {data.title}
                      </p>
                      <p className="fs-14">{data.description}</p>
                    </div>
                  ))}
                </div>
              </Col>
              <Col className="col-2">
                <div className="position-relative h-100">
                  <div className="vr h-100 position-absolute top-50 start-50 translate-middle text-primary"></div>
                  <span className="position-absolute top-50 start-50 translate-middle">
                    <Image
                      src={"/images/icons/vs.svg"}
                      width={45}
                      height={45}
                      alt="vs icon"
                    />
                  </span>
                </div>
              </Col>
              <Col className="col-5">
                {" "}
                <MainHeading title="Other Platforms" className="text-center" />
                <div className="mt-4">
                  {" "}
                  {Other_do.map((data, index) => (
                    <div key={index} className="mb-4">
                      {" "}
                      <p className="fw-bold h4 mb-2">{data.title}</p>
                      <p className="fs-14">{data.description}</p>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatWeDoDesktop;
