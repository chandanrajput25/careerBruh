import React from "react";

const Offer = () => {
  return (
    <div className="mb-3 p-3 rounded" style={{ backgroundColor: "#ddfce3" }}>
      <p className="fw-bold mb-1 text-success d-flex align-items-center gap-2">
        Limited Slot{" "}
        <span className="bg-success text-white fs-12 rounded py-1 px-2">
          2 days left
        </span>
      </p>
      <span className="fs-12">
        Save upto <b>60% on right career guidance</b>
      </span>
    </div>
  );
};

export default Offer;
