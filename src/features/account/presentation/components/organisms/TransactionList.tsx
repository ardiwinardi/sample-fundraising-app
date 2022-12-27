import TabResume from '../molecules/TabResume';
import TransactionCard from '../molecules/TransactionCard';

export default function TransactionList() {
  return (
    <div className="flex flex-col space-y-3">
      <TabResume />
      <div className="flex flex-col space-y-3 max-h-[400px] px-2 pb-3 overflow-auto">
        {Array(12)
          .fill(1)
          .map((number, index) => (
            <TransactionCard key={index} />
          ))}
      </div>
    </div>
  );
}
