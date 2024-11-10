import { Breadcrumbs, Link, Typography } from '@mui/material';

import { CSSProperties } from 'react';
import React from 'react';

export interface BreadcrumbsProps {
  breadcrumbsOption: any[];
  id?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: (link: string, event: React.MouseEvent<HTMLElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  type?: any;
  maxCrumbs?: number;
}

const BreadcrumbsComponent: React.FC<BreadcrumbsProps> = ({
  breadcrumbsOption,
  id,
  disabled = false,
  className,
  style,
  onClick,
  onBlur,
  type,
  maxCrumbs = 5,
}) => {
  // Slice the breadcrumbs if there are more than the maxCrumbs
  const displayedBreadcrumbs = breadcrumbsOption.slice(0, maxCrumbs);

  return (
    <Breadcrumbs
      aria-label='breadcrumb'
      id={id}
      className={className}
      style={style}
      onBlur={onBlur}
    >
      {displayedBreadcrumbs.map((crumb, index) => (
        <Link
          key={index}
          color={disabled ? 'text.disabled' : 'inherit'}
          onClick={(event) => onClick && onClick(crumb.link, event)}
          style={{ pointerEvents: disabled ? 'none' : 'auto' }}
          underline={
            index === displayedBreadcrumbs.length - 1 ? 'none' : 'hover'
          }
        >
          {crumb.label}
        </Link>
      ))}
      {breadcrumbsOption.length > maxCrumbs && (
        <Typography color='text.secondary'>...</Typography>
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
