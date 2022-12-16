import HomeNavbarComponent from '../molecules/HomeNavbarComponent';
import StickySearchComponent from '../molecules/StickySearchComponent';

export default function HomeHeaderComponent() {
  return (
    <div className="flex flex-col space-y-6 bg-primary -mx-6 px-6 py-5 -mt-5">
      <HomeNavbarComponent />
      <StickySearchComponent />
    </div>
  );
}
