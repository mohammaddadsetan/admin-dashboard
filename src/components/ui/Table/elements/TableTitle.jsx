import React from "react";

function TableTitle({ header }) {
  const { Button } = header;

  return (
    <div className="flex items-center justify-between">
      <strong className="font-bold text-3xl">{header.title}</strong>
      <div>{Button ? <Button /> : ""}</div>
    </div>
  );
}

export default TableTitle;
