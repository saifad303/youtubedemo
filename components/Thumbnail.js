import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = `https://image.tmdb.org/t/p/original/`;

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-x-105 hover:z-50"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />

      <div className="p-2">
        <h2 className="mt-1 text-xl text-black transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        {/* <p className=" truncate max-w-md">{result.overview}</p> */}
        <p className="text-gray-500 font-medium text-sm">{result.media_type}</p>
        <p className="flex items-center text-gray-500 font-medium">
          {result.release_date} . <ThumbUpIcon height={20} className="mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
