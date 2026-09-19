import React from "react";
import { HiSearch } from "react-icons/hi";

function SearchBox() {
  return (
    <div className="flex items-center border primary-border-color gap-1">
      <HiSearch />
      <input type="text" placeholder="جستجو کنید" className="outline-none" />
    </div>
  );
}

export default SearchBox;
