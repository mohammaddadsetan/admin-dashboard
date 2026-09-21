import React from "react";
import TableRow from "./TableRow";
function TableHeader({ children }) {
  return (
    <thead className="w-full">
      <TableRow className="shrink! flex flex-1 w-full justify-between  items-center *:items-center text-sm bg-[#F6F8FA] *:flex *:shrink h-10 *:flex-1 *:px-3  text-[#666D80] *:font-semibold">
        {children}
      </TableRow>
    </thead>
  );
}

export default TableHeader;
