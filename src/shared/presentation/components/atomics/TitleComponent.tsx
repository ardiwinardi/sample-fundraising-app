import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function TitleComponent(props: Props) {
  return (
    <h3 className="text-sm font-bold flex justify-between items-center">
      {props.children}
    </h3>
  );
}
