import RangeInput from '@/shared/presentation/components/atoms/RangeInput';
import Title from '@/shared/presentation/components/atoms/Title';

export default function ChooseAmount() {
  return (
    <div className="flex flex-col space-y-5">
      <Title>Choose the Amount</Title>
      <RangeInput
        minRange={50000}
        maxRange={5000000}
        prefix="Rp"
        step={50000}
      />
    </div>
  );
}
