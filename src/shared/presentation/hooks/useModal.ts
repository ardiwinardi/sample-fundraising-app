import { toggleModal } from '@/shared/presentation/redux/slices/app';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../redux/slices/app';
import { RootState } from '../redux/store';

export default function useModal(popupId: keyof AppState['modals']) {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.app.modals[popupId]);

  const toggle = () => {
    dispatch(toggleModal(popupId));
  };

  return { modalStatus: status, toggleModal: toggle };
}
