import React from 'react';
import clsx from 'clsx';

type CheckboxProps = {
  id: string;
  isChecked?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
};

export function Checkbox({
  id,
  isChecked = false,
  isInvalid = false,
  isDisabled = false,
  isIndeterminate = false,
}: CheckboxProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  return (
    <label className="inline-flex items-center" htmlFor={id}>
      <input
        id={id}
        ref={inputRef}
        type="checkbox"
        className={clsx('checkbox', { 'checkbox-invalid': isInvalid })}
        aria-invalid={isInvalid}
        disabled={isDisabled}
        defaultChecked={isChecked}
      />
      <span>Checkbox</span>
    </label>
  );
}
