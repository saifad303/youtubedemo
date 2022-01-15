import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import requests from "../utils/requests";

function Nav() {
  const router = useRouter();
  const scrollRef = useRef();
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return (
    <div>
      <div className="h-[1px] bg-gray-300 w-full ml-auto" />
      <nav className="relative py-2">
        <div
          className=" cursor-grab flex px-10 sm:px-2 text-xl whitespace-nowrap overflow-x-scroll overflow-y-hidden scrollbar-hide"
          ref={scrollRef}
        >
          {Object.entries(requests).map(([key, { title, url }]) => (
            <div
              key={key}
              className="bg-gray-100 mr-3 py-1 px-2 rounded-full border"
            >
              <h2
                className=" cursor-pointer transition duration-100 transform active:text-red-500 text-base"
                onClick={() => router.push(`/?genres=${key}`)}
              >
                {title}
              </h2>
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#fff] h-10 w-1/12"></div>
      </nav>
      <div className="h-[1px] bg-gray-300 w-full ml-auto" />
    </div>
  );
}

export default Nav;
