import { InputProps, TextFieldProps } from '@mui/material';
import { TextField, styled } from '@mui/material';

import React from 'react';

// Remove unused Label component and interface
// interface LabelProps {
//   label: string;
// }
// const Label: React.FC<LabelProps> = ({ label }) => (
//   <span>{label}</span>
// );

// Extended interface for styled TextField props
interface StyledTextFieldProps {
  shape?: string;
  customWidth?: string | number;
  customHeight?: string | number;
}

// Separate the onError handler interface
interface CustomErrorHandler {
  customOnError?: (error: boolean) => void;
}

// Main component props interface
interface CustomInputProps
  extends Omit<TextFieldProps, 'variant'>,
    CustomErrorHandler {
  name?: string;
  type?: string;
  shape?: 'roundedRectangle';
  reference?: React.RefObject<HTMLInputElement>;
  label?: string;
  labelPosition?: 'top' | 'side';
  additionalLabel?: string;
  tabIndex?: number;
  suffixIcon?: React.ReactNode;
  showSuffixIcon?: boolean;
  validateInput?: (value: string) => boolean;
  validationRegex?: RegExp;
  errorMessage?: string;
  validate?: boolean;
  autoComplete?: string;
  showPlaceHolder?: boolean;
  width?: string | number;
  height?: string | number;
  minLength?: number;
  maxLength?: number;
}

const StyledTextField = styled(TextField)<StyledTextFieldProps>(
  ({ theme, shape, customWidth, customHeight }) => ({
    '& .MuiOutlinedInput-root': {
      borderRadius: shape === 'roundedRectangle' ? '8px' : '4px',
      width: customWidth || '100%',
      height: customHeight || 'auto',
    },
    '& .MuiInputLabel-root': {
      transform: 'translate(14px, -9px) scale(0.75)',
      '&.Mui-focused': {
        color: theme.palette.primary.main,
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[300],
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '& .MuiInputBase-input': {
      padding: '12px 14px',
    },
  })
);

const InputField: React.FC<CustomInputProps> = ({
  name,
  type = 'text',
  shape = 'roundedRectangle',
  reference,
  label,
  labelPosition = 'top',
  additionalLabel,
  tabIndex,
  suffixIcon,
  showSuffixIcon,
  validateInput,
  validationRegex,
  errorMessage,
  validate,
  customOnError,
  autoComplete,
  showPlaceHolder,
  placeholder,
  required,
  maxLength,
  minLength,
  disabled,
  onChange,
  className,
  onBlur,
  onFocus,
  value,
  width,
  height,
  ...props
}) => {
  const [error, setError] = React.useState<boolean>(false);
  const [helperText, setHelperText] = React.useState<string>('');

  const handleValidation = (value: string): boolean => {
    if (validate) {
      let isValid = true;

      if (validateInput) {
        isValid = validateInput(value);
      }

      if (validationRegex) {
        isValid = validationRegex.test(value);
      }

      if (required && !value) {
        isValid = false;
      }

      setError(!isValid);
      setHelperText(isValid ? '' : errorMessage || 'Invalid input');
      customOnError?.(!isValid);

      return isValid;
    }
    return true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    handleValidation(newValue);
    onChange?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    handleValidation(event.target.value);
    onBlur?.(event);
  };

  // Prepare custom input props
  const inputProps: Partial<InputProps> = {
    endAdornment: showSuffixIcon ? suffixIcon : null,
    ...props.InputProps,
  };

  return (
    <div className={`input-container ${className || ''}`}>
      {labelPosition === 'side' && additionalLabel && (
        <span className='side-label'>{additionalLabel}</span>
      )}
      <StyledTextField
        name={name}
        type={type}
        shape={shape}
        inputRef={reference}
        label={labelPosition === 'top' ? label : undefined}
        tabIndex={tabIndex}
        InputProps={inputProps}
        autoComplete={autoComplete}
        placeholder={showPlaceHolder ? placeholder : ''}
        required={labelPosition === 'side' ? false : required}
        inputProps={{
          maxLength,
          minLength,
        }}
        disabled={disabled}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={onFocus}
        value={value}
        error={error}
        helperText={helperText}
        customWidth={width}
        customHeight={height}
        variant='outlined'
        {...props}
      />
    </div>
  );
};

export default InputField;
