import { bannerSlides } from '@/features/home/data/constants/slide.constant';
import CategoryComponent from '@/features/home/presentation/components/organisms/CategoryComponent';
import HomeHeaderComponent from '@/features/home/presentation/components/organisms/HomeHeaderComponent';
import TrendingComponent from '@/features/home/presentation/components/organisms/TrendingComponent';
import SlideComponent from '@/shared/presentation/components/molecules/SlideComponent';

export default function Home() {
  return (
    <>
      <HomeHeaderComponent />

      <div className="flex flex-col space-y-6 mt-5">
        <SlideComponent slideList={bannerSlides} />
        <CategoryComponent />
        <div className="pt-2">
          <TrendingComponent />
        </div>
      </div>
    </>
  );
}
