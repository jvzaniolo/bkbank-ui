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
    <div class="inline-flex items-center gap-2">
      <input type="checkbox" id="id"${
        isDisabled ? ' disabled' : ''
      } class="${clsx('switch', {
    'switch-md': size === 'medium',
  })}">
      <label for="id">Switch</label>
    </div>
  `;
}
