import { ArrowRight } from "react-bootstrap-icons";
import style from "./PrimaryButton.module.scss";

const PrimaryButton = ({ title, icon, className }) => {
  return (
    <button className={`${style.pr_btn} ${className}`}>
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label d-inline-flex align-items-center gap-2">
        {title} {icon && <ArrowRight color="white" size={15} />}{" "}
      </span>
    </button>
  );
};

export default PrimaryButton;
