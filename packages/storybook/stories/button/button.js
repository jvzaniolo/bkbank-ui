import clsx from 'clsx';

const colors = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
};

const variants = {
  solid: 'btn-solid',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
};

const sizes = {
  small: '',
  medium: 'btn-md',
  large: 'btn-lg',
};

export function createButton({
  size = 'small',
  variant = 'solid',
  color = 'primary',
  disabled = false,
  withIcon = false,
}) {
  return `
    <button class="${clsx(
      'btn',
      variants[variant],
      colors[color],
      sizes[size],
    )}" type="button"${disabled ? ' disabled' : ''}>
      ${
        withIcon
          ? `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" width="1em" hight="1em">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
      </svg>`
          : ''
      }
      Shop now
    </button>
  `;
}
