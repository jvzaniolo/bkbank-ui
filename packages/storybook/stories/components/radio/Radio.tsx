import React from 'react';
import clsx from 'clsx';

export type RadioProps = {
  id: string;
  name: string;
  label: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
};

export function Radio({
  id,
  name,
  label,
  isInvalid = false,
  isDisabled = false,
}: RadioProps) {
  return (
    <label className="inline-flex items-center">
      <input
        id={id}
        name={name}
        type="radio"
        className={clsx('radio', {
          'radio-invalid': isInvalid,
        })}
        disabled={isDisabled}
      />
      <span>{label}</span>
    </label>
  );
}
