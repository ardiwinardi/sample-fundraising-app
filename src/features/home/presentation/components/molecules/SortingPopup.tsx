import { sortingOptions } from '@/features/home/data/constants/sorting.constant';
import { BasePopupProps } from '@/shared/interfaces/popup.interface';
import Popup from '@/shared/presentation/components/atoms/Popup';

type Props = BasePopupProps;

export default function SortingPopup(props: Props) {
  return (
    <Popup
      id="sorting"
      show={props.show}
      handleClose={() => props.handleClose()}
    >
      <ul className="flex flex-col space-y-3">
        {sortingOptions.map((option, index) => {
          const id = option.name.replaceAll(' ', '');
          return (
            <li
              className="flex w-full justify-between items-center text-sm"
              key={index}
            >
              <label htmlFor={id}>{option.name}</label>
              <input
                id={id}
                type="checkbox"
                onClick={() => props.handleClose()}
              />
            </li>
          );
        })}
      </ul>
    </Popup>
  );
}
