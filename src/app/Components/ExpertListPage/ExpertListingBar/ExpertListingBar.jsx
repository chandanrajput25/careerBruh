import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import {
  BookHalf,
  ClipboardCheck,
  PatchCheckFill,
} from "react-bootstrap-icons";

const ExpertListingBar = () => {
  return (
    <>
      <Row className="rounded py-4 px-2 mb-4 shadow-1 bg-white">
        <Col className="col-2">
          <Image
            className="rounded-circle"
            src={`/images/experts/mentor1.jpg`}
            width={100}
            height={100}
            alt="profile Image"
          />
        </Col>
        <Col className="col-7">
          <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
            {" "}
            <p className="fw-bold h4 m-0 text-capitalize">Atul Chauhan</p>
            <p className="m-0 d-flex align-items-center gap-2 text-primary fs-14">
              {" "}
              <>
                {" "}
                <PatchCheckFill size={20} color="#005C65" />
                Verified
              </>
            </p>
          </div>
          <div className="d-flex align-items-center flex-wrap gap-3 mb-2">
            {" "}
            <p className="d-flex align-items-center gap-2 fs-14 m-0">
              <BookHalf size={20} />

              <span className="text-uppercase">MBA</span>
              <span className="text-uppercase">BBA</span>
              <span className="text-uppercase">PhD</span>
            </p>
            <p className="d-flex align-items-center gap-2 fs-14 m-0">
              <ClipboardCheck size={20} />8 years experience
            </p>
          </div>
          <div>
            {" "}
            <p className="m-0 fs-14 d-flex flex-wrap align-items-center gap-2">
              Speaks :{" "}
              <span
                className="textlight px-2 py-1 rounded"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                English
              </span>
              <span
                className="textlight px-2 py-1 rounded"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                Hindi
              </span>
            </p>
          </div>
        </Col>
        <Col className="col-3 d-flex align-items-center">
          <div className="d-flex flex-column align-items-center justify-content-center gap-2">
            {" "}
            <Link href={`/expert-detail`}>
              {" "}
              <p className="fs-12 bg-primary rounded text-white text-center d-inline-flex gap-1 py-2 px-3 m-0 shadow">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-camera-video-fill text-secondary bg-white rounded-circle p-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"
                  />
                </svg>
                <span>Schedule a call now</span>
              </p>
            </Link>
            <p className="fs-12 textlight d-inline-flex justify-content-center gap-1 m-0">
              <Image
                src={"/images/experts/group.png"}
                width={48}
                height={22}
                alt="group"
              />
              <span>
                <b>34 Students</b> in active <br /> consultation
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ExpertListingBar;
