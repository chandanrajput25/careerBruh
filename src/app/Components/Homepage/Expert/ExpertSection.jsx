import React from 'react'
import ContainerLayout from '../../UI/ContainerLayout'
import MainHeading from '../../Global/Headings/MainHeading/MainHeading';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PrimaryButton from '../../UI/Button/PrimaryButton';
import Link from 'next/link';
import ExperSlider from './ExperSlider';

const ExpertSection = () => {
  return (
    <div className="mb-5">
      <ContainerLayout>
        <Row>
          <Col className="col-12 col-md-4">
            <p className="text-primary text-uppercase fw-bold fs-14 mb-2">
              👋🏻 Say Goodbye to faceless Call Centers
            </p>
            <MainHeading title={"Consult Real Experts for free!"} />
            <ul className="custom-list">
              <li>Minimum 5 yrs experience in Insurance.</li>
              <li>Verified. Rigorously evaluated.</li>
              <li>Unbiased plan recommendations powered by Beshak</li>
            </ul>
            <Link href={"/"}>
              <PrimaryButton title="Explore now" variant="primary" />
            </Link>
          </Col>
          <Col className="col-12 col-md-8">
            <ExperSlider />
          </Col>
        </Row>
      </ContainerLayout>
    </div>
  );
}

export default ExpertSection