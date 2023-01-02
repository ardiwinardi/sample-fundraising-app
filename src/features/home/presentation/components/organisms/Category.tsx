import { setCategory } from '@/features/campaign/presentation/store/campaign.store';
import {
  categories,
  CategoryItem,
} from '@/features/home/data/constants/category.constant';
import Avatar from '@/shared/presentation/components/atoms/Avatar';
import Title from '@/shared/presentation/components/atoms/Title';
import { RootState } from '@/shared/presentation/redux/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Category() {
  const dispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.campaign.filter);

  const handleChangeCategory = (categoryItem: CategoryItem) => {
    const newCategory =
      categoryItem.title === category ? undefined : categoryItem.title;
    dispatch(setCategory(newCategory));
  };

  return (
    <div className="flex flex-col space-y-4 -mx-6 pl-6">
      <Title>Categories</Title>
      <div className="flex space-x-4 md:justify-evenly overflow-auto scrollbar-hide snap-x snap-mandatory">
        {categories.map((category, index) => (
          <button
            key={index}
            className="active:bg-secondary rounded-md"
            onClick={() => handleChangeCategory(category)}
          >
            <Avatar title={category.title}>{category.icon}</Avatar>
          </button>
        ))}
      </div>
    </div>
  );
}
