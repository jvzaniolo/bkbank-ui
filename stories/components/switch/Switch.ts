import clsx from 'clsx';

export type SwitchArgs = {
  size?: 'small' | 'medium';
  isDisabled?: boolean;
};

export function createSwitch({
  size = 'small',
  isDisabled = false,
}: SwitchArgs) {
  return `
    <div class="${clsx('switch', {
      'switch-md': size === 'medium',
    })}">
      <input type="checkbox" id="id"${isDisabled ? ' disabled' : ''}>
      <label for="id">Switch</label>
    </div>
  `;
}
