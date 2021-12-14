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
    <nav className="relative">
      <div
        className=" cursor-grab flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll overflow-y-hidden scrollbar-hide"
        ref={scrollRef}
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className=" last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            onClick={() => router.push(`/?genres=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0C1E2B] h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
