import { bannerSlides } from '@/features/home/data/constants/slide.constant';
import Category from '@/features/home/presentation/components/organisms/Category';
import HomeHeader from '@/features/home/presentation/components/organisms/HomeHeader';
import Trending from '@/features/home/presentation/components/organisms/Trending';
import Slide from '@/shared/presentation/components/atoms/Slide';

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className="flex flex-col space-y-6 mt-5">
        <Slide slideList={bannerSlides} />
        <Category />
        <div className="pt-2">
          <Trending />
        </div>
      </div>
    </>
  );
}
