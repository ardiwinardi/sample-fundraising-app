import { BasePopupProps } from '@/shared/interfaces/popup.interface';
import classNames from 'classnames';
import { ReactNode } from 'react';
import usePopupBehaviour from '../../hooks/usePopupBehaviour';
import Backdrop from './Backdrop';

export type PopupMenuProps = BasePopupProps & {
  id: string;
  children: ReactNode;
};

export default function PopupMenu(props: PopupMenuProps) {
  const closeOnTapOutside = props.closeOnTapOutside ?? true;
  const backdropId = `backdrop${props.id}`;

  usePopupBehaviour({
    backdropId,
    show: props.show,
    handleClose: props.handleClose,
    closeOnTapOutside: closeOnTapOutside,
    hiddenBackdropDuration: 0,
    hiddenOverflow: false,
  });

  return (
    <>
      <div
        className={classNames(
          'absolute top-9 bg-white p-3 right-0 rounded-md w-40 z-50 shadow',
          {
            hidden: !props.show,
          }
        )}
      >
        {props.children}
      </div>
      <Backdrop id={backdropId} />
    </>
  );
}
