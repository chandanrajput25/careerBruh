import Image from "next/image";
import React from "react";
import RatingStar from "../RatingStar/RatingStar";

const ReviewBar = () => {
  return (
    <div className="py-3">
      <div className="d-flex gap-3 mb-4">
        <div>
          <Image
            className="rounded-circle"
            src="/images/experts/card1.jpg"
            width={50}
            height={50}
            alt="profile photo"
            objectFit="contain"
          />
        </div>
        <div>
          <p className="fs-14 fw-bold mb-1">Satvik</p>
          <p className="m-0 d-flex gap-2 align-items-center">
            {" "}
            <RatingStar value="4" />{" "}
            <span className="fs-14">September 9, 2024</span>
          </p>
        </div>
      </div>
      <p className="fs-14">
        The mentor was really knowledgeable and solved all my doubt regarding my
        Tech Stack and carrer as well.... if you are really confused or do need
        to know how to start your DSA career have a session with Sir... it will
        really help you.
      </p>
    </div>
  );
};

export default ReviewBar;
