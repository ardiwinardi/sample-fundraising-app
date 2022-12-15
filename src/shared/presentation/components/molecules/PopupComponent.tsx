import classNames from 'classnames';
import { ReactNode, useEffect } from 'react';
import usePopupBehaviour from '../../hooks/usePopupBehaviour';

export type GeneralPopupProps = {
  show: boolean;
  handleClose: () => void;
  closeOnTapOutside?: boolean;
};
type Props = GeneralPopupProps & {
  id: string;
  children: ReactNode;
};

export default function PopupComponent(props: Props) {
  const closeOnTapOutside = props.closeOnTapOutside ?? true;
  const backdropId = `backdrop${props.id}`;
  const modalId = `modal${props.id}`;

  usePopupBehaviour({
    backdropId,
    show: props.show,
    handleClose: props.handleClose,
    closeOnTapOutside: closeOnTapOutside,
  });

  useEffect(() => {
    const modal = document.querySelector(`#${modalId}`) as HTMLElement;
    const backdrop = document.querySelector(`#${backdropId}`) as HTMLElement;
    if (props.show) {
      backdrop.style.display = 'block';
    }
    setTimeout(() => {
      modal.classList.remove('bottom-0');
      modal.classList.remove('-bottom-full');
      if (props.show) {
        modal.classList.add('bottom-0');
      } else {
        modal.classList.add('-bottom-full');
      }
    }, 200);

    setTimeout(() => {
      if (!props.show) {
        backdrop.style.display = 'none';
      }
    }, 400);
  }, [props.show]);

  return (
    <>
      <div
        id={modalId}
        className="fixed w-full md:w-10/12 lg:w-4/12 -mx-6 px-4 pb-5 pt-0 rounded-t-2xl z-30 bg-white transition-all duration-100"
      >
        {closeOnTapOutside ? (
          <div className="w-12 h-1 my-4 bg-primary/50 rounded-full mx-auto"></div>
        ) : (
          <div className="flex justify-end w-full pt-4 pb-0">
            <button onClick={() => props.handleClose()}>
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        <div className="mt-5">{props.children}</div>
      </div>
      <div
        id={backdropId}
        className={classNames(
          'h-full w-full bg-gray-800/20 fixed inset-0 z-20'
        )}
        style={{ display: 'none' }}
      ></div>
    </>
  );
}
