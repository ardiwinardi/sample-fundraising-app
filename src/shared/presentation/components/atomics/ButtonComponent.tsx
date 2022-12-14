import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  widthType?: 'full' | 'max' | 'min';
};
export default function ButtonComponent(props: Props) {
  return (
    <button
      disabled={props.isLoading || props.isDisabled}
      className={classNames(
        'px-10 py-4 text-base rounded-full border border-primary bg-primary text-white font-bold',
        {
          'w-full': props.widthType === 'full',
          'w-max': props.widthType === 'max',
          'w-min': props.widthType === 'min',
        }
      )}
    >
      {props.children}
    </button>
  );
}
