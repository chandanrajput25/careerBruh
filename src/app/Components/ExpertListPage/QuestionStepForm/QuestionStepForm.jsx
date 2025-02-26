"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../../UI/Button/PrimaryButton";
import WhiteButton from "../../UI/Button/WhiteButton";
import MainHeading from "../../Global/Headings/MainHeading/MainHeading";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Lock } from "react-bootstrap-icons";

const interestList = [
    {
        id: 1,
        label: 'First radio',
        value: 'first radio'
    },
    {
        id: 2,
        label: 'Second radio',
        value: 'second radio'
    },
    {
        id: 3,
        label: 'Third radio',
        value: 'third radio'
    },
    {
        id: 4,
        label: 'Fourth radio',
        value: 'fourth radio'
    },
    {
        id: 5,
        label: 'Fifth radio',
        value: 'fifth radio'
    },
    {
        id: 6,
        label: 'Sixth radio',
        value: 'sixth radio'
    },
    {
        id: 7,
        label: 'Seventh radio',
        value: 'seventh radio'
    },


]

const languageList = [
    {
        id: 1,
        label: 'English',   
        value: 'english'
    },
    {
        id: 2,
        label: 'Hindi',
        value: 'hindi'
    },  
    {
        id: 3,
        label: 'Other',
        value: 'other'
    },  
]
    


const stepConfig = [
    {
        label: "Select Interest",
        heading: "Select Your Interest",
        component: () => (
            <Row className='g-3 row-cols-2'>

                {interestList.map((item, index) => (
                    <Col key={index}>
                        <div className="list-group list-group-radio d-grid gap-2 border-0 w-auto">

                            <div className="position-relative" >
                                <input className="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="interest" id={`question${item.id}`} value="" />
                                <label className="list-group-item py-3 pe-5 rounded-3" htmlFor={`question${item.id}`}>
                                    <strong className="d-block small opacity-75">{item.label}</strong>
                                </label>
                            </div>
                        </div>
                    </Col>

                ))}

            </Row>
        ),
    },
    {
        label: "Choose your Language for Communication",
        heading: "Preferred Language",
        component: () => (
            <Row className='g-3 row-cols-2'>

                {languageList.map((item, index) => (
                    <Col key={index}>
                        <div className="list-group list-group-radio d-grid gap-2 border-0 w-auto">

                            <div className="position-relative" >
                                <input className="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="interest" id={`question${item.id}`} value="" />
                                <label className="list-group-item py-3 pe-5 rounded-3" htmlFor={`question${item.id}`}>
                                    <strong className="d-block small opacity-75">{item.label}</strong>
                                </label>
                            </div>
                        </div>
                    </Col>

                ))}

            </Row>
        ),
    },
    {
        label: "Personal Information",
        heading: "Get Best Expert",
        component: () => (
            <Form>
                <Row>
                    <Form.Group as={Col} md="12" className="mb-3">
                        <Form.Label className="fw-bold fs-14">Full Name</Form.Label>
                        <Form.Control required type="text" size="lg" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3">
                        <Form.Label className="fw-bold fs-14" >Email</Form.Label>
                        <Form.Control required type="text" size="lg" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3">
                        <Form.Label className="fw-bold fs-14">Mobile Number</Form.Label>
                        <Form.Control required type="text" size="lg" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3">
                        <Form.Label className="fw-bold fs-14">State</Form.Label>
                        <Form.Control required type="text" size="lg" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3">
                        <Form.Label className="fw-bold fs-14">City</Form.Label>
                        <Form.Control required type="text" size="lg" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="my-3">
                      
                        <p className="text-primary fs-14 text-start d-flex align-items-center justify-content-start">
                            <Lock size={16} className="text-primary" /> Your Information is Secure with us
                        </p>

                    </Form.Group>
                </Row>
            </Form>
        ),
    },
  
   
];

const QuestionStepForm = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <div className={``}>
            {/* <Stepper activeStep={activeStep}>
                {stepConfig.map(({ label }) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper> */}

            {activeStep === stepConfig.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : (
                <>
                    

                    {/* Render the step component */}
                        <Box>
                            <div className='border border-1 border-dark rounded-4 px-4 py-3 bg-white'> <MainHeading
                                title={stepConfig[activeStep].heading}
                                className="text-start"
                            />{stepConfig[activeStep].component()}  </div>
                           </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        {activeStep !== 0 && (
                            <div onClick={handleBack}>
                                {" "}
                                <WhiteButton title="Back" />
                            </div>
                        )}

                        <Box sx={{ flex: "1 1 auto" }} />
                        <div onClick={handleNext}>
                            <PrimaryButton
                                title={activeStep === stepConfig.length - 1 ? "Finish" : "Next"}
                            />
                        </div>
                    </Box>
                </>
            )}
        </div>
    );
};

export default QuestionStepForm;
