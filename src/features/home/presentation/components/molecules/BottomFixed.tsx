import { useScroll } from '@/shared/presentation/hooks/useScroll';
import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  showOnScrollPosition?: number | boolean;
};
export default function BottomFixed(props: Props) {
  const { scrollPosition } = useScroll();

  const showOnScrollPosition = props.showOnScrollPosition ?? false;
  return (
    <div
      className={classNames(
        'container py-3 px-5 -mx-6 bg-primary fixed flex justify-center shadow-[0px_-2px_4px_0px_#efeeee] z-30',
        'transition-all duration-200',
        showOnScrollPosition
          ? {
              'bottom-0': scrollPosition > showOnScrollPosition,
              '-bottom-full': !(scrollPosition > showOnScrollPosition),
            }
          : {
              'bottom-0': true,
            }
      )}
    >
      {props.children}
    </div>
  );
}
