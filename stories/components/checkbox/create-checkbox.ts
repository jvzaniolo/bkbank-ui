import clsx from 'clsx';

export type CheckboxArgs = {
  base: 'checkbox';
  state?: 'checkbox-error';
  isDisabled?: boolean;
  indeterminate?: boolean;
  defaultChecked?: boolean;
};

export function createCheckbox({
  base,
  state,
  isDisabled,
  defaultChecked,
  indeterminate,
}: CheckboxArgs) {
  if (indeterminate) {
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
      <input type="checkbox" class="${clsx(base, state)}"${
    isDisabled ? ' disabled' : ''
  }${defaultChecked ? ' checked' : ''} />
      <span>Checkbox</span>
    </label>
  `;
}
