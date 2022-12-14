import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function LayoutAuthComponent(props: Props) {
  return <>{props.children}</>;
}
