import React from 'react';
import Switch from '@mui/material/Switch';

interface SwitchComponentProps {
  id?: string;
  name?: string;
  shape?: 'rounded' | 'square';
  defaultChecked?: boolean;
  className?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onBlur?: () => void;
  style?: React.CSSProperties;
}

const SwitchComponent: React.FC<SwitchComponentProps> = ({
  id,
  name,
  shape = 'rounded',
  defaultChecked = false,
  className,
  disabled = false,
  value,
  onChange,
  onClick,
  onBlur,
}) => {
  return (
    <Switch
      id={id}
      name={name}
      defaultChecked={defaultChecked}
      className={`${className} ${shape}`}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
    />
  );
};

export default SwitchComponent;
