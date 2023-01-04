import {
  setCategory,
  setSearchBy,
} from '@/features/campaign/presentation/store/campaign.store';
import { categories } from '@/features/home/data/constants/category.constant';
import Avatar from '@/shared/presentation/components/atoms/Avatar';
import Title from '@/shared/presentation/components/atoms/Title';
import { RootState } from '@/shared/presentation/redux/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Category() {
  const dispatch = useDispatch();
  const { category: selectedCategory } = useSelector(
    (state: RootState) => state.campaign.filter
  );

  const handleChangeCategory = (categoryTitle: string) => {
    const newCategory =
      categoryTitle === selectedCategory ? undefined : categoryTitle;
    dispatch(setCategory(newCategory));
    dispatch(setSearchBy(''));
  };

  return (
    <section className="flex flex-col space-y-4 -mx-6 pl-6">
      <Title>
        Categories
        {selectedCategory && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 inline text-red-700 fill-red-700 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>

            <button onClick={() => handleChangeCategory('')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </>
        )}
      </Title>
      <div className="flex space-x-4 md:justify-evenly overflow-auto scrollbar-hide snap-x snap-mandatory">
        {categories.map((category, index) => (
          <button
            key={index}
            className="active:bg-secondary rounded-md"
            onClick={() => handleChangeCategory(category.title)}
          >
            <Avatar
              title={category.title}
              active={category.title === selectedCategory}
            >
              {category.icon}
            </Avatar>
          </button>
        ))}
      </div>
    </section>
  );
}
