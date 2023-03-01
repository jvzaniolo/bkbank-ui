import React from 'react';
import clsx from 'clsx';
import { UserIcon } from '@heroicons/react/24/outline';

export type AvatarProps = {
  size?: 'small' | 'large';
  color?: 'primary';
  isActive?: boolean;
  content?: 'icon' | 'text' | 'image';
};

const sizes = {
  small: 'avatar-sm',
  large: 'avatar-lg',
};

const colors = {
  primary: 'avatar-primary',
};

export function Avatar({
  size,
  color,
  isActive = false,
  content = 'text',
}: AvatarProps) {
  return (
    <div
      className={clsx(
        'avatar',
        size ? sizes[size] : '',
        color ? colors[color] : '',
        {
          'avatar-active': isActive,
        },
      )}
    >
      {content === 'icon' ? (
        <UserIcon />
      ) : content === 'image' ? (
        <img
          alt="avatar"
          src="https://randomuser.me/api/portraits/med/men/86.jpg"
        />
      ) : (
        'RM'
      )}
    </div>
  );
}
