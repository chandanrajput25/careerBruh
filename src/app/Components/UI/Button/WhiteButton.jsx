import style from "./WhiteButton.module.scss";
const WhiteButton = ({ title }) => {
  return (
    <button className={`${style.pr_btn}`}>
      <span className="transition"></span>
      <span className="gradient"></span>
      <span className="label">{title}</span>
    </button>
  );
};

export default WhiteButton;
