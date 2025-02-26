"use client";
import React, { useState } from "react";
import ContainerLayout from "../../UI/ContainerLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainHeading from "../../Global/Headings/MainHeading/MainHeading";
import { ChevronRight } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import StepForm from "../../Global/StepForm/StepForm";
import DarkLogo from "../../Global/Logo/DarkLogo";
import Link from "next/link";

const Program = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [modalContent, setModalContent] = useState(null);
  const handleShow = (data) => {
    setModalContent(data);
    setShow(true);
  };

  const ProgramList = [
    {
      heading: (
        <>
          10<sup>Th</sup>
        </>
      ),
      desc: "Lorem ipsum dolor sit amet1",
      bgColor: "#e7f3ff",
      interest: [
        {
          title: "Interests",
        },
        {
          title: "Skills and Strengths",
        },
        {
          title: "Personality Type",
        },
        {
          title: "Academic Performance",
        },
        {
          title: "Career Goals",
        },
        {
          title: "Hobbies",
        },
        {
          title: "Preferred Work Environment",
        },
        {
          title: "Financial Considerations",
        },
        {
          title: "Availability of Opportunities",
        },
        {
          title: "Duration of Education",
        },
      ],
    },
    {
      heading: (
        <>
          12<sup>Th</sup>
        </>
      ),
      desc: "Lorem ipsum dolor sit amet2",
      bgColor: "#feffdd",
      interest: [
        {
          title: "Education and Training",
        },
        {
          title: "Creative Arts and Design",
        },
        {
          title: "Science and Research",
        },
      ],
    },
    {
      heading: "Graduation",
      desc: "Lorem ipsum dolor sit amet3",
      bgColor: "#fad9ce",
      interest: [
        {
          title: "Law and Legal Services",
        },
        {
          title: "Public Service and Government",
        },
        {
          title: "Sports and Fitness",
        },
      ],
    },

    {
      heading: "Post Graduation",
      desc: "Lorem ipsum dolor sit amet4",
      bgColor: "#9deab3",
      interest: [
        {
          title: "Hospitality and Tourism",
        },
        {
          title: "Finance and Economics",
        },
        {
          title: "Communication and Media",
        },
        {
          title: "Environmental and Sustainability",
        },
        {
          title: "Aviation and Aerospace",
        },
      ],
    },
  ];
  return (
    <>
      <div className="mb-5">
        <ContainerLayout>
          <MainHeading
            title={"Space to figure things out"}
            className="mb-4 text-center"
          />
          <Row className="row-cols-4">
            {ProgramList.map((data, index) => (
              <Col key={index}>
                <div
                  role="button"
                  className="custom-rounded p-4 pe-auto"
                  style={{ backgroundColor: data.bgColor }}
                  // onClick={() => handleShow(data)}
                >
                  <p className="fs-12 mb-2">After</p>
                  <p className="fw-bold mb-2 h5">{data.heading}</p>
                  <p className="mb-2 fs-14">{data.desc}</p>
                  <p className="text-primary fw-bold fs-14 m-0">
                    <Link href={"/experts-list"} className="stretch-link">
                      {" "}
                      Get Stared <ChevronRight size={12} />{" "}
                    </Link>
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </ContainerLayout>
      </div>
      {/* <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton className="border-0">
          <DarkLogo />
        </Modal.Header>
        <Modal.Body>
          <StepForm />
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default Program;
