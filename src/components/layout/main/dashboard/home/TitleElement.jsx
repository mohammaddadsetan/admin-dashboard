import React from "react";

function TitleElement({ title, buttons }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-2xl font-bold">{title}</p>
      {buttons && <div className="flex-center gap-4">{buttons}</div>}
    </div>
  );
}

export default TitleElement;
