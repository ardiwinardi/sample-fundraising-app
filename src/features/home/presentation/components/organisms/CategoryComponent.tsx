import { categories } from '@/features/home/data/constants/category.constant';
import AvatarComponent from '@/shared/presentation/components/atomics/AvatarComponent';
import TitleComponent from '@/shared/presentation/components/atomics/TitleComponent';

export default function CategoryComponent() {
  return (
    <div className="flex flex-col space-y-4 -mx-6 pl-6">
      <TitleComponent>Categories</TitleComponent>
      <div className="flex space-x-4 md:justify-evenly overflow-auto scrollbar-hide snap-x snap-mandatory">
        {categories.map((category, index) => (
          <button key={index} className="active:bg-secondary rounded-md">
            <AvatarComponent title={category.title}>
              {category.icon}
            </AvatarComponent>
          </button>
        ))}
      </div>
    </div>
  );
}
