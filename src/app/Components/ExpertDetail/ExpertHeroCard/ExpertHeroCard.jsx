import Image from 'next/image';
import React from 'react'
import { RocketTakeoff } from 'react-bootstrap-icons';
import SubHeading from '../../Global/Headings/SubHeading/SubHeading';
import styles from './ExpertHeroCard.module.scss';

const ExpertHeroCard = () => {
  return (
    <div
      className={`rounded p-4 mb-4 ${styles.bgPattern}`}
      style={{
        background:
          "linear-gradient(174deg, rgb(18 45 48) -48%, rgb(5 35 38) 42%, rgb(1 92 101) 200%)",
      }}
    >
      {" "}
      <div className="d-flex justify-content-between align-items-start ">
        <Image
          className="custom-rounded mb-3"
          objectFit="contain"
          src={"/images/experts/mentor1.jpg"}
          alt="profile pic"
          width={200}
          height={200}
        />
        <span
          className="fs-12 rounded-pill px-2 py-1 text-white spark-green"
     
        >
          <RocketTakeoff size={14} color="#fff" /> Quick Responder
        </span>
      </div>
      <h1 className="h3 text-white">Jitu Chauhan</h1>
      <p className="fs-14 text-white">
        Software Engineer at Apple{" "}
        <span className="text-white">
          7+ years in UX Design & Brand Design.
        </span>
      </p>
      <SubHeading title={"I can help with:"} className={"text-white"} />
      <p className="d-flex flex-wrap gap-2">
        {" "}
        <span
          className="textlight px-3 py-1 rounded fs-12"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          Career Consulting
        </span>
        <span
          className="textlight px-3 py-1 rounded fs-12"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          Job Hunting
        </span>
        <span
          className="textlight px-3 py-1 rounded fs-12"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          Job Coaching
        </span>
        <span
          className="textlight px-3 py-1 rounded fs-12"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          Job Placement Services
        </span>{" "}
        <span
          className="textlight px-3 py-1 rounded fs-12"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          Career Planning
        </span>{" "}
        <span
          className="textlight px-3 py-1 rounded fs-12"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          Frontend
        </span>{" "}
        <span
          className="textlight px-3 py-1 rounded fs-12"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          Frontend
        </span>{" "}
        <span
          className="textlight px-3 py-1 rounded fs-12"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          Frontend
        </span>
        <span
          className="textlight px-3 py-1 rounded fs-12"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          Frontend
        </span>
      </p>
    </div>
  );
}

export default ExpertHeroCard