import clsx from 'clsx';

export type InputGroupArgs = {
  size: keyof typeof sizes;
  isInvalid: boolean;
  isDisabled: boolean;
};

const sizes = {
  small: '',
  medium: 'input-group-md',
  large: 'input-group-lg',
};

export function createInputGroup({
  size = 'small',
  isInvalid = false,
  isDisabled = false,
}: InputGroupArgs) {
  return `
  <div>
    <div class="${clsx(
      'input-group',
      sizes[size as keyof typeof sizes],
      isInvalid && 'input-group-invalid',
      isDisabled && 'input-group-disabled',
    )}">
      <div class="input-group-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width="1em"
          height="1em"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <div class="block relative w-full">
        <input id="id" type="text" class="input" placeholder=" "${
          isDisabled ? ' disabled' : ''
        } />
        <label for="id">Floating label</label>
      </div>

      <!-- OR -->
      <!-- <label for="id" class="block relative w-full">
        <input id="id" type="text" class="input" placeholder=" "${
          isDisabled ? ' disabled' : ''
        } />
        <span>Floating label</span>
      </label> -->

      <!-- OR -->
      <!-- <label for="id" class="block relative w-full">
        <input id="id" type="text" class="input" placeholder=" "${
          isDisabled ? ' disabled' : ''
        } />
        <div class="input-label">Floating label</div>
      </label> -->

      <div class="input-group-icon inherit-color">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width="1em"
          height="1em"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
    <span class="input-group-alt">Helper text</span>
  </div>
  `;
}
