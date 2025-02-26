"use client";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import MainHeading from "../Headings/MainHeading/MainHeading";
import styles from "./Faq.module.scss";

const Faq = () => {
  const data = [
    {
      Heading: "Heading 1",
      Content: "content 1",
    },
    {
      Heading: "Heading 2",
      Content: "content 2",
    },
    {
      Heading: "Heading 3",
      Content: "content 3",
    },
  ];

  return (
    <>
      <Container className="my-5">
        <MainHeading
          title="Frequently asked Questions"
          className="text-center"
        />

        <Accordion
          flush
          className={`col-12 col-sm-7 col-md-6 mx-auto ${styles.faq}`}
          defaultActiveKey="0"
        >
          {data.map((list, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>{list.Heading}</Accordion.Header>
              <Accordion.Body className="fs-14">{list.Content}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
};

export default Faq;
