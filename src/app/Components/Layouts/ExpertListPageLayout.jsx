
import { Col, Row } from "react-bootstrap"
import ContainerLayout from "../UI/ContainerLayout"
import ExpertListingBar from "../ExpertListPage/ExpertListingBar/ExpertListingBar"
import Offer from "../ExpertListPage/Offer"
import SidePanel from "../ExpertListPage/SidePanel/SidePanel"
import QuestionModal from "../ExpertListPage/Modal/QuestionModal"
import MainHeading from "../Global/Headings/MainHeading/MainHeading"


const ExpertListPageLayout = () => {
  return (
      <div>
          <ContainerLayout>
              <Row className="mb-3">
                  <Col className="col-9">
                      {" "}
                      <MainHeading title={"Top Career Experts for - heading"} />
                  </Col>
                  <Col className="col-3"></Col>
              </Row>
              <Row>
                  <Col className="col-9 pe-4">
                      <ExpertListingBar />
                      <ExpertListingBar />
                      <ExpertListingBar />
                      <ExpertListingBar />
                  </Col>
                  <Col className="col-3">
                      <div className="sticky-top">
                          {" "}
                          <Offer />
                          <SidePanel />
                      </div>
                  </Col>
              </Row>

          </ContainerLayout>
          <QuestionModal />
      </div>
  )
}

export default ExpertListPageLayout
