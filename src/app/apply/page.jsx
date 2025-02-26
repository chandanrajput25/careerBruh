import React from "react";
import StepForm from "../Components/Global/StepForm/StepForm";
import DarkLogo from "../Components/Global/Logo/DarkLogo";
import ContainerLayout from "../Components/UI/ContainerLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { QuestionCircle } from "react-bootstrap-icons";

const Page = () => {
  return (
    <div>
      <ContainerLayout>
        <Row>
          <Col>
            <div className="py-4 d-flex align-items-center justify-content-between">
              <DarkLogo />
              <p className="fs-14 m-0 fw-bold d-flex align-items-center gap-2">
                {" "}
                <QuestionCircle size={18} /> Need help?
              </p>
            </div>
            <StepForm />
          </Col>
        </Row>
      </ContainerLayout>
    </div>
  );
};

export default Page;
