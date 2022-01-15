import { AtSymbolIcon, ClockIcon } from "@heroicons/react/outline";
import { HomeIcon, LibraryIcon } from "@heroicons/react/solid";

function MiniSidebar() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between bg-gray-200 py-4 cursor-pointer">
        <HomeIcon className="h-7" />
        <p className="text-sm">Home</p>
      </div>
      <div className="flex flex-col items-center justify-between hover:bg-gray-200 py-4 cursor-pointer">
        <ClockIcon className="h-7" />
        <p className="text-sm">History</p>
      </div>
      <div className="flex flex-col items-center justify-between hover:bg-gray-200 py-4 cursor-pointer">
        <AtSymbolIcon className="h-7" />
        <p className="text-sm">Explore</p>
      </div>
      <div className="flex flex-col items-center justify-between hover:bg-gray-200 py-4 cursor-pointer">
        <LibraryIcon className="h-7" />
        <p className="text-sm">Library</p>
      </div>
    </div>
  );
}

export default MiniSidebar;
