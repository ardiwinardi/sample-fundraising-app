import { useCallback, useEffect } from 'react';
import { GeneralPopupProps } from '../components/molecules/PopupComponent';

type Props = GeneralPopupProps & {
  backdropId: string;
  closeOnTapOutside?: boolean;
};
export default function usePopupBehaviour(props: Props) {
  const closeOnTapOutside = props.closeOnTapOutside ?? true;

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    if (props.show) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }, [props.show]);

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
