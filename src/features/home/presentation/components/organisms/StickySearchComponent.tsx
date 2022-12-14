import { useScroll } from '@/shared/presentation/hooks/useScroll';
import classNames from 'classnames';
import SearchComponent from '../atomics/SearchComponent';

export default function StickySearchComponent() {
  const { scrollPosition } = useScroll();

  return (
    <>
      <div
        className={classNames({
          'flex fixed left-1/2 -translate-x-1/2 -top-6 w-full md:w-6/12 lg:w-4/12 px-6 py-3 bg-white z-20 shadow-[0px_1px_6px_-2px_#d9d9d9]':
            scrollPosition > 96,
          hidden: scrollPosition <= 96,
        })}
      >
        <SearchComponent />
      </div>
      <SearchComponent />
    </>
  );
}
