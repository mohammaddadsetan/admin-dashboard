import React from "react";
import SearchInput from "./components/SearchInput";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Background from "../../common/Background";

function header() {
  return (
    <header className="w-full border-b primary-border-color h-20 flex justify-between items-center px-5 z-20">
      <div>
        <SearchInput />
      </div>
      <div className="flex items-center justify-between gap-5">
        <Notifications />
        <div className="w-px h-6 border-l primary-border-color"></div>
        <Profile />
      </div>
    </header>
  );
}

export default header;
