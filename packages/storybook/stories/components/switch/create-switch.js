import clsx from 'clsx';

export function createSwitch({ size = 'small', isDisabled = false }) {
  return `
    <div class="${clsx('switch', {
      'switch-md': size === 'medium',
    })}">
      <input type="checkbox" id="id"${isDisabled ? ' disabled' : ''}>
      <label for="id">Switch</label>
    </div>
  `;
}