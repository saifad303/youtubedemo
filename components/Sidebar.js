import { HomeIcon, CursorClickIcon } from "@heroicons/react/solid";
import {
  ClockIcon,
  LibraryIcon,
  BookOpenIcon,
  PlayIcon,
  ThumbUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MenuAlt1Icon,
  TemplateIcon,
  AtSymbolIcon,
  StarIcon,
  SupportIcon,
  FlagIcon,
  QuestionMarkCircleIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import Image from "next/image";

function Sidebar() {
  const [isShowMore, setIsShowMore] = useState(false);
  const [isChannel, setIsChannel] = useState(false);
  return (
    <div className="text-black w-full h-[96%] overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300">
      <div className="">
        <button className="flex items-center space-x-5 bg-gray-300 w-full py-2 pl-4">
          <HomeIcon className="h-6" />
          <p className="font-medium">Home</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <ClockIcon className="h-6" />
          <p>Explore</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <CursorClickIcon className="h-6" />
          <p>Subscriptions</p>
        </button>
      </div>
      <div className="h-[1px] bg-gray-300 w-full my-3" />
      <div>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <LibraryIcon className="h-6" />
          <p>Library</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <BookOpenIcon className="h-6" />
          <p>History</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <PlayIcon className="h-6" />
          <p>Your Videos</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <ClockIcon className="h-6" />
          <p>Watch Later</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <ThumbUpIcon className="h-6" />
          <p>Liked Videos</p>
        </button>
        {isShowMore
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
              (val, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4"
                >
                  <MenuAlt1Icon className="h-6" />
                  <p>My playlist {val}</p>
                </button>
              )
            )
          : ""}
        {isShowMore ? (
          <button
            onClick={() => setIsShowMore(!isShowMore)}
            className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4"
          >
            <ChevronUpIcon className="h-6" />
            <p>Show Less</p>
          </button>
        ) : (
          <button
            onClick={() => setIsShowMore(!isShowMore)}
            className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4"
          >
            <ChevronDownIcon className="h-6" />
            <p>Show more</p>
          </button>
        )}
      </div>
      <div className="h-[1px] bg-gray-300 w-full my-3" />
      <div className="">
        <h3 className="text-gray-600 font-medium mb-2 pl-4">SUBSCRIPTION</h3>
        {[1, 2, 3, 4, 5].map((val) => (
          <button
            className="flex items-center space-x-4 hover:bg-gray-300 w-full py-2 pl-4"
            key={val}
          >
            <Image
              src={`/ychannel.jpg`}
              className="rounded-full"
              height={35}
              width={35}
            />
            <p className="">Youtube Chanel {val}</p>
          </button>
        ))}

        {isChannel
          ? [6, 7, 8, 9, 10, 11, 12, 13].map((val) => (
              <button
                className="flex items-center space-x-4 hover:bg-gray-300 w-full py-2 pl-4"
                key={val}
              >
                <Image
                  src={`/ychannel.jpg`}
                  className="rounded-full"
                  height={35}
                  width={35}
                />
                <p className="">Youtube Chanel {val}</p>
              </button>
            ))
          : ""}
        {isChannel ? (
          <button
            onClick={() => setIsChannel(!isChannel)}
            className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4"
          >
            <ChevronUpIcon className="h-6" />
            <p>Show Less</p>
          </button>
        ) : (
          <button
            onClick={() => setIsChannel(!isChannel)}
            className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4"
          >
            <ChevronDownIcon className="h-6" />
            <p>Show more</p>
          </button>
        )}
      </div>
      <div className="h-[1px] bg-gray-300 w-full my-3" />
      <div>
        <h3 className="text-gray-600 font-medium mb-2 pl-4">
          MORE FROM YOUTUBE
        </h3>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <TemplateIcon className="h-6" />
          <p>Gaming</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <RssIcon className="h-6" />
          <p>Live</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <StarIcon className="h-6" />
          <p>Favourite</p>
        </button>
      </div>
      <div className="h-[1px] bg-gray-300 w-full my-3" />
      <div>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <SupportIcon className="h-6" />
          <p>Settings</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <FlagIcon className="h-6" />
          <p>Report History</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <QuestionMarkCircleIcon className="h-6" />
          <p>Help</p>
        </button>
        <button className="flex items-center space-x-5 hover:bg-gray-300 w-full py-2 pl-4">
          <AtSymbolIcon className="h-6" />
          <p>Send Feedback</p>
        </button>
      </div>
      <div className="h-[1px] bg-gray-300 w-full my-3" />
      <div className="w-[200px] pl-4 pb-7">
        <p className="text-gray-500 text-sm font-medium">
          The only purpose of this project is to show my experience over
          front-end by replicating some design of Youtube.
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
