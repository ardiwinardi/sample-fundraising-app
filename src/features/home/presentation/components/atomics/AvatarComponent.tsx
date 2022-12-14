import { ReactNode } from 'react';
type Props = {
  icon: ReactNode;
  title?: string;
};
export default function AvatarComponent(props: Props) {
  const id = props.title?.replaceAll(' ', '') ?? '';
  return (
    <div className="flex flex-col items-center space-y-1 relative z-10 p-1 rounded-full active:bg-white snap-center snap-always">
      <div
        id={`avatar${id}`}
        className="inline-flex overflow-hidden relative justify-center items-center w-14 h-14 bg-secondary rounded-full"
      >
        <span className="font-${props.title?.replaceAll(' ', '');medium text-gray-600">
          {props.icon}
        </span>
      </div>
      {props.title && (
        <label htmlFor={`avatar${id}`} className="text-xs">
          {props.title}
        </label>
      )}
    </div>
  );
}
