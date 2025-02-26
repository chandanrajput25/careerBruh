import React from "react";
import styles from "./MainHeading.module.scss";

const MainHeading = ({ title, className }) => {
  return (
    <p
      className={`${className || "mb-2"} fw-bold ${styles.main_heading}`}
     
    >
      {title}
    </p>
  );
};

export default MainHeading;
