import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  size?: 'medium' | 'large';
  variant?: 'outline' | 'ghost';
  color?: 'primary' | 'secondary';
  label: React.ReactNode;
  isDisabled?: boolean;
};

const sizes = {
  medium: 'btn-md',
  large: 'btn-lg',
};

const variants = {
  outline: 'btn-outline',
  ghost: 'btn-ghost',
};

const colors = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
};

export function Button({
  size,
  color,
  variant,
  label,
  isDisabled,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'btn',
        size ? sizes[size] : '',
        color ? colors[color] : '',
        variant ? variants[variant] : '',
      )}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}
