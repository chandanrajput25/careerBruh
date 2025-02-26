import React from "react";
import MainHeading from "../../Global/Headings/MainHeading/MainHeading";
import RatingStar from "../../Global/RatingStar/RatingStar";

const RatingSection = () => {
  return (
    <div className="text-center mb-5">
      <div>
        <RatingStar value={4.5} size="large" />
      </div>
      <MainHeading title="More than 60,000 reviews" className="text-center" />
    </div>
  );
};

export default RatingSection;
