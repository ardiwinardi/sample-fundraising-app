import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function CardComponent(props: Props) {
  return (
    <div className="flex flex-col space-y-3 bg-secondary rounded-xl p-4 shadow">
      {props.children}
    </div>
  );
}
