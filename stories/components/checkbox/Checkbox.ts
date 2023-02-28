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
  if (isIndeterminate) {
    document.addEventListener('DOMContentLoaded', () => {
      const checkbox = document.querySelector<HTMLInputElement>('.checkbox');
      if (checkbox) checkbox.indeterminate = true;
    });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      const checkbox = document.querySelector<HTMLInputElement>('.checkbox');
      if (checkbox) checkbox.indeterminate = false;
    });
  }

  return `
    <label class="inline-flex items-center">
      <input type="checkbox" class="${clsx('checkbox', {
        'checkbox-error': isInvalid,
      })}"${isDisabled ? ' disabled' : ''}${isChecked ? ' checked' : ''} />
      <span>Checkbox</span>
    </label>
  `;
}
