import React from "react";
import { useMovieCategory } from "../context/MovieContext";

const Pagination = () => {
  const { setPage, page, setCategoryPage, categoryPage, category, genre } =
    useMovieCategory();

  const handleNext = () => {
    if (category) {
      setCategoryPage((current) => current + 1);
    } else {
      setPage((current) => current + 1);
    }
  };

  const handlePrev = () => {
    if (category) {
      setCategoryPage((current) => current - 1);
    } else {
      setPage((current) => current - 1);
    }
  };

  return (
    <div className="flex items-center py-10 justify-center space-x-5">
      <button
        className={`min-h-[56px] bg-blue-500 px-6 text-dark200_light800 cursor-pointer rounded-[10px] transition-all hover:bg-blue-600 base-medium ${(category ? categoryPage === 1 : page === 1) && "hover:bg-blue-500 cursor-not-allowed"}`}
        onClick={handlePrev}
        disabled={category ? categoryPage === 1 : page === 1}
      >
        Prev
      </button>
      <p className="text-dark200_light800 base-medium">
        {category ? categoryPage : page}
      </p>
      <button
        className="min-h-[56px] bg-blue-500 px-6 text-dark200_light800 cursor-pointer rounded-[10px] transition-all hover:bg-blue-600 base-medium"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
