import { categories } from '@/features/home/data/constants/category.constant';
import Avatar from '@/shared/presentation/components/atoms/Avatar';
import Title from '@/shared/presentation/components/atoms/Title';

export default function Category() {
  return (
    <div className="flex flex-col space-y-4 -mx-6 pl-6">
      <Title>Categories</Title>
      <div className="flex space-x-4 md:justify-evenly overflow-auto scrollbar-hide snap-x snap-mandatory">
        {categories.map((category, index) => (
          <button key={index} className="active:bg-secondary rounded-md">
            <Avatar title={category.title}>{category.icon}</Avatar>
          </button>
        ))}
      </div>
    </div>
  );
}
