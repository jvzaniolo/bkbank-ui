import clsx from 'clsx';

export type RadioArgs = {
  isDisabled: boolean;
};

export function createRadio({ isDisabled = false }: RadioArgs) {
  return `
    <div class="flex gap-3">
      <label class="inline-flex items-center">
        <input id="superman" name="radio" type="radio" class="${clsx(
          'radio',
        )}"${isDisabled ? ' disabled' : ''} />
        <span>Superman</span>
      </label>
      <div class="inline-flex items-center">
        <input id="batman" name="radio" type="radio" class="${clsx('radio')}"${
    isDisabled ? ' disabled' : ''
  } />
        <label for="batman">Batman</label>
      </div>
    </div>
  `;
}
