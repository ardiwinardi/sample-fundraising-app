import {
  CampaignState,
  setSortingBy,
} from '@/features/campaign/presentation/store/campaign.store';
import { sortingOptions } from '@/features/home/data/constants/sorting.constant';
import { BasePopupProps } from '@/shared/interfaces/popup.interface';
import Popup from '@/shared/presentation/components/atoms/Popup';
import { RootState } from '@/shared/presentation/redux/store';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type Props = BasePopupProps;

export default function SortingPopup(props: Props) {
  const { orderBy } = useSelector((state: RootState) => state.campaign.filter);
  const dispatch = useDispatch();

  const handleChangeSorting = (orderBy: CampaignState['filter']['orderBy']) => {
    dispatch(setSortingBy(orderBy));
    props.handleClose();
  };

  return (
    <Popup
      id="sorting"
      show={props.show}
      handleClose={() => props.handleClose()}
    >
      <ul className="flex flex-col space-y-3">
        {sortingOptions.map((option, index) => {
          const id = useId();
          return (
            <li
              className="flex w-full justify-between items-center text-sm"
              key={index}
            >
              <label htmlFor={id}>{option.name}</label>
              <input
                id={id}
                type="checkbox"
                value={option.key}
                checked={option.key === orderBy}
                onChange={(event) =>
                  handleChangeSorting(event.target.value as typeof orderBy)
                }
              />
            </li>
          );
        })}
      </ul>
    </Popup>
  );
}
