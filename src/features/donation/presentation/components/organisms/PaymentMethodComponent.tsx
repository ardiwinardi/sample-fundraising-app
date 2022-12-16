import TitleComponent from '@/shared/presentation/components/atomics/TitleComponent';
import PaymentMethodCardComponent from '../molecules/PaymentMethodCardComponent';

export default function PaymentMethodComponent() {
  return (
    <div className="flex flex-col space-y-3">
      <TitleComponent>Payment Method</TitleComponent>
      <PaymentMethodCardComponent />
    </div>
  );
}
