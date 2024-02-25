import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center py-10 justify-center space-x-5">
      <button className="min-h-[56px] bg-blue-500 px-6 text-dark200_light800 cursor-pointer rounded-[10px] transition-all hover:bg-blue-600 base-medium">
        Prev
      </button>
      <p className="text-dark200_light800 base-medium">1</p>
      <button className="min-h-[56px] bg-blue-500 px-6 text-dark200_light800 cursor-pointer rounded-[10px] transition-all hover:bg-blue-600 base-medium">
        Next
      </button>
    </div>
  );
};

export default Pagination;
