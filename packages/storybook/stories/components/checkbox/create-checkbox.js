import clsx from 'clsx';

export function createCheckbox({
  isDisabled = false,
  defaultChecked = false,
  hasError = false,
  indeterminate = false,
}) {
  if (indeterminate) {
    document.addEventListener('DOMContentLoaded', () => {
      const checkbox = document.querySelector('.checkbox');
      checkbox.indeterminate = true;
    });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      const checkbox = document.querySelector('.checkbox');
      checkbox.indeterminate = false;
    });
  }

  return `
    <label class="inline-flex items-center">
      <input type="checkbox" class="${clsx(
        'checkbox',
        hasError && 'checkbox-error',
      )}"${isDisabled ? ' disabled' : ''}${defaultChecked ? ' checked' : ''} />
      <span>Checkbox</span>
    </label>
  `;
}
