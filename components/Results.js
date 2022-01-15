import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <FlipMove className="px-2 my-2 sm:grid md:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center overflow-y-auto h-[86%] scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
