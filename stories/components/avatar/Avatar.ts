import clsx from 'clsx';

export type AvatarProps = {
  base: 'avatar';
  size?: 'avatar-md' | 'avatar-lg';
  color?: 'avatar-primary' | 'avatar-high';
  state?: 'avatar-active';
  content?: 'icon' | 'text' | 'image';
};

export function createAvatar({
  base,
  size,
  color,
  state,
  content = 'text',
}: AvatarProps) {
  return `
    <div class="${clsx(base, size, color, state)}">
      ${
        content === 'icon'
          ? `<i data-feather="circle"></i>`
          : content === 'image'
          ? '<img src="https://randomuser.me/api/portraits/med/men/86.jpg" alt="avatar" />'
          : 'RM'
      }
    </div>
  `;
}
