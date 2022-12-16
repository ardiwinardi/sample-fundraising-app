import { BasePopupProps } from '@/shared/interfaces/popup.interface';
import { useCallback, useEffect } from 'react';

/*
hidden overflow when popup is open
show backdrop when popup is open
close popup when backdrop is tapped
*/

type Props = BasePopupProps & {
  backdropId: string;
  closeOnTapOutside?: boolean;
  hiddenBackdropDuration?: number;
  hiddenOverflow?: boolean;
};

export default function usePopupBehaviour(props: Props) {
  const hiddenOverflow = props.hiddenOverflow ?? true;
  const closeOnTapOutside = props.closeOnTapOutside ?? true;
  const hiddenBackdropDuration = props.hiddenBackdropDuration ?? 400;

  // overflow setting
  useEffect(() => {
    if (hiddenOverflow) {
      const body = document.querySelector('body') as HTMLElement;

      if (props.show) {
        body.style.overflow = 'hidden';
      } else {
        setTimeout(() => {
          body.style.overflow = '';
        }, 200);
      }
    }
  }, [props.show, hiddenOverflow]);

  // backdrop setting
  useEffect(() => {
    const backdrop = document.querySelector(
      `#${props.backdropId}`
    ) as HTMLElement;

    if (props.show) {
      backdrop.style.display = 'block';
    } else {
      setTimeout(() => {
        backdrop.style.display = 'none';
      }, hiddenBackdropDuration);
    }
  }, [props.show, hiddenBackdropDuration]);

  const handleClick = useCallback(
    (event: any) => {
      const element = event?.target as HTMLInputElement;
      if (props.show && [props.backdropId].includes(element?.id)) {
        props.handleClose();
      }
    },
    [props.show]
  );

  useEffect(() => {
    if (closeOnTapOutside) {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }, [handleClick, closeOnTapOutside]);

  return {};
}
