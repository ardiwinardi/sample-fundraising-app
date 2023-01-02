import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

export type SearchContextProps = {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextProps>({
  keyword: '',
  setKeyword: () => false,
});

type SearchContextProviderProps = {
  children: React.ReactElement;
};

export const SearchContextProvider = (props: SearchContextProviderProps) => {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <SearchContext.Provider
      value={{
        keyword,
        setKeyword,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
