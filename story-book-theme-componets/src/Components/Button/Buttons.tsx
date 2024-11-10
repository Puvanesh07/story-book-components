import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import React from 'react';

interface CustomButtonProps {
  children?: React.ReactNode; // Add children prop here
  type?: 'button' | 'submit' | 'reset';
  shape?: 'roundedRectangle' | 'circle' | 'rectangle';
  size?: 'small' | 'medium' | 'large';
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  id?: string;
  onBlur?: () => void;
  onClick?: () => void;
  onMouseOut?: () => void;
  onMouseOver?: () => void;
  buttonHoverBackgroundColor?: string;
  style?: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  type = 'button',
  shape = 'roundedRectangle',
  size = 'medium',
  endIcon,
  startIcon,
  loading = false,
  disabled = false,
  id,
  onBlur,
  onClick,
  onMouseOut,
  onMouseOver,
  buttonHoverBackgroundColor,
  style,
}) => {
  const buttonStyle = {
    borderRadius:
      shape === 'circle'
        ? '50%'
        : shape === 'roundedRectangle'
        ? '12px'
        : '0px',
    backgroundColor: disabled ? 'gray' : style?.backgroundColor,
    ':hover': {
      backgroundColor: buttonHoverBackgroundColor || style?.backgroundColor,
    },
    ...style,
  };

  return (
    <Button
      type={type}
      size={size}
      startIcon={
        loading ? (
          <CircularProgress size={16} sx={{ color: 'white' }} />
        ) : (
          startIcon
        )
      }
      endIcon={endIcon}
      disabled={disabled}
      onBlur={onBlur}
      onClick={onClick}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      sx={buttonStyle}
      id={id}
      className='whitespace-nowrap'
    >
      {children} {/* Use children here */}
    </Button>
  );
};

export default CustomButton;
