import TabResumeComponent from '../molecules/TabResumeComponent';
import TransactionCardComponent from '../molecules/TransactionCardComponent';

export default function TransactionListComponent() {
  return (
    <div className="flex flex-col space-y-3">
      <TabResumeComponent />
      <div className="flex flex-col space-y-3 max-h-[400px] px-2 pb-3 overflow-auto">
        {Array(12)
          .fill(1)
          .map((number, index) => (
            <TransactionCardComponent key={index} />
          ))}
      </div>
    </div>
  );
}
