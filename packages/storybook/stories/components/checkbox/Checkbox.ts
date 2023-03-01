import clsx from 'clsx';

export type CheckboxArgs = {
  isChecked?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
};

export function createCheckbox({
  isChecked = false,
  isInvalid = false,
  isDisabled = false,
  isIndeterminate = false,
}: CheckboxArgs) {
  const label = document.createElement('label');
  label.className = 'inline-flex items-center';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = clsx('checkbox', { 'checkbox-invalid': isInvalid });

  if (isInvalid) checkbox.ariaInvalid = 'true';
  if (isDisabled) checkbox.disabled = true;
  if (isChecked) checkbox.checked = true;
  if (isIndeterminate) checkbox.indeterminate = true;

  const span = document.createElement('span');
  span.textContent = 'Checkbox';

  label.appendChild(checkbox);
  label.appendChild(span);

  return label;
}
