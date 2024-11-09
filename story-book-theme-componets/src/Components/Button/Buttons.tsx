import React from 'react';

interface ButtonProps {
  id?: string;
  label: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large' | 'custom';
  width?: string;
  height?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  shape?: 'rounded' | 'roundedRectangle' | 'circle';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onMouseOut?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  id,
  label,
  onClick,
  size = 'medium',
  width,
  height,
  variant = 'primary',
  backgroundColor,
  textColor = 'white',
  disabled = false,
  type = 'button',
  shape = 'roundedRectangle',
  startIcon,
  endIcon,
  onBlur,
  onMouseOut,
  onMouseOver,
  loading = false,
}) => {
  // Base styles
  const baseStyles =
    'font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center transition duration-200 ease-in-out';

  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  };

  // Size styles using fixed pixel values
  const sizeStyles = {
    small: 'px-3 py-2 text-sm h-80 min-w-[80px]',
    medium: 'px-4 py-2 text-base h-10 min-w-[100px]',
    large: 'px-6 py-3 text-lg h-12 min-w-[120px]',
    custom: '', // Empty, handled by width and height props
  };

  // Shape styles
  const shapeStyles = {
    rounded: 'rounded-full',
    roundedRectangle: 'rounded-lg',
    circle: 'rounded-full p-0 aspect-square',
  };

  const computedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${shapeStyles[shape]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  const buttonStyle = {
    backgroundColor: backgroundColor || undefined,
    color: textColor,
    width: size === 'custom' ? width : undefined,
    height: size === 'custom' ? height : undefined,
  };

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      onBlur={onBlur}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      disabled={disabled || loading}
      style={buttonStyle}
      className={computedStyles}
    >
      {loading ? (
        <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
      ) : (
        <>
          {startIcon && <span className='mr-2'>{startIcon}</span>}
          {label}
          {endIcon && <span className='ml-2'>{endIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
