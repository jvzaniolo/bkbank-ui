import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

type AvatarProps = {
  className?: string;
  content?: 'icon' | 'text' | 'image';
};

export function Avatar({ className, content = 'text' }: AvatarProps) {
  return (
    <div className={className}>
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
