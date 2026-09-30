import React from "react";
import TitleElement from "../../layout/main/dashboard/home/TitleElement";
import { Link } from "react-router";

function OverViewContainer({
  title,
  children,
  itemLength,
  buttonLabel,
  navigate,
}) {
  return (
    <div className="w-full space-y-8">
      <TitleElement title={title} />

      <div className="space-y-3 "> {children}</div>

      <div className="flex items-center justify-between  border-t primary-border-color pt-5">
        <p className="text-neutral-500 text-sm">{itemLength}مورد یافت شد</p>
        <Link
          className="primary-bg text-white text-sm px-3 py-1.5 rounded-md"
          to={navigate || "/"}
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}

export default OverViewContainer;
