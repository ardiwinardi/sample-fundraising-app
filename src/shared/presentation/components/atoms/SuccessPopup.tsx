import { BasePopupProps } from '@/shared/interfaces/popup.interface';
import Popup from '@/shared/presentation/components/atoms/Popup';

type Props = BasePopupProps & {
  message: string;
};

export default function SuccessPopup(props: Props) {
  return (
    <Popup
      id="success"
      show={props.show}
      handleClose={() => props.handleClose()}
      closeOnTapOutside={false}
      popupType="dialog"
    >
      <div className="pb-10">
        <svg
          className="w-36 h-36 mx-auto -mt-8 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <h4 className="text-lg text-center font-bold">{props.message}</h4>
      </div>
    </Popup>
  );
}
