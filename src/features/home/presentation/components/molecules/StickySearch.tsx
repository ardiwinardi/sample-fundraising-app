import Search from '@/shared/presentation/components/atoms/Search';
import NavbarMenu from '@/shared/presentation/components/molecules/NavbarMenu';
import { useScroll } from '@/shared/presentation/hooks/useScroll';
import classNames from 'classnames';
import { SearchContextProvider } from '../../contexts/SearchContext';

export default function StickySearch() {
  const { scrollPosition } = useScroll();

  return (
    <SearchContextProvider>
      <>
        <div
          className={classNames({
            'flex fixed space-x-3 items-center left-1/2 -translate-x-1/2 -top-6 w-full md:w-10/12 lg:w-4/12 px-6 py-3 bg-primary z-40 shadow-[0px_1px_6px_-2px_#d9d9d9]':
              scrollPosition > 96,
            hidden: scrollPosition <= 96,
          })}
        >
          <Search />
          <NavbarMenu />
        </div>
        <Search />
      </>
    </SearchContextProvider>
  );
}
