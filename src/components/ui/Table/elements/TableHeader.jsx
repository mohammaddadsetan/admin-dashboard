import React from "react";

function TableHeader({ children }) {
  return (
    <thead className="w-full">
      <tr className=" flex w-full justify-between  items-center text-sm bg-[#F6F8FA] h-10 *: *:px-3  text-[#666D80] *:font-semibold">
        {children}
      </tr>
    </thead>
  );
}

export default TableHeader;
