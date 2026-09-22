import React from "react";
import TableTitle from "./elements/TableTitle";

function Table({ children, headerData }) {
  return (
    <div className="border primary-border-color rounded p-5 space-y-8">
      <TableTitle header={headerData} />
      <table className="w-full">{children}</table>
    </div>
  );
}

export default Table;
