import { useContext } from 'react';
import { ResumeTabContext } from '../../contexts/ResumeTabContext';
import InvoiceList from './InvoiceList';
import NewsUpdate from './NewsUpdate';
import TransactionHistory from './TransactionHistory';

export default function ResumeTabContent() {
  const { tabName } = useContext(ResumeTabContext);

  return (
    <>
      {tabName === 'HISTORY' && <TransactionHistory />}
      {tabName === 'UPDATE' && <NewsUpdate />}
      {tabName === 'INVOICE' && <InvoiceList />}
    </>
  );
}
