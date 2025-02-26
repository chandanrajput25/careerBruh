"use client";
import React from "react";
import ContainerLayout from "../../UI/ContainerLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import SocialShare from "../SocialShare/SocialShare";
import store from "@/app/utils/store";
import { useState } from "@hookstate/core";
import { Telephone } from "react-bootstrap-icons";
import WhiteButton from "../../UI/Button/WhiteButton";
import DarkLogo from "../Logo/DarkLogo";

const Footer = () => {
  const { tollFree } = useState(store);

  const about = [
    {
      title: "About Us",
      href: "/about-university",
    },
    {
      title: "Student Email",
      href: "/about",
    },
    {
      title: "Academic Calender",
      href: "/academic-calendar",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
    {
      title: "Global Partnership",
      href: "/global-partnership",
    },
  ];
  const policies = [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms of Use",
      href: "/terms-of-use",
    },
    {
      title: "Cancellation & Refund Policy",
      href: "/cancellation-refund-policy",
    },
    {
      title: "Suspension & Dismissal",
      href: "/suspension-dismissal",
    },
    {
      title: "Non-Discrimination",
      href: "/non-discrimination",
    },
  ];

  return (
    <ContainerLayout>
      <Row className="mb-5">
        <Col className="col-3">
          <p className="fw-bold mb-2">Main Navigation</p>
          <ul className="list-unstyled fs-14">
            {about.map((data, index) => (
              <li key={index} className="mb-2">
                <Link href={data.href}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col className="col-3">
          <p className="fw-bold mb-2">Policies</p>
          <ul className="list-unstyled fs-14">
            {policies.map((data, index) => (
              <li key={index} className="mb-2">
                <Link href={data.href}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col className="col-3">
          <p className="fw-bold mb-2">Get in touch</p>
          <ul className="list-unstyled fs-14">
            <p className="mb-3">
              6100 Lake Ellenor Drive, Suite 100E, Orlando, FL 32809
            </p>
            <p className="mb-0">
              <Link
                href={`tel:${tollFree.get()}`}
                className="d-inline-flex align-items-center gap-1 lhb"
              >
                <Telephone size={15} color="black" />
                {tollFree.get()}
              </Link>
            </p>
          </ul>
          <Link href="contact-us" className="fs-14">
            <WhiteButton title={"Get Connected"} />
          </Link>
        </Col>
        <Col className="col-3">
          <div>
            <DarkLogo />
            <p className="mt-3 fs-14">
              Birchwood University is a DBA privately owned by Birchwood
              University, LLC.
            </p>
            <SocialShare color="#000" />
          </div>
        </Col>
      </Row>
    </ContainerLayout>
  );
};

export default Footer;
