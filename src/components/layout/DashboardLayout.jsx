import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router";
import Background from "../common/Background";
function DashboardLayout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full grow ">
          <Header />
          <div id="content" className="mt-6 container mx-auto">
            <main className="relative z-10 px-5">
              <Outlet />
            </main>
            <Background />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
