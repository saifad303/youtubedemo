import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  MicrophoneIcon,
  UserCircleIcon,
  BellIcon,
  VideoCameraIcon,
  ViewGridIcon,
  CameraIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="h-auto sticky flex items-center justify-between mx-6 my-1">
      <div className="flex items-center justify-start w-1/4">
        <button>
          <MenuIcon className="h-6 text-black mr-3" />
        </button>
        <Image src={`/ylogo.png`} height={60} width={100} />
      </div>
      <div className="flex items-center w-2/4">
        <div className="mx-auto flex items-center space-x-4 w-[70%]">
          <div className="flex items-center h-12 w-full">
            <input
              type="text"
              className="border pl-3 border-gray-300 outline-none h-full w-full shadow-inner"
              placeholder="Search"
            />
            <button className="bg-gray-200 h-full flex items-center justify-center w-[100px]">
              <SearchIcon className="h-7 text-gray-800" />
            </button>
          </div>
          <button className="bg-gray-100 rounded-full p-2">
            <MicrophoneIcon className="h-6" />
          </button>
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-end space-x-7">
        <button>
          <CameraIcon className="h-8 text-gray-700" />
        </button>
        <button>
          <ViewGridIcon className="h-8 text-gray-700" />
        </button>
        <button>
          <BellIcon className="h-8 text-gray-700" />
        </button>
        <button>
          <UserCircleIcon className="h-8 text-gray-700" />
        </button>
      </div>
    </header>
  );
}

export default Header;
