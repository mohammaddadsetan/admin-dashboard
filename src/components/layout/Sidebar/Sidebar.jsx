import React from "react";
import menus from "../../../data/menus";
import { NavLink } from "react-router";
import clsx from "clsx";

function Sidebar() {
  return (
    <aside className="w-full max-w-80 text-right py-5 px-9 flex flex-col border-l primary-border-color h-screen sticky gap-5">
      <div className="flex h-15  gap-2 border-b primary-border-color pb-5 w-full items-center font-bold">
        <img
          src="/public/images/logo.png"
          alt=""
          className="object-contain w-fit size-full shrink-0 "
        />
        پنل سبز
      </div>
      <div>
        {menus.map((menu) => (
          <div key={menu.id}>
            <p className="text-xs text-gray-500 font-semibold">{menu.title}:</p>
            <div className="mt-2 *:w-full *:flex *:items-center *:gap-2 *:h-10 *:duration-150 *:hover:bg-gray-100 space-y-1  *:px-3 *:rounded-md text-gray-700">
              {menu.items.map((nav) => (
                <NavLink
                  to={nav.href}
                  key={nav.id}
                  className={({ isActive }) =>
                    clsx(
                      isActive
                        ? "relative before:absolute before:w-1 before:h-full l before:primary-bg before:-right-6 *:[svg]:text-teal-600! before:border-none bg-zinc-100/60"
                        : "border-transparent!",
                    )
                  }
                >
                  <nav.icon />
                  <span>{nav.title}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
