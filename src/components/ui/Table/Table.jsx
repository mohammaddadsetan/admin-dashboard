import React from "react";
import TableTitle from "./elements/TableTitle";

function Table({ data }) {
  return (
    <div className="border primary-border-color rounded p-5">
      <TableTitle headerTitle={data.headerTitle} />
    </div>
  );
}

export default Table;
