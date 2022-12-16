import { useEffect, useState } from 'react';
import { numberToCurrency } from '../../utils/number.util';

type Props = {
  minRange: number;
  maxRange: number;
  step?: number;
  prefix?: string;
};

export default function RangeComponent(props: Props) {
  const { step, minRange, maxRange } = props;

  const [maxPosition, setMaxPosition] = useState<number>(0);

  const [value, setValue] = useState<number>(maxRange / 2);

  const getPosition = (value: number) => {
    const priceTo = Math.max(value, minRange);
    const maxThumb = 100 - ((priceTo - minRange) / (maxRange - minRange)) * 100;
    setMaxPosition(Math.ceil(maxThumb) === 0 ? 4 : maxThumb);
  };

  useEffect(() => {
    getPosition(value);
  }, [value]);

  return (
    <div className="relative w-full">
      <input
        type="range"
        step={step ?? 1000}
        min={minRange}
        max={maxRange}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full h-3 appearance-none cursor-pointer opacity-0 z-30 absolute"
      />

      <div className="relative z-10 h-1">
        <div className="absolute -mt-2.5 z-10 py-3 left-0 right-0 bottom-0 top-0 rounded-full bg-gray-100"></div>
        <div
          className="absolute z-20 top-0 bottom-0 rounded-full bg-primary"
          style={{
            left: `0%`,
            right: `${maxPosition}%`,
          }}
        ></div>
        <div
          className="absolute z-20 w-5 h-5 top-0 right-0 border-2 border-primary rounded-full -mt-2 -mr-3.5 bg-white"
          style={{
            right: `${maxPosition}%`,
          }}
        ></div>
      </div>

      <div className="flex justify-between mt-5">
        <span></span>
        <span className="text-xl text-primary font-bold">
          {props.prefix}
          {numberToCurrency(value)}
        </span>
      </div>
    </div>
  );
}
