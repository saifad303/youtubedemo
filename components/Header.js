import HeaderItem from "./HeaderItem";
import Image from "next/image";
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl items-center">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
        <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
        <HeaderItem Icon={CollectionIcon} title="COLLECTIONS" />
        <HeaderItem Icon={SearchIcon} title="SEARCH" />
        <HeaderItem Icon={UserIcon} title="ACCOUNT" />
      </div>
      <Image
        src="/hulu.png"
        className="object-contain"
        height={35}
        width={100}
      />
    </header>
  );
}

export default Header;
