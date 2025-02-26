import Image from "next/image";
import React from "react";

const ExpertCard = ({ data }) => {
  return (
    <>
      <div className="card border-radius-15 overflow-hidden">
        <Image
          src={data.thumbnail}
          width={268}
          height={280}
          className="card-img-top"
          alt="..."
        />

        <div className="card-body position-relative">
          <p className="card-text text-primary fw-bold mb-1 mt-2 text-capitalize">
            {data.name}
          </p>
          <p
            className="bg-secondary d-flex gap-1 align-items-center shadow text-primary custom-rounded px-2 py-1 fs-12 position-absolute"
            style={{ top: "-10px" }}
          >
            {" "}
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0.5 text-primary"
              >
                <rect
                  className="text-white dark:text-transparent"
                  fill="currentColor"
                  x="4.5"
                  y="4.5"
                  width="7"
                  height="7"
                ></rect>
                <path
                  fill="currentColor"
                  d="m2.3438,5.6562l-2.3438,2.3438,2.3438,2.3438v3.3137h3.3137l2.3425,2.3425,2.3425-2.3425h3.315v-3.315l2.3425-2.3425-2.3425-2.3425v-3.3137h-3.3138l-2.3437-2.3438-2.3438,2.3438h-3.3125v3.3125Zm5.0488,2.7528l2.754-2.7654.9705.9739-3.7245,3.7399-.9705-.9739-1.3672-1.3733.9705-.9752,1.3672,1.3739Z"
                ></path>
                <path
                  className="text-white dark:text-transparent"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.1465 5.64374L7.39254 8.4091L6.02535 7.03518L5.05485 8.01039L6.42204 9.38364L7.39254 10.3575L11.117 6.61761L10.1465 5.64374Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              Verified
            </>
          </p>

          <p className="d-flex align-items-center gap-2 fs-14 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-book-half"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            </svg>

            {data.education.map((list,index) => (
                <span key={index} className="text-uppercase">{list.name}</span>
            ))}
          </p>
          <p className="d-flex align-items-center gap-2 fs-14 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clipboard-check"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"
              />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
            </svg>
            {data.experince} years experience
          </p>
          <div className="d-flex align-items-center justify-content-between">
            {" "}
            <p className="fs-12 m-0 textlight m-0">PREVIOUSLY AT</p>{" "}
            <Image
              src={data.companyThumbnail}
              style={{ objectFit: "contain" }}
              width={100}
              height={50}
              quality={100}
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertCard;
