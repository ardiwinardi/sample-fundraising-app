import { BasePopupProps } from '@/shared/interfaces/popup.interface';
import classNames from 'classnames';
import { ReactNode, useEffect } from 'react';
import usePopupBehaviour from '../../hooks/usePopupBehaviour';
import Backdrop from './Backdrop';

export type PopupProps = BasePopupProps & {
  id: string;
  children: ReactNode;
  popupType?: 'popup' | 'dialog';
};

export default function Popup(props: PopupProps) {
  const closeOnTapOutside = props.closeOnTapOutside ?? true;
  const backdropId = `backdrop${props.id}`;
  const modalId = `modal${props.id}`;
  const popupType = props.popupType ?? 'popup';

  usePopupBehaviour({
    backdropId,
    show: props.show,
    handleClose: props.handleClose,
    closeOnTapOutside: closeOnTapOutside,
  });

  /* set sliding up popup */
  useEffect(() => {
    const modal = document.querySelector(`#${modalId}`) as HTMLElement;
    setTimeout(() => {
      modal.classList.remove('bottom-0');
      modal.classList.remove('-bottom-full');
      if (props.show) {
        modal.classList.add('bottom-0');
      } else {
        modal.classList.add('-bottom-full');
      }
    }, 200);
  }, [props.show]);

  return (
    <>
      <div
        id={modalId}
        className={classNames(
          'fixed container -bottom-full -mx-6 pt-0 z-50 transition-all duration-100',
          {
            'p-8': popupType === 'dialog',
          }
        )}
      >
        <div
          className={classNames('bg-white p-4', {
            'px-5 rounded-t-2xl': popupType === 'popup',
            'rounded-2xl': popupType === 'dialog',
          })}
        >
          {closeOnTapOutside ? (
            <div className="w-12 h-1 my-4 bg-primary/50 rounded-full mx-auto"></div>
          ) : (
            <div className="flex justify-end w-full pt-0 pb-0">
              <button
                onClick={() => props.handleClose()}
                className="active:bg-primary/30 rounded-full p-1 -mr-2"
              >
                <svg
                  className="w-6 h-6 text-primary font-bold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}

          <div className="mt-5">{props.children}</div>
        </div>
      </div>
      <Backdrop id={backdropId} />
    </>
  );
}
