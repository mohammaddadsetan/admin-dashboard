import React from "react";
import { HiFilter } from "react-icons/hi";

function FilterIcon() {
  return (
    <button className="flex-center gap-1 border primary-border-color">
      <HiFilter />L<span className="text-sm">فیلتر</span>
    </button>
  );
}

export default FilterIcon;
