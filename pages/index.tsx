import CategoryComponent from '@/features/home/presentation/components/organisms/CategoryComponent';
import SlideComponent from '@/features/home/presentation/components/organisms/SlideComponent';
import StickySearchComponent from '@/features/home/presentation/components/organisms/StickySearchComponent';
import TrendingComponent from '@/features/home/presentation/components/organisms/TrendingComponent';

export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-primary">Hello,</h2>
          <h2 className="text-4xl font-bold text-primary">Ahmad</h2>
        </div>
        <StickySearchComponent />
        <SlideComponent />
        <CategoryComponent />
        <div className="pt-2">
          <TrendingComponent />
        </div>
      </div>
    </>
  );
}
