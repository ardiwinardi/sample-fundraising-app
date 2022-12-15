import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  widthType?: 'full' | 'max' | 'min';
  heightType?: 'sm' | 'md' | 'lg';
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
};
export default function ButtonComponent(props: Props) {
  const widthType = props.widthType ?? 'max';
  const heightType = props.heightType ?? 'md';

  return (
    <button
      type={props.buttonType ?? 'button'}
      disabled={props.isLoading || props.isDisabled}
      className={classNames(
        'px-10 py-4 text-base rounded-full border border-primary bg-primary text-white font-bold',
        {
          'w-full': widthType === 'full',
          'w-max': widthType === 'max',
          'w-min': widthType === 'min',

          'py-2': heightType === 'sm',
          'py-4': heightType === 'md',
          'py-6': heightType === 'lg',
        }
      )}
      onClick={() => (props.onClick ? props.onClick() : {})}
    >
      {props.children}
    </button>
  );
}
