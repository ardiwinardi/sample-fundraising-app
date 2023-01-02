import RangeInput from '@/shared/presentation/components/atoms/RangeInput';
import Title from '@/shared/presentation/components/atoms/Title';

type Props = {
  handleChange: (value: number) => void;
  defaultValue: number;
};
export default function ChooseAmount(props: Props) {
  return (
    <section className="flex flex-col space-y-5">
      <Title>Choose the Amount</Title>
      <RangeInput
        minRange={50000}
        maxRange={5000000}
        prefix="Rp"
        step={50000}
        defaultValue={props.defaultValue}
        handleChange={(value) => props.handleChange(value)}
      />
    </section>
  );
}
