import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';

import { CSSProperties } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // You can use any icon here
import React from 'react';

export interface VerticalStepperProps {
  /**
   * @id - id to be given to the Stepper component
   */
  id?: string;
  /**
   * @stepItems - Array of step data
   */
  stepItems: StepItem[];
  /**
   * @className - additional classes for customization
   */
  className?: string;
  /**
   * @style - additional inline styles
   */
  style?: CSSProperties;
}

export interface StepItem {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  descriptionTitle: React.ReactNode;
}

const VerticalStepper: React.FC<VerticalStepperProps> = ({
  id,
  stepItems,
  className,
  style,
}) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box id={id} className={className} style={style}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {stepItems.map((step, index) => (
          <Step key={index}>
            <StepLabel
              onClick={() => handleStepChange(index)}
              icon={step.icon || <CheckCircleIcon />} // Default icon if no icon provided
            >
              {step.title}
            </StepLabel>
            <StepContent>
              <Typography variant='h6'>{step.descriptionTitle}</Typography>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalStepper;
