import classNames from 'classnames';
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
};
export default function Avatar(props: Props) {
  const size = props.size ?? 'sm';
  const isActive = props.active ?? false;
  return (
    <div className="flex flex-col items-center space-y-1 relative z-10 p-1 rounded-full snap-center snap-always">
      <div
        className={classNames(
          'inline-flex overflow-hidden relative justify-center items-center bg-secondary rounded-full',
          {
            'w-14 h-14': size === 'sm',
            'w-24 h-24': size === 'md',
            'w-32 h-32': size === 'lg',
            'bg-secondary/50': isActive,
          }
        )}
      >
        {props.children}
      </div>
      {props.title && (
        <span
          className={classNames('text-xs', {
            'font-bold': isActive,
          })}
        >
          {props.title}
        </span>
      )}
    </div>
  );
}
