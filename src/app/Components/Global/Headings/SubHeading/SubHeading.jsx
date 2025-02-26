import React from "react";
import styles from "./SubHeading.module.scss";

const SubHeading = ({ title, className }) => {
  return (
    <p className={`${className || "mb-2"} fw-bold ${styles.sub_heading}`}>
      {title}
    </p>
  );
};

export default SubHeading;
