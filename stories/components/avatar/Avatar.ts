import clsx from 'clsx';

export type AvatarProps = {
  size: 'small' | 'medium' | 'large';
  color?: 'primary' | 'high' | 'unstyled';
  isActive?: boolean;
  content?: 'icon' | 'text' | 'image';
};

const sizes = {
  small: '',
  medium: 'avatar-md',
  large: 'avatar-lg',
};

const colors = {
  unstyled: '',
  primary: 'avatar-primary',
  high: 'avatar-high',
};

export function createAvatar({
  size = 'small',
  color = 'unstyled',
  isActive = false,
  content = 'text',
}: AvatarProps) {
  return `
    <div class="${clsx(
      'avatar',
      sizes[size],
      colors[color],
      isActive && 'avatar-active',
    )}">
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
