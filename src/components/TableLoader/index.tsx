import React from "react";

const TableLoader = ({ row = 6, col = 6 }) => {
  return (
    <div className="grid grid-rows-4  md:grid-rows-6 grid-flow-col gap-4 px-16 md:px-8 mt-[60px]">
      {new Array(col).fill(0).map((_, idx) =>
        new Array(row).fill(0).map((_, idx) => (
          <div key={idx} role="status" className="max-w-sm animate-pulse">
            <div className="h-[40px] bg-gray rounded-full dark:bg-gray w-48 mb-4"></div>
            <span className="sr-only">Loading...</span>
          </div>
        ))
      )}
    </div>
  );
};

export default TableLoader;
