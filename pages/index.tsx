import { bannerSlides } from '@/features/home/data/constants/slide.constant';
import HomeHeader from '@/features/home/presentation/components/organisms/HomeHeader';
import dynamic from 'next/dynamic';

const Slide = dynamic(
  () => import('@/shared/presentation/components/atoms/Slide'),
  {
    ssr: false,
  }
);

const Category = dynamic(
  () => import('@/features/home/presentation/components/organisms/Category'),
  {
    ssr: false,
  }
);

const Trending = dynamic(
  () => import('@/features/home/presentation/components/organisms/Trending'),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex flex-col space-y-6 mt-5">
        <Slide slideList={bannerSlides} />
        <Category />
        <div className="pt-2">
          <Trending />
        </div>
      </main>
    </>
  );
}
