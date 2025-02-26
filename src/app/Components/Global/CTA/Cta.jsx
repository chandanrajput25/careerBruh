import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./Cta.module.scss";
import PrimaryButton from "../../UI/Button/PrimaryButton";

const Cta = () => {
  return (
    <div className="mb-5">
      <Container>
        <div
          style={{ borderRadius: "24px" }}
          className={`${styles.bgPattern} position-relative px-5 py-5 bg-dark d-flex justify-content-between align-items-center flex-wrap`}
        >
          <div>
            {" "}
            <p className="text-white h2 fw-bold">
              Still delaying your career concerns ?
            </p>
            <p className="text-white m-0">Consult Real Experts for free!</p>
          </div>
          <PrimaryButton title={"Apply Now"} />
        </div>
      </Container>
    </div>
  );
};

export default Cta;
