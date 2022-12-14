import { categories } from '@/features/home/data/constants/category.constant';
import TitleComponent from '@/shared/presentation/components/atomics/TitleComponent';
import AvatarComponent from '../atomics/AvatarComponent';

export default function CategoryComponent() {
  return (
    <div className="flex flex-col space-y-4 -mx-6 pl-6">
      <TitleComponent>Categories</TitleComponent>
      <div className="flex space-x-4 md:justify-evenly overflow-auto scrollbar-hide snap-x snap-mandatory">
        {categories.map((category, index) => (
          <AvatarComponent
            key={index}
            icon={category.icon}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
}
