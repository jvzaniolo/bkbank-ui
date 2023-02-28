import React from 'react';
import clsx from 'clsx';
import { UserIcon } from '@heroicons/react/24/outline';

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

export function Avatar({
  size = 'small',
  color = 'unstyled',
  isActive = false,
  content = 'text',
}: AvatarProps) {
  return (
    <div
      className={clsx('avatar', sizes[size], colors[color], {
        'avatar-active': isActive,
      })}
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
