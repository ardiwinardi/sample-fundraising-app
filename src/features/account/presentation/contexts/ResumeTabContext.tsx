import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export interface ResumeTabInterface {
  tabName: 'HISTORY' | 'UPDATE' | 'INVOICE';
  setTabName: Dispatch<SetStateAction<ResumeTabInterface['tabName']>>;
}

export const ResumeTabContext = createContext<ResumeTabInterface>({
  tabName: 'HISTORY',
  setTabName: () => false,
});

type TabResumeProviderProps = {
  children: ReactNode;
};

export const ResumeTabProvider = (props: TabResumeProviderProps) => {
  const [tabName, setTabName] =
    useState<ResumeTabInterface['tabName']>('HISTORY');
  return (
    <ResumeTabContext.Provider value={{ tabName, setTabName }}>
      {props.children}
    </ResumeTabContext.Provider>
  );
};
