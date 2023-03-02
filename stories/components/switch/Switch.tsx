import React from 'react';
import clsx from 'clsx';

type SwitchProps = {
  id: string;
  label: string;
  size?: 'medium';
  isDisabled?: boolean;
};

export function Switch({ id, label, size, isDisabled = false }: SwitchProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        className={clsx('switch', {
          'switch-md': size === 'medium',
        })}
        disabled={isDisabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
