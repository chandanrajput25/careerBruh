"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import ContainerLayout from "../../UI/ContainerLayout";
import { ChevronDown } from "react-bootstrap-icons";
import DarkLogo from "../Logo/DarkLogo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={`${styles.custom_header}`}>
      {" "}
      <ContainerLayout>
        <div className="d-flex align-items-center justify-content-between py-3">
         <DarkLogo/>
          <div className="d-flex align-items-center gap-2">
            {" "}
            <Dropdown>
              <Dropdown.Toggle
                className="fs-14"
                variant="white"
                id="dropdown-basic"
              >
                About <ChevronDown size={14} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="p-3 border-0 fs-13"
                style={{
                  width: "max-content",
                  boxShadow: "0px 0px 40px rgba(20, 23, 39, 0.1)",
                  borderRadius: "16px",
                }}
              >
                <Dropdown.Item href="/about-university" className="px-2">
                  About Us
                </Dropdown.Item>
                <Dropdown.Item
                  href="/why-birchwood-university"
                  className="px-2"
                >
                  Why Birchwood University
                </Dropdown.Item>
                <Dropdown.Item href="/our-president-message" className="px-2">
                  Our President Message
                </Dropdown.Item>
                <Dropdown.Item href="/licensure-associations" className="px-2">
                  Licensure Associations
                </Dropdown.Item>
                <Dropdown.Item href="/contact-us" className="px-2">
                  Contact Us
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                className="fs-14"
                variant="white"
                id="dropdown-basic"
              >
                Find Experts <ChevronDown size={14} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="p-3 border-0 fs-13"
                style={{
                  width: "max-content",
                  boxShadow: "0px 0px 40px rgba(20, 23, 39, 0.1)",
                  borderRadius: "16px",
                }}
              >
                <p className="fw-bold mb-2 fs-14 px-2">
                  Global MBA Specialisations
                </p>
                <Dropdown.Item href="/course" className="px-2">
                  {" "}
                  Business Analytics
                </Dropdown.Item>
                <Dropdown.Item href="/course" className="px-2">
                  {" "}
                  Marketing
                </Dropdown.Item>
                <Dropdown.Item href="/course" className="px-2">
                  {" "}
                  General Management
                </Dropdown.Item>
                <Dropdown.Item href="/course" className="px-2">
                  {" "}
                  Supply chain management
                </Dropdown.Item>
                <Dropdown.Item href="/course" className="px-2">
                  HR
                </Dropdown.Item>
                <Dropdown.Item href="/course" className="px-2">
                  Finance
                </Dropdown.Item>
                <Dropdown.Item href="/course" className="px-2">
                  Data Science
                </Dropdown.Item>
                <Dropdown.Item href="/course" className="px-2">
                  International Business{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                className="fs-14"
                variant="white"
                id="dropdown-basic"
              >
                My Profile <ChevronDown size={14} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="p-3 border-0 fs-13"
                style={{
                  width: "max-content",
                  boxShadow: "0px 0px 40px rgba(20, 23, 39, 0.1)",
                  borderRadius: "16px",
                }}
              >
                <Dropdown.Item href="/about-university" className="px-2">
                  Log Out
                </Dropdown.Item>
            
              
              </Dropdown.Menu>
            </Dropdown>
            {/* <Dropdown>
              <Dropdown.Toggle
                className="fs-14"
                variant="white"
                id="dropdown-basic"
              >
                Students <ChevronDown size={14} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="p-4 border-0"
                style={{
                  width: "max-content",
                  boxShadow: "0px 0px 40px rgba(20, 23, 39, 0.1)",
                  borderRadius: "16px",
                }}
              >
                <Row className="row-cols-2">
                  <Col>
                    <p className="fw-bold mb-2 fs-14">Existing Students</p>
                    <ul className="list-unstyled m-0 fs-13">
                      <li className="mb-2">
                        <Link href="">Login To The Panel</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Registrar Office</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Library Services</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">
                          Satisfactory Academic Progress – Standards
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Grades & Transcripts</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Tuition & Fees</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Student Services</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Policies & Procedures</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Online Delivery</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Academic Calendar</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <p className="fw-bold mb-2 fs-14"> Prospective Students</p>
                    <ul className="list-unstyled m-0 fs-13">
                      <li className="mb-2">
                        <Link href="">
                          Admission Application & Reactivation
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Tuition & Fees</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Why Birchwood University</Link>
                      </li>
                      <li className="mb-2">
                        <Link href="">Download Brochure</Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Header;
