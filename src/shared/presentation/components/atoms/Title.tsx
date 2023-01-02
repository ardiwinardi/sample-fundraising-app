import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function Title(props: Props) {
  return <h1 className="text-sm font-bold">{props.children}</h1>;
}
