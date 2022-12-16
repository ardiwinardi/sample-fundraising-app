import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  color?: 'secondary' | 'primary' | 'light';
};
export default function CardComponent(props: Props) {
  const color = props.color ?? 'secondary';
  return (
    <div
      className={classNames('flex flex-col space-y-3 rounded-xl p-4 shadow', {
        'bg-secondary': color === 'secondary',
        'bg-primary': color === 'primary',
        'bg-primary/5': color === 'light',
      })}
    >
      {props.children}
    </div>
  );
}
