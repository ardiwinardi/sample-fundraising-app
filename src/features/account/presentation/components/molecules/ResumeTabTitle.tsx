import classNames from 'classnames';
import { useContext } from 'react';
import {
  ResumeTabContext,
  ResumeTabInterface,
} from '../../contexts/ResumeTabContext';

const ActiveTabName = ({
  title,
  isActive,
}: {
  title: string;
  isActive: boolean;
}) => {
  return (
    <div
      className={classNames('p-3', {
        'bg-primary rounded-xl font-bold shadow text-white': isActive,
      })}
    >
      {title}
    </div>
  );
};

const tabsName: { key: ResumeTabInterface['tabName']; title: string }[] = [
  {
    key: 'HISTORY',
    title: 'History',
  },
  {
    key: 'UPDATE',
    title: 'Update',
  },
  {
    key: 'INVOICE',
    title: 'Invoice',
  },
];

export default function ResumeTabTitle() {
  const { tabName, setTabName } = useContext(ResumeTabContext);
  return (
    <ul className="flex text-sm font-medium text-center text-gray-500 border border-primary/50 rounded-xl">
      {tabsName.map((tab, index) => (
        <li className="w-full" key={index}>
          <button
            onClick={() => setTabName(tab.key)}
            className="inline-block p-1 w-full text-primary bg-primary/5 focus:ring-0 focus:outline-none"
            aria-current="page"
          >
            <ActiveTabName title={tab.title} isActive={tabName === tab.key} />
          </button>
        </li>
      ))}
    </ul>
  );
}
