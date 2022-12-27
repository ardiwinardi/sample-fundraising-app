import classNames from 'classnames';

type Props = {
  id: string;
};
export default function Backdrop(props: Props) {
  return (
    <div
      id={props.id}
      className={classNames('h-full w-full bg-gray-800/20 fixed inset-0 z-40')}
      style={{ display: 'none' }}
    ></div>
  );
}
