import HomeNavbar from '../molecules/HomeNavbar';
import StickySearch from '../molecules/StickySearch';

export default function HomeHeader() {
  return (
    <div className="flex flex-col space-y-6 bg-primary -mx-6 px-6 py-5 -mt-5">
      <HomeNavbar />
      <StickySearch />
    </div>
  );
}
