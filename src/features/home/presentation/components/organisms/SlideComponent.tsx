import useScreenSize from '@/shared/presentation/hooks/useScreenSize';
import classNames from 'classnames';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const slides: { url: string }[] = [
  {
    url: 'https://via.placeholder.com/800x400.png?text=Banner 1',
  },
  {
    url: 'https://via.placeholder.com/800x400.png?text=Banner 2',
  },
  {
    url: 'https://via.placeholder.com/800x400.png?text=Banner 3',
  },
];

type Props = {
  withNavigation?: boolean;
};
export default function SlideComponent(props?: Props) {
  const { isLargeScreen } = useScreenSize();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const slide = document.querySelector(`#slide-${currentIndex}`);
    slide?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [currentIndex]);

  const handleScroll = useCallback(
    (event: any) => {
      if (!isLargeScreen) {
        const slide = document.querySelector(
          `#slide-${currentIndex}`
        ) as HTMLElement;
        const element = event?.target as HTMLElement;
        setCurrentIndex(Math.round(element.scrollLeft / slide.scrollWidth));
      }
    },
    [currentIndex, isLargeScreen]
  );

  useEffect(() => {
    const container = document.querySelector('#slide-container') as HTMLElement;
    container.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div
        id="slide-container"
        className="flex space-x-6 pl-6 snap-x snap-mandatory overflow-auto scrollbar-hide -mx-6"
      >
        {slides.map((slide, index) => (
          <Image
            id={`slide-${index}`}
            src={slide.url}
            width={300}
            height={200}
            alt=""
            className="snap-always snap-center rounded-lg touch-pan-x"
            key={index}
          />
        ))}
        <div className="w-10"></div>
      </div>

      {props?.withNavigation && (
        <div className="flex justify-center lg:space-x-2 space-x-1.5 mt-5">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                type="button"
                className={classNames({
                  'w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 rounded-full bg-white border-primary border-2 -mt-[2px] lg:-mt-[4px]':
                    isActive,
                  'w-1.5 h-1.5 lg:w-[8px] lg:h-[8px] rounded-full bg-gray-300 lg:hover:bg-gray-400':
                    !isActive,
                })}
                key={index}
                disabled={!isLargeScreen}
                onClick={() => setCurrentIndex(index)}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}
