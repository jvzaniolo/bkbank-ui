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
  text = 'Primary',
  disabled = false,
}) {
  return `
    <button class="${clsx(
      'btn',
      variants[variant],
      colors[color],
      sizes[size],
    )}" type="button" ${disabled ? 'disabled' : ''}>
      ${text}
    </button>
  `;
}
