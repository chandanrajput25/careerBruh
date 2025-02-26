import { Rating } from "@mui/material";
import React from "react";

const RatingStar = (props) => {
  return (
    <Rating
      size={props.size || "small"}
      name="half-rating-read"
      defaultValue={props.value || 3}
      precision={0.5}
      readOnly={props.readOnly || true}
    />
  );
};

export default RatingStar;
