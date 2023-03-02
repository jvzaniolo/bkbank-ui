import React from 'react';

type BadgeProps = {
  className?: string;
  content: string;
};

export const Badge = (props: BadgeProps) => (
  <span className={props.className}>{props.content}</span>
);
