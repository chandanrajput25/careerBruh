"use client";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import styles from "./MobileSection.module.scss";
import MainHeading from "../../Global/Headings/MainHeading/MainHeading";

const MobileSection = () => {
  return (
    <div className="py-5 mb-5" style={{ backgroundColor: "#e1f0ee" }}>
      <Container>
        {" "}
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-5 mb-md-0">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Image
                    src={"/images/Homepage/MobileSecton/mobile1.png"}
                    width={350}
                    height={550}
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Image
                    src={"/images/Homepage/MobileSecton/mobile2.png"}
                    width={350}
                    height={550}
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Image
                    src={"/images/Homepage/MobileSecton/mobile1.png"}
                    width={350}
                    height={550}
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Image
                    src={"/images/Homepage/MobileSecton/mobile2.png"}
                    width={350}
                    height={550}
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
            <Col className="col-12 col-md-6 mb-5 mb-md-0">
              <MainHeading title="How Career Hikes works" />

              <Nav
                variant="pills"
                className={`flex-column mt-4 ${styles.nav_wrap}`}
              >
                <Nav.Item className="mb-3">
                  <Nav.Link
                    eventKey="first"
                    className="py-4 d-flex gap-3 border-radius-15"
                  >
                    <div className="num_class badge">1</div>
                    <div>
                      {" "}
                      <p className="fw-bold h4">Check insurance coverage</p>
                      <p className="m-0 fs-16">
                        Answer a few questions online and we’ll match you with a
                        licensed.
                      </p>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                  <Nav.Link
                    eventKey="second"
                    className="py-4 d-flex gap-3 border-radius-15"
                  >
                    <div className="num_class badge">2</div>
                    <div>
                      {" "}
                      <p className="fw-bold h4">Get matched with a therapist</p>
                      <p className="m-0 fs-16">
                        Answer a few questions online and we’ll match you with a
                        licensed provider (typically within 48 hours).
                      </p>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                  <Nav.Link
                    eventKey="third"
                    className="py-4 d-flex gap-3 border-radius-15"
                  >
                    <div className="num_class badge">3</div>
                    <div>
                      {" "}
                      <p className="fw-bold h4">Start therapy</p>
                      <p className="m-0 fs-16">
                        Answer a few questions online and we’ll match you with a
                        licensed.
                      </p>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                  <Nav.Link
                    eventKey="fourth"
                    className="py-4 d-flex gap-3 border-radius-15"
                  >
                    <div className="num_class badge">4</div>
                    <div>
                      {" "}
                      <p className="fw-bold h4">Switch providers any time</p>
                      <p className="m-0 fs-16">
                        we’ll match you with a licensed provider (typically
                        within 48 hours).
                      </p>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default MobileSection;
