import {
  setCategory,
  setSearchBy,
  setSortingBy,
} from '@/features/campaign/presentation/store/campaign.store';
import { SearchContext } from '@/features/home/presentation/contexts/SearchContext';
import { SyntheticEvent, useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function Search() {
  const { keyword, setKeyword } = useContext(SearchContext);
  const { keyword: filterKeyword } = useSelector(
    (state: RootState) => state.campaign.filter
  );

  useEffect(() => {
    setKeyword(filterKeyword);
  }, [filterKeyword]);

  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      search: { value: string };
    };
    dispatch(setSearchBy(target.search.value));
    dispatch(setCategory(''));
    dispatch(setSortingBy('MOST_RECENT'));
    inputRef.current?.blur();
  };

  return (
    <div className="relative z-10 w-full">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          id="search"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search"
          className="w-full p-3 pl-7 text-sm bg-gray-100 rounded-3xl placeholder:text-primary"
        />
      </form>
      <svg
        className="w-9 h-9 absolute top-1 right-8 rotate-90 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4"
        />
      </svg>
      <svg
        className="w-6 h-6 absolute top-2 right-4 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
