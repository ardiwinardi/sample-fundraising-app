import { ResumeTabProvider } from '../../contexts/ResumeTabContext';
import ResumeTabContent from '../molecules/ResumeTabContent';
import ResumeTabTitle from '../molecules/ResumeTabTitle';

export default function TransactionList() {
  return (
    <ResumeTabProvider>
      <div className="flex flex-col space-y-3">
        <ResumeTabTitle />
        <ResumeTabContent />
      </div>
    </ResumeTabProvider>
  );
}
