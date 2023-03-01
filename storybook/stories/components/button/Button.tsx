import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

type ButtonProps = {
  className: string;
  label: React.ReactNode;
  isDisabled?: boolean;
  withIcon?: boolean;
  onlyIcon?: boolean;
};

export function Button({
  label,
  className,
  isDisabled = false,
  withIcon = false,
  onlyIcon = false,
}: ButtonProps) {
  return (
    <button type="button" className={className} disabled={isDisabled}>
      {withIcon && <ShoppingBagIcon />}
      {!onlyIcon && label}
    </button>
  );
}
