import clsx from 'clsx';

const sizes = {
  small: '',
  medium: 'avatar-md',
  large: 'avatar-lg',
};

const colors = {
  primary: 'avatar-primary',
  high: 'avatar-high',
};

export function createAvatar({ size, color, isActive, content }) {
  const c =
    content === 'icon'
      ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
    `
      : content === 'text'
      ? 'RM'
      : '<img src="https://randomuser.me/api/portraits/med/men/86.jpg" alt="avatar" />';

  return `<div class="${clsx(
    'avatar',
    sizes[size],
    colors[color],
    isActive && 'avatar-active',
  )}">${c}</div>`;
}
