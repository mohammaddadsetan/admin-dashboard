import React from "react";

function TableTitle({ headerTitle }) {
  const { Button } = headerTitle;
  return (
    <div className="flex items-center justify-between">
      <strong className="font-bold text-3xl">{headerTitle.title}</strong>
      <div>{Button ? <Button /> : ""}</div>
    </div>
  );
}

export default TableTitle;
