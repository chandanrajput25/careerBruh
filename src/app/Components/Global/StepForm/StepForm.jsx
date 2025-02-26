"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MainHeading from "../Headings/MainHeading/MainHeading";
import PrimaryButton from "../../UI/Button/PrimaryButton";
import WhiteButton from "../../UI/Button/WhiteButton";
import BookingCalender from "./BookingCalender/BookingCalender";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import styles from "./StepForm.module.scss";

const stepConfig = [
  {
    label: "Date & Time",
    heading: "Super! Go ahead, and schedule your call!",
    component: () => (
      <div>
        <BookingCalender />
      </div>
    ),
  },
  {
    label: "Personal Information",
    heading: "Fill in your personal details",
    component: () => (
      <div className="col-5 mx-auto">
        <PersonalInfo />
      </div>
    ),
  },
];

const StepForm = () => {
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
    <div className={`${styles.stepForm}`}>
      <Stepper activeStep={activeStep}>
        {stepConfig.map(({ label }) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

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
          <MainHeading
            title={stepConfig[activeStep].heading}
            className="text-center mt-4"
          />

          {/* Render the step component */}
          <Box sx={{ mt: 2, mb: 2 }}>{stepConfig[activeStep].component()}</Box>

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

export default StepForm;
