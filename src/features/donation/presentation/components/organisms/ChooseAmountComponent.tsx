import RangeComponent from '@/shared/presentation/components/atomics/RangeComponent';
import TitleComponent from '@/shared/presentation/components/atomics/TitleComponent';

export default function ChooseAmountComponent() {
  return (
    <div className="flex flex-col space-y-5">
      <TitleComponent>Choose the Amount</TitleComponent>
      <RangeComponent
        minRange={50000}
        maxRange={5000000}
        prefix="Rp"
        step={50000}
      />
    </div>
  );
}
