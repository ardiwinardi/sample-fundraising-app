import classNames from 'classnames';
import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  widthType?: 'full' | 'max' | 'min';
  heightType?: 'sm' | 'md' | 'lg';
  buttonType?: 'button' | 'submit';
  onClick?: () => void;
};
export default function ButtonComponent(props: ButtonProps) {
  const widthType = props.widthType ?? 'min';
  const heightType = props.heightType ?? 'sm';

  return (
    <button
      type={props.buttonType ?? 'button'}
      disabled={props.isLoading || props.isDisabled}
      className={classNames(
        'px-10 text-base rounded-full border border-primary bg-primary active:bg-primary/90 text-white font-bold',
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
