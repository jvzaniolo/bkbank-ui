import _clsx, { type ClassValue } from 'clsx';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * @default 'base'
   */
  color?: 'base' | 'highlight';
  /**
   * Override or extend the styles applied to the component.
   * Uses the clsx library.
   *
   * @example <Component clsx={{ badge: { 'bg-red-500': boolean } }} />
   */
  clsx?: {
    badge?: ClassValue;
  };
}

const COLOR_CLASS = {
  base: '',
  highlight: 'badge-highlight',
};

export function Badge({
  color = 'base',
  className,
  clsx,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={_clsx('badge', COLOR_CLASS[color], className, clsx?.badge)}
      {...rest}
    />
  );
}
