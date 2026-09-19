import React from "react";

function TitleElement({ title, buttons }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-3xl font-bold">{title}</p>

      <div>{buttons}</div>
    </div>
  );
}

export default TitleElement;
